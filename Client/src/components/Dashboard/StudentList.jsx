import { useQuery } from "@apollo/client";
import { useDispatch, useSelector } from "react-redux";
import { setStudents, setUsernames } from "@/Store/studentSlice";
import { RefreshCcw, Search } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "@/components/ui/input";
import { query as GET_STUDENTS } from "@/Apollo/queries";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useEffect, useState } from "react";
import service from "@/Appwrite/config";
import { Query } from "appwrite";
import Menu from "./Menu";

const StudentList = () => {
  const user = useSelector((state) => state.auth.userData);
  const dispatch = useDispatch();
  const [sort, setSort] = useState("Name");
  const [search, setSearch] = useState("");

  useEffect(() => {
    handleFetch();
  }, []);

  async function handleFetch() {
    const students = await service.listStudents([
      Query.equal("userId", [user.$id]),
      Query.orderAsc("studentName"),
    ]);
    const usernames = students.documents.map(
      (student) => student.studentUsername
    );
    await dispatch(setStudents(students.documents));
    await dispatch(setUsernames(usernames));
  }

  const students = useSelector((state) => state.student.students);
  const usernames = useSelector((state) => state.student.usernames);

  const { data, loading, error, refetch } = useQuery(GET_STUDENTS, {
    variables: { usernames },
  });

  if (error) return <div>Error: {error.message}</div>;

  const getStudentName = (studentUsername) => {
    const student = students.find(
      (s) => s.studentUsername.toLowerCase() === studentUsername.toLowerCase()
    );
    return student ? student.studentName : null;
  };

  const sortedData = () => {
    if (sort === "problems") {
      return data.getStudents.slice().sort((a, b) => b.all - a.all);
    }
    return data.getStudents.slice().sort((a, b) => {
      const nameA = a.studentName || getStudentName(a.studentUsername) || "";
      const nameB = b.studentName || getStudentName(b.studentUsername) || "";
      return nameA.localeCompare(nameB);
    });
  };

  const filteredData = () => {
    const filtered = sortedData().filter((student) => {
      const studentName =
        students.find(
          (s) =>
            s.studentUsername.toLowerCase() ===
            student.studentUsername.toLowerCase()
        )?.studentName || student.studentName;
      if (
        student.studentName == null ||
        student.studentName == undefined ||
        student.studentName == ""
      )
        return (
          studentName.toLowerCase().includes(search.toLowerCase()) ||
          student.studentUsername.toLowerCase().includes(search.toLowerCase())
        );
      else {
        return (
          student.studentName.toLowerCase().includes(search.toLowerCase()) ||
          student.studentUsername.toLowerCase().includes(search.toLowerCase())
        );
      }
    });
    return filtered;
  };

  return (
    <>
      <div className="flex w-full items-center space-x-2 flex-wrap">
        <Search className="w-4 h-4 sm:h-6 sm:w-6 sm:inline-block hidden" />
        <Input
          className="text-xs sm:text-base sm:p-4 p-2 sm:w-[250px] w-[100px]"
          type="text"
          placeholder="Search By Name or Username"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Select onValueChange={(value) => setSort(value)} defaultValue="name">
          <div className="text-xs sm:text-base text-center">Sort By:</div>
          <SelectTrigger className="text-xs sm:text-base sm:p-4 p-2 sm:w-[120px] w-[90px]">
            <SelectValue placeholder="Name" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="name">Name</SelectItem>
              <SelectItem value="problems">Problems</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Button
          variant="outline"
          onClick={async() => {
            await handleFetch();
            refetch();
          }}
        >
          <RefreshCcw className="w-4 h-4 sm:h-6 sm:w-6" />
        </Button>
        <Menu />
      </div>
      {loading ? (
        <div className="text-center text-6xl">...Loading</div>
      ) : (
        <div className="flex border rounded-md flex-col h-full">
          <Table>
            <TableHeader>
              <TableRow className="text-xs sm:text-base">
                <TableHead className="text-center">Student Name</TableHead>
                <TableHead className="text-center">Student Username</TableHead>
                <TableHead className="text-center">Problems</TableHead>
                <TableHead className="text-center">Easy</TableHead>
                <TableHead className="text-center">Medium</TableHead>
                <TableHead className="text-center">Hard</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {data &&
                filteredData().map((student) => {
                  const fallbackName = students.find(
                    (s) =>
                      s.studentUsername.toLowerCase() ===
                      student.studentUsername.toLowerCase()
                  )?.studentName;
                  const studentName =
                    student.studentName || fallbackName || "N/A";
                  return (
                    <TableRow
                      key={student.studentUsername}
                      className="text-center text-xs sm:text-base"
                    >
                      <TableCell>{studentName}</TableCell>
                      <TableCell className="underline-offset-2 underline">
                        <a
                          href={`https://www.leetcode.com/u/${student.studentUsername}`}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {student.studentUsername}
                        </a>
                      </TableCell>
                      <TableCell>{student.all}</TableCell>
                      <TableCell className="text-green-500">
                        {student.easy}
                      </TableCell>
                      <TableCell className="text-yellow-500">
                        {student.medium}
                      </TableCell>
                      <TableCell className="text-red-500">
                        {student.hard}
                      </TableCell>
                    </TableRow>
                  );
                })}
            </TableBody>
          </Table>
        </div>
      )}
    </>
  );
};

export default StudentList;
