/* eslint-disable no-unused-vars */
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

const Form = () => {
  return (
    <div className="hidden sm:flex sm:flex-col items-center justify-center sm:w-4/12 space-y-3 rounded-lg ">
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Add Students Data</CardTitle>
          <CardDescription>
            Add from a excel file ehich contains name and username of students
            or enter manually.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="picture">.xlsx/.csv file</Label>
            <Input className="" id="file" type="file" />
          </div>
        </CardContent>
        <h1 className="flex justify-center">OR</h1>
        <CardContent>
          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="name">Name</Label>
            <Input type="text" id="name" placeholder="Name" />
            <Label htmlFor="username">Username</Label>
            <Input type="text" id="username" placeholder="LeetCode Username" />
          </div>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button>Add</Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Form;
