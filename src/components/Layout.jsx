import { NavLink, Outlet, useParams } from 'react-router-dom';

const Layout = () => {
  const { city } = useParams(); 
  const navLinkClass = ({ isActive }) =>
    `px-4 py-2 rounded-md font-medium transition-colors duration-200
     ${isActive
       ? 'bg-blue-100 text-blue-600'
       : 'text-gray-700 hover:text-blue-600 hover:bg-gray-100'}`;

  return (
    <div className="w-full bg-gray-50 min-h-screen">
      {/* Navbar */}
      <header className="sticky top-0 z-50 bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-center gap-8">
          <NavLink to={`/${city}/today`} className={navLinkClass}>
            Today
          </NavLink>
          <NavLink to={`/${city}/hourly`} className={navLinkClass}>
            Hourly
          </NavLink>
          <NavLink to={`/${city}/daily`} className={navLinkClass}>
            Daily
          </NavLink>
        </div>
      </header>

      {/* Content Area */}
      <main className="max-w-6xl mx-auto px-4 py-8">
        <div className="bg-white rounded-2xl shadow-lg p-6 md:p-10 min-h-[300px] transition-all duration-300">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Layout;
