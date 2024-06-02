import { useState } from "react";
import { useForm } from "react-hook-form";
import * as XLSX from "xlsx"; // For Excel files

import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";

import { useSelector } from "react-redux";
import service from "@/Appwrite/config";

const FileSubmit = () => {
  const { register, handleSubmit } = useForm();
  const user = useSelector((state) => state.auth.userData);
  const [error, setError] = useState("");

  async function FileRead(data) {
    setError("");
    const file = data.excelFile[0];
    const reader = new FileReader();
    reader.onload = async (e) => {
      const fileData = e.target.result;
      const workbook = XLSX.read(fileData, { type: "binary" });
      const sheetName = workbook.SheetNames[0];
      const sheetData = XLSX.utils.sheet_to_json(workbook.Sheets[sheetName]);
      try {
        for (const row of sheetData) {
          const student = await service.getStudent(row.UserName);
          if (student && user.$id == student.userId) {
            continue;
          }
          await service.addStudent(row.Name, row.UserName, user.$id);
        }
      } catch (err) {
        setError(err.message);
      }
    };
    reader.readAsBinaryString(file);
  }

  return (
    <form onSubmit={handleSubmit(FileRead)}>
      <div className="grid w-full max-w-sm items-center gap-3">
        {error && (
          <p className="text-red-500 text-sm sm:text-base text-center">
            {error}
          </p>
        )}
        <Label htmlFor="file">.xlsx/.csv file</Label>
        <Input
          className=""
          type="file"
          {...register("excelFile", {
            required: true,
            validate: {
              excelFormat: (value) =>
                value[0].name.endsWith(".xls") ||
                value[0].name.endsWith(".xlsx") ||
                "Please select a .xlsx/.xls file",
            },
          })}
        />
        <Button type="submit">Upload</Button>
      </div>
    </form>
  );
};

export default FileSubmit;