import { NavLink } from "react-router-dom";

const SidebarLink = ({ to, icon: Icon, label }) => {
  return (
    <NavLink to={to} className="group flex items-center gap-2 hover:bg-primary hover:rounded">
      <div className="group-hover:text-white text-primary p-1 rounded">
        <Icon />
      </div>
      <div className="hidden sm:flex hover:text-slate-100 cursor-pointer group-hover:text-white">
        {label}
      </div>
    </NavLink>
  );
};

export default SidebarLink;
