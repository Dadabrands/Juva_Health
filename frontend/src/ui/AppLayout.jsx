
import Main from "./Main";
import Sidebar from "./Sidebar";

function AppLayout() {
  return (
    <div className="flex h-screen bg-white dark:bg-slate-900">
      <section className="w-[15%] sm:w-[15%]">
        <Sidebar />
      </section>
      <section className="flex flex-col w-[90%] sm:w-[85%] overflow-auto">
        <Main />
      </section>
    </div>

  
  );
}

export default AppLayout;
