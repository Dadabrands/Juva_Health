import Logo from "./Logo"
import MainNav from "./MainNav"

function Sidebar() {
    return (
      <aside className="bg-gray-100 px-2 py-2 border-r border-gray-200 flex flex-col gap-8">
        <Logo />
        <MainNav />
      </aside>
    );
  }
  
  export default Sidebar;
  