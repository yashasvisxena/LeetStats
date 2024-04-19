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
const StudentList = () => {
  return (
    <div className="flex flex-col w-8/12 space-y-3 border rounded-lg">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-3/12 text-center">Student Name</TableHead>
            <TableHead className="w-3/12 text-center">
              Student Username
            </TableHead>
            <TableHead className="text-center">Number of questions</TableHead>
            <TableHead className="text-center">Easy</TableHead>
            <TableHead className="text-center">Medium</TableHead>
            <TableHead className="text-center">Hard</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="text-center">INV001</TableCell>
            <TableCell className="text-center">Paid</TableCell>
            <TableCell className="text-center">Credit Card</TableCell>
            <TableCell className="text-center">$250.00</TableCell>
            <TableCell className="text-center">$250.00</TableCell>
            <TableCell className="text-center">$250.00</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
};

export default StudentList;
