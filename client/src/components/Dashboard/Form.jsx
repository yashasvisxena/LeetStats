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
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu } from "lucide-react";

const Form = () => {
  return (
    <Sheet className="w-1/12">
      <SheetTrigger asChild>
        <Menu className="w-4 h-4 sm:h-6 sm:w-6" />
      </SheetTrigger>
      <SheetContent side='left'>
        <Card className="my-6">
          <CardHeader>
            <CardTitle>Add Students Data</CardTitle>
            <CardDescription>
              Add from a excel file which contains name and username of students
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
              <Input
                type="text"
                id="username"
                placeholder="LeetCode Username"
              />
            </div>
          </CardContent>
          <CardFooter className="flex justify-center">
            <Button>Add</Button>
          </CardFooter>
        </Card>
      </SheetContent>
    </Sheet>
  );
};

export default Form;
