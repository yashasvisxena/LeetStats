import { useQuery} from "@apollo/client";
import { useSelector } from "react-redux";
import { RefreshCcw, Search, Trash, Edit } from "lucide-react";
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
import { useEffect, useState, useMemo, useCallback } from "react";
import service from "@/Appwrite/config";
import { Query } from "appwrite";

const StudentList = () => {
  const user = useSelector((state) => state.auth.userData);
  const [sort, setSort] = useState("problems");
  const [search, setSearch] = useState("");
  const [students, setStudents] = useState([]);
  const [editingStudent, setEditingStudent] = useState(null);
  const [editedName, setEditedName] = useState("");

  const { data, loading, error, refetch, networkStatus } = useQuery(
    GET_STUDENTS,
    {
      variables: {
        usernames: students.map((student) => student.studentUsername),
      },
      notifyOnNetworkStatusChange: true,
      skip: !students.length,
    }
  );

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const { documents } = await service.listStudents([
          Query.equal("userId", [user.$id]),
          Query.orderAsc("studentName"),
        ]);
        setStudents(documents || []);
      } catch (err) {
        console.error("Failed to fetch students:", err);
      }
    };

    fetchStudents();
  }, [user.$id]);

  useEffect(() => {
    if (data) {
      const apiData = data.getStudents || [];
      const merged = apiData.map((apiStudent) => {
        const additionalInfo = students.find(
          (s) =>
            s.studentUsername.toLowerCase() ===
            apiStudent.studentUsername.toLowerCase()
        );
        return {
          ...apiStudent,
          ...additionalInfo,
          studentName:
            apiStudent.studentName || additionalInfo?.studentName || "N/A",
        };
      });
      setStudents(merged);
    }
  }, [data]);

  const sortedData = useMemo(() => {
    const sorted = [...students];
    if (sort === "problems") {
      return sorted.sort((a, b) => b.all - a.all);
    } else if (sort === "name") {
      return sorted.sort((a, b) =>
        (a.studentName || "").localeCompare(b.studentName || "")
      );
    }
    return sorted;
  }, [students, sort]);

  const filteredData = useMemo(() => {
    const searchLower = search.toLowerCase();
    return sortedData.filter((student) => {
      const studentName = student.studentName || "";
      return (
        studentName.toLowerCase().includes(searchLower) ||
        student.studentUsername.toLowerCase().includes(searchLower)
      );
    });
  }, [sortedData, search]);

  // Handlers
  const handleSearchChange = useCallback((e) => {
    setSearch(e.target.value);
  }, []);

  const handleSortChange = useCallback((value) => {
    setSort(value);
  }, []);

  const handleEditClick = (student) => {
    setEditingStudent(student);
    setEditedName(student.studentName || "");
  };

  const handleEditChange = (e) => {
    setEditedName(e.target.value);
  };

  const handleEditSubmit = () => {
    
  };

  const handleDeleteClick = (documentId) => {
    service.deleteStudent(documentId)
      .then(() => {
        setStudents(students.filter(s => s.$id !== documentId));
      })
      .catch(err => console.error("Failed to delete student:", err));
  };

  return (
    <>
      <div className="flex w-full items-center sm:space-x-3 sm:space-y-0 space-y-2 sm:justify-start justify-between sm:flex-nowrap flex-wrap">
        <div className="flex items-center w-full sm:w-[275px] space-x-2">
          <Search className="w-4 h-4 sm:h-6 sm:w-6" />
          <Input
            className="text-xs sm:text-base sm:p-4 p-2 sm:w-[250px] w-full"
            type="text"
            placeholder="Search By Name or Username"
            value={search}
            onChange={handleSearchChange}
          />
        </div>
        <div className="flex items-center space-x-2">
          <div className="text-xs sm:text-base text-center">Sort By:</div>
          <Select onValueChange={handleSortChange} defaultValue="problems">
            <SelectTrigger className="text-xs sm:text-base sm:p-4 p-2 sm:w-[120px] w-[90px]">
              <SelectValue placeholder="Problems" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="problems">Problems</SelectItem>
                <SelectItem value="name">Name</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <Button variant="outline" onClick={() => refetch()}>
          <RefreshCcw className="w-4 h-4 sm:h-6 sm:w-6" />
        </Button>
      </div>
      {loading || networkStatus === 4 ? (
        <div className="text-center text-6xl">...Loading</div>
      ) : error ? (
        <div className="text-red-500 text-center text-3xl">
          Error: {error.message}
        </div>
      ) : (
        <div className="flex border rounded-md flex-col sm:h-[72vh] h-[66vh]">
          <Table>
            <TableHeader>
              <TableRow className="text-xs sm:text-base">
                <TableHead className="text-center">Student Name</TableHead>
                <TableHead className="text-center">Student Username</TableHead>
                <TableHead className="text-center">Problems</TableHead>
                <TableHead className="text-center">Easy</TableHead>
                <TableHead className="text-center">Medium</TableHead>
                <TableHead className="text-center">Hard</TableHead>
                <TableHead className="text-center">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredData.map((student) => (
                <TableRow
                  key={student.studentUsername}
                  className="text-center text-xs sm:text-base"
                >
                  <TableCell>
                    {editingStudent?.studentUsername === student.studentUsername ? (
                      <Input
                        value={editedName}
                        onChange={handleEditChange}
                        onBlur={handleEditSubmit}
                        className="text-xs sm:text-base sm:p-2 p-1"
                      />
                    ) : (
                      student.studentName
                    )}
                  </TableCell>
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
                  <TableCell className="text-red-500">{student.hard}</TableCell>
                  <TableCell>
                    {editingStudent?.studentUsername === student.studentUsername ? (
                      <Button
                        variant="outline"
                        onClick={() => {
                          setEditingStudent(null);
                          setEditedName("");
                        }}
                      >
                        Cancel
                      </Button>
                    ) : (
                      <>
                        <Button
                          variant="outline"
                          onClick={() => handleEditClick(student)}
                        >
                          <Edit className="w-4 h-4" />
                        </Button>
                        <Button
                          variant="outline"
                          onClick={() => handleDeleteClick(student.$id)}
                        >
                          <Trash className="w-4 h-4" />
                        </Button>
                      </>
                    )}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      )}
    </>
  );
};

export default StudentList;
