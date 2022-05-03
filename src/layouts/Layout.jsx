import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <>
      <main className="container mt-5">
        <Outlet />
      </main>
    </>
  );
}

export default Layout;
