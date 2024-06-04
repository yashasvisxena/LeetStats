import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
const Menu = () => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="text-xs sm:text-base sm:p-4 p-2 sm:w-[120px] w-[90px]" >More Actions</Button>
      </DropdownMenuTrigger>{" "}
      <DropdownMenuContent>
        <DropdownMenuItem>Delete Students</DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Download</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default Menu;
