import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { APP_NAME } from "@/lib/constants";

const Header = () => {
  return (
    // Header will be fixed at the top of the page and have minium height
    <div className="border-b border-primary/10">
    <div className="m-3 p-1 flex justify-between">
      <div className=" text-3xl font-bold text-primary">
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
    </div>
  );
};

export default Header;
