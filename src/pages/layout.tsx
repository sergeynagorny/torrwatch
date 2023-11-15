import { NavLink, Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <div className="h-screen w-screen">
      <div className="space-y-3 space-x-3">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/torrents">Torrents</NavLink>
      </div>
      <hr />
      <Outlet />
    </div>
  );
};
