import { fetchProfileImg } from "@/utils/actions";
import { FaRegUser } from "react-icons/fa";

async function UserIcon() {
  const profileImg = await fetchProfileImg();
  if (profileImg) {
    return (
      <img src={profileImg} className="w-6 h-6 rounded-full object-cover"></img>
    );
  }
  return <FaRegUser className="w-6 h-6 bg-primary rounded-full text-white " />;
}

export default UserIcon;
