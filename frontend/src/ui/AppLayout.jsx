
import Header from "./Header";
import Main from "./Main";
import Sidebar from "./Sidebar";

function AppLayout() {
  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <Sidebar />

      {/* Main Content */}
      <div className="flex flex-col flex-1">
        {/* Header */}
        <Header />

        {/* Main */}
        <Main />
      </div>
    </div>
  );
}

export default AppLayout;

