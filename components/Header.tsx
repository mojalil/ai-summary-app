import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { APP_NAME } from "@/constants";

const Header = () => {
  return (
    // Header will be fixed at the top of the page and have minium height
    <div className="m-5 p-1 flex justify-between">
      <div className=" text-lg">
        {APP_NAME}
      </div>
      <div className="flex flex-none justify-end">
        <Avatar>
          <AvatarImage
            src="https://avatars.githubusercontent.com/u/10572843?s=460&u=6f1c5d8b9a7c4b7b2c5a2c3a3c3d2c1d1e1f1&v=4"
            alt="@motypes"
          />
          <AvatarFallback>Mo</AvatarFallback>
        </Avatar>
      </div>
    </div>
  );
};

export default Header;
