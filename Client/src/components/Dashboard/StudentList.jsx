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
    refetch();
  }

  const students = useSelector((state) => state.student.students);
  const usernames = useSelector((state) => state.student.usernames);

  const { data, loading, error, refetch } = useQuery(GET_STUDENTS, {
    variables: { usernames },
  });

  if (error) return <div>Error: {error.message}</div>;

  const sortedData = () => {
    if (sort === "problems") {
      return data.getStudents.slice().sort((a, b) => b.all - a.all);
    }
    return data.getStudents;
  };

  const filteredData = () => {
    const filtered = sortedData().filter((student) => {
      const studentName =
        students.find((s) => s.studentUsername === student.studentUsername)
          ?.studentName || student.studentName;
      return (
        studentName.toLowerCase().includes(search.toLowerCase()) ||
        student.studentUsername.toLowerCase().includes(search.toLowerCase())
      );
    });
    return filtered;
  };

  return (
    <>
      <div className="flex w-full items-center space-x-2">
        <Search className="w-4 h-4 sm:h-6 sm:w-6" />
        <Input
          className="w-4/12 text-xs sm:text-base"
          type="text"
          placeholder="Search By Name or Username"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Select onValueChange={(value) => setSort(value)} defaultValue="name">
          <div>Sort By:</div>
          <SelectTrigger className="w-[120px]">
            <SelectValue placeholder="Name" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="name">Name</SelectItem>
              <SelectItem value="problems">Problems</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Button variant="outline" onClick={() => handleFetch()}>
          <RefreshCcw className="w-4 h-4 sm:h-6 sm:w-6" />
        </Button>
      </div>
      {loading ? (
        <div className="text-center text-6xl">...Loading</div>
      ) : (
        <div className="flex flex-col border rounded-lg">
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
            <TableBody className="overflow-y-scroll">
              {data &&
                filteredData().map((student) => {
                  const fallbackName = students.find(
                    (s) => s.studentUsername.toLowerCase() === student.studentUsername.toLowerCase()
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
