import Link from "next/link";
import { MdOutlineTravelExplore } from "react-icons/md";
import { Button } from "../ui/button";

function Logo() {
  return (
    <Button size={"default"} asChild>
      <Link href={"/"}>
        <MdOutlineTravelExplore className="w-6 h-6"></MdOutlineTravelExplore>
      </Link>
    </Button>
  );
}

export default Logo;
