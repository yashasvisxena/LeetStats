/* eslint-disable no-unused-vars */
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { RefreshCcw, Search } from "lucide-react";
import { Button } from "../ui/button";
import service from "@/Appwrite/config";
import { useSelector, useDispatch } from "react-redux";
import { Query } from "appwrite";
import { setStudents } from "@/Store/studentSlice";
import Row from "./Row";
import { useEffect, useState } from "react";

const StudentList = () => {
  const user = useSelector((state) => state.auth.userData);
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true); // State to track loading status
  const [refetch, setRefetch] = useState(false);

  useEffect(() => {
    handleFetch();
  }, []);

  async function handleFetch() {
    setLoading(true); // Set loading to true when fetching starts
    const students = await service.listStudents([
      Query.equal("userId", [user.$id]),
      Query.orderAsc("studentName"),
    ]);

    await dispatch(setStudents(students.documents));
    setRefetch((prev) => !prev);
    setLoading(false); // Set loading to false when fetching completes
  }

  const students = useSelector((state) => state.student.students);

  return (
    <>
      <div className="flex w-full items-center space-x-2">
        <Search className="w-4 h-4 sm:h-6 sm:w-6" />
        <Input
          className="w-7/12 sm:w-5/12 text-xs sm:text-base"
          type="text"
          placeholder="Search By Name or Username"
        />
        <Button
          variant="ghost"
          onClick={() => {
            handleFetch();  
          }}
        >
          <RefreshCcw className="w-4 h-4 sm:h-6 sm:w-6" />
        </Button>
      </div>
      {loading && (
        <div className="flex justify-center mt-4 text-6xl">
          ...Loading
          <div className="loader"></div>
        </div>
      )}
      {!loading && (
        <div className="flex flex-col border rounded-lg">
          <Table>
            <TableHeader>
              <TableRow className="text-xs sm:text-base">
                <TableHead className="text-center">Student Name</TableHead>
                <TableHead className="text-center">
                  Student Username
                </TableHead>
                <TableHead className="text-center">Problems</TableHead>
                <TableHead className="text-center">Easy</TableHead>
                <TableHead className="text-center">Medium</TableHead>
                <TableHead className="text-center">Hard</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {students &&
                students.map((student) => (
                  <Row key={student.$id} student={student} refetch={refetch} />
                ))}
            </TableBody>
          </Table>
        </div>
      )}
    </>
  );
};

export default StudentList;
