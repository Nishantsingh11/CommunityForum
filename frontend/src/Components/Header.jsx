import { Link, useNavigate } from 'react-router-dom';
import { useEffect, useMemo, useState, useRef } from 'react';
import { LuUser } from 'react-icons/lu';
import Cookies from 'universal-cookie';
import { useDispatch, useSelector } from 'react-redux';
import { Logout } from '../store/slice/authSclice';
import { SearchByTitle,  } from '../store/slice/post.Sclice';
const Header = () => {
  const dispatch = useDispatch();
  const dropdownRef = useRef(null);
  const SearchPost = useSelector((state) => state.post?.searchPosts);
  const cookies = useMemo(() => new Cookies(), []); // Memoize the cookies object
  const navigate = useNavigate();
  const [isLogin, setLogin] = useState(false);
  const [query, setQuery] = useState('');

  const handleLogut = () => {
    dispatch(Logout());
    cookies.remove('accessToken');
    cookies.remove('refreshToken');
    setLogin(!isLogin);
    navigate('/');
  };
  useEffect(() => {
    if (cookies.get('accessToken')) {
      setLogin(true);
    } else {
      setLogin(false);
    }
  }, [cookies, isLogin]);
 
  const handleSearch = (e) => {
    setQuery(e.target.value);
    dispatch(SearchByTitle(e.target.value));
  };
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setQuery(''); // Close the dropdown when clicking outside
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);



  const handleNavigate = (id) => {
    navigate(`/qustion/${id}`)
  }


  return (
    <div>
      <header className="bg-background px-4 md:px-6 py-4 border-b">
        <div className=" flex items-center justify-between">
          <Link className="flex items-center gap-2" to="/">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="w-6 h-6 text-primary"
            >
              <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
              <path d="M9 18h6" />
              <path d="M10 22h4" />
            </svg>
            <span className="text-lg font-semibold">SolutionHub</span>
          </Link>
          <nav className="hidden md:flex items-center gap-4">
            <Link
              className="text-sm font-medium hover:underline underline-offset-4"
              to="/qustions"
            >
              Questions
            </Link>
            <Link
              className="text-sm font-medium hover:underline underline-offset-4"
              to="/seetags"
            >
              Tags
            </Link>
            <a
              className="text-sm font-medium hover:underline underline-offset-4"
              href="#"
            >
              Users
            </a>
            <a
              className="text-sm font-medium hover:underline underline-offset-4"
              href="#"
            >
              Companies
            </a>
          </nav>

          <div className="flex items-center gap-3">
            <div className="relative" ref={dropdownRef}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="absolute left-3 top-1/2 -translate-y-1/2 text-mutedForeground"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
              <input
                className="flex h-10 w-full border border-input px-3 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-mutedForeground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 pl-10 pr-4 py-2 rounded-md bg-primary/20 focus:bg-primary/30 focus:outline-none bg-forButton"
                placeholder="Search questions..."
                type="search"
                onChange={handleSearch}
              />
              {query && SearchPost && (
                <div className="absolute left-0 right-0 bg-backgroundclr border border-gray-300 rounded-lg mt-2 max-h-80 overflow-y-auto shadow-lg z-10">
                  {SearchPost.length > 0 ? (
                    SearchPost.map((post, index) => (
                      <div
                        key={post._id}
                        className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
                        onClick={() => handleNavigate(post._id)}
                      >
                        {post.title}
                        {index < SearchPost.length - 1 && (
                          <hr className="border-t border-gray-300 mt-5" />
                        )}
                      </div>
                    ))
                  ) : (
                    <div className="px-4 py-2 text-gray-500">
                      No results found
                    </div>
                  )}
                </div>
              )}
            </div>

            {isLogin ? (
              <>
                <Link to="/userprofile">
                  <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3">
                    <LuUser className="mr-1 text-lg font-bold " />
                    User Profile
                  </button>
                </Link>
                <button
                  className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primaryForeground hover:bg-primary/90 h-9 rounded-md px-3"
                  onClick={handleLogut}
                >
                  Log Out
                </button>
              </>
            ) : (
              <Link to="/registration">
                <div className="flex items-center gap-3">
                  <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3">
                    Log In
                  </button>
                  <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primaryForeground hover:bg-primary/90 h-9 rounded-md px-3">
                    Sign Up
                  </button>
                </div>
              </Link>
            )}
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
