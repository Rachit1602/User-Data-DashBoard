import React,{useState,useEffect, useContext} from "react"
import { Outlet,useNavigate } from "react-router-dom";
import { AuthContext } from "../utils/AuthContext";


const Navigation = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  //const [isLoggedIn, setIsLoggedIn] = useState(false);
  const {isLoggedIn}=useContext(AuthContext);
  const {logout} =useContext(AuthContext)

  const navigate=useNavigate();
  
  const handleLogout = () => {
    logout();
    navigate('/login');
  };

    return (
      <>
        <nav className="bg-blue-500">
            <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center">
                        <h1 className="text-xl font-bold text-white">MyLogo</h1>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:block">
                        <div className="flex items-baseline ml-10 space-x-4">
                        <a href="/" className="px-3 py-2 text-sm font-medium text-white rounded-md hover:bg-blue-600">
                            Home
                        </a>
                       
                        {!isLoggedIn &&(
                          <>
                            <a
                              href="/login"
                              className="px-3 py-2 text-sm font-medium text-white rounded-md hover:bg-blue-600"
                            >
                              Login
                            </a>
                            <a
                              href="/register"
                              className="px-3 py-2 text-sm font-medium text-white rounded-md hover:bg-blue-600"
                            >
                              Register
                            </a>
                          </>
                          )
                        }
                        {isLoggedIn && (
                          <>
                          <a href="/submissions" className="px-3 py-2 text-sm font-medium text-white rounded-md hover:bg-blue-600">
                            Dashboard
                          </a>
                          <button
                            onClick={handleLogout}
                            className="px-4 py-2 text-white bg-blue-500 border-black rounded hover:bg-blue-600"
                          >
                            Logout
                          </button>
                          </>
                        )}
                    </div>
                </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 text-white rounded-md hover:text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-800 focus:ring-white"
            >
              <svg
                className={`${isOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
              <svg
                className={`${isOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`${
          isOpen ? "block" : "hidden"
        } md:hidden bg-blue-500 space-y-1 px-2 pt-2 pb-3 sm:px-3`}
      >
        <a
          href="/"
          className="block px-3 py-2 text-base font-medium text-white rounded-md hover:bg-blue-600"
        >
          Home
        </a>
        {!isLoggedIn && (
          <>
        <a
          href="/login"
          className="block px-3 py-2 text-base font-medium text-white rounded-md hover:bg-blue-600"
        >
          Login
        </a>
        <a
          href="/register"
          className="block px-3 py-2 text-base font-medium text-white rounded-md hover:bg-blue-600"
        >
          Register
        </a>
        </> 
        )}
        {isLoggedIn && (
          <button
            onClick={handleLogout}
            className="px-4 py-2 text-white bg-blue-500 border-black rounded hover:bg-blue-600"
          >
            Logout
          </button>
        )}
      </div>
    </nav>
    <Outlet/>
    </>
  );
};

export default Navigation;