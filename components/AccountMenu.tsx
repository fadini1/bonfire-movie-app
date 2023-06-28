import { signOut } from "next-auth/react";
import { FaUserEdit } from 'react-icons/fa';
import { VscSignOut } from 'react-icons/vsc';

interface AccountMenuProps {
  visible?: boolean;
}

const AccountMenu: React.FC<AccountMenuProps> = ({ visible }) => {
  if (!visible) {
    return null;
  }

  return (
    <div className="absolute sm:top-10 top-8 right-1 text-center 
    rounded-t-lg">
      <div className="flex flex-col transition duration-300 hover:text-black
      text-zinc-900">
        {/* <div className="flex gap-2 items-center accountMenu rounded-t-lg">
          <FaUserEdit 
            className="lg:h-7 lg:w-7 sm:h-6 sm:w-6 h-5 w-5"
          />
          <div className="use-trebuchet lg:text-lg sm:text-base text-sm">
            Profile
          </div>
        </div> */}
        <div className="flex gap-2 items-center accountMenu rounded-b-lg">
          <VscSignOut 
            className="lg:h-7 lg:w-7 sm:h-6 sm:w-6 h-5 w-5"
          />
          <div
          onClick={() => signOut()} 
          className="use-trebuchet lg:text-lg sm:text-base text-sm">
            Sign Out
          </div>
        </div>
      </div>
    </div>
  )
}

export default AccountMenu;