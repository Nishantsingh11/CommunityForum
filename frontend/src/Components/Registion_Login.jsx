import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { RegisterUser } from '../store/slice/authSclice';
import { LoginUser } from '../store/slice/authSclice';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const Registion_Login = () => {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(false);
  const dispatch = useDispatch();
  const [data, setData] = useState({
    username: '',
    name: '',
    password: '',
    email: '',
    confirmPassword: '',
    avatar: null,
  });
  const [loginData, setLoginData] = useState({
    email: '',
    password: '',
  });
  console.log(data);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(data);
    dispatch(RegisterUser(data));
    setIsLogin(!isLogin);
  };
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      // Unwrap the result of the dispatch to handle success or failure
      await dispatch(LoginUser(loginData)).unwrap();

      // If the dispatch is successful, navigate to the desired page
      navigate('/');

      // Show success toast
      toast.success('Login successful', {
        position: 'top-center',
        autoClose: 2000,
      });
    } catch (error) {
      // If the dispatch fails, handle the error
      toast.error(error.message || 'Invalid username or password', {
        position: 'top-center',
        autoClose: 2000,
      });
    }
  };

  return (
    <div>
      <div className="w-full max-w-5xl mx-auto gap-10 py-12 px-4 md:px-6 h-screen">
        {isLogin ? (
          <div className="flex items-center justify-center">
            <div className="w-full max-w-md space-y-6">
              <div className="space-y-2 text-center">
                <h1 className="text-3xl font-bold font-sans">Sign Up</h1>
                <p className="text-mutedForeground">
                  Already have an account?{' '}
                  <button
                    className="underline cursor-pointer"
                    onClick={() => {
                      setIsLogin(!isLogin);
                    }}
                  >
                    Log in
                  </button>
                </p>
              </div>
              <form className="space-y-4">
                <div className="space-y-2">
                  <label
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 "
                    htmlFor="username"
                  >
                    Username
                  </label>
                  <input
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-mutedForeground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50     "
                    id="username"
                    placeholder="Enter your username"
                    required=""
                    onChange={(e) =>
                      setData({ ...data, username: e.target.value })
                    }
                  />
                </div>
                <div className="space-y-2">
                  <label
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 "
                    htmlFor="name"
                  >
                    Name
                  </label>
                  <input
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-mutedForeground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50      "
                    id="name"
                    placeholder="Enter your name"
                    required=""
                    onChange={(e) => setData({ ...data, name: e.target.value })}
                  />
                </div>
                <div className="space-y-2">
                  <label
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 "
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <input
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-mutedForeground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50     "
                    id="password"
                    placeholder="Enter your password"
                    required=""
                    type="password"
                    onChange={(e) =>
                      setData({ ...data, password: e.target.value })
                    }
                  />
                </div>

                <div className="space-y-2">
                  <label
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 "
                    htmlFor="confirm-password"
                  >
                    Confirm Password
                  </label>
                  <input
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-mutedForeground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50     "
                    id="confirm-password"
                    placeholder="Confirm your password"
                    required=""
                    type="password"
                    onChange={(e) =>
                      setData({ ...data, confirmPassword: e.target.value })
                    }
                  />
                </div>
                <div className="space-y-2">
                  <label
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 "
                    htmlFor="email"
                  >
                    Email
                  </label>
                  <input
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-mutedForeground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50     "
                    id="email"
                    placeholder="Enter your email"
                    required=""
                    type="email"
                    onChange={(e) =>
                      setData({ ...data, email: e.target.value })
                    }
                  />
                </div>
                {/* for the avatar */}
                <div className="space-y-2">
                  <label
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                    htmlFor="avatar"
                  >
                    Avatar
                  </label>
                  <input
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-mutedForeground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                    id="avatar"
                    type="file"
                    accept="image/*"
                    onChange={(e) => setData({ ...data, avatar: e.target.files[0] })}
                  />
                </div>

                <button
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primaryForeground hover:bg-primary/90 h-10 px-4 py-2 w-full  "
                  type="submit"
                  onClick={handleSubmit}
                >
                  Sign Up
                </button>
              </form>
            </div>
          </div>
        ) : (
          <div className="flex items-center justify-center">
            <div className="w-full max-w-md space-y-6">
              <div className="space-y-2 text-center">
                <h1 className="text-3xl font-bold font-sans">Log In</h1>
                <p className="text-mutedForeground">
                  Dont have an account?{' '}
                  <button
                    className="underline cursor-pointer"
                    onClick={() => {
                      setIsLogin(!isLogin);
                    }}
                  >
                    Sign up
                  </button>
                </p>
              </div>

              <form className="space-y-4">
                <div className="space-y-2">
                  <label
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 "
                    htmlFor="email-or-username"
                  >
                    Email or Username
                  </label>
                  <input
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-mutedForeground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50     "
                    id="email-or-username"
                    placeholder="Enter your email or username"
                    required=""
                    onChange={(e) =>
                      setLoginData({ ...loginData, email: e.target.value })
                    }
                  />
                </div>
                <div className="space-y-2">
                  <label
                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 "
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <input
                    className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-mutedForeground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50     "
                    id="password"
                    placeholder="Enter your password"
                    required=""
                    type="password"
                    onChange={(e) =>
                      setLoginData({
                        ...loginData,
                        password: e.target.value,
                      })
                    }
                  />
                </div>
                <button
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primaryForeground hover:bg-primary/90 h-10 px-4 py-2 w-full  "
                  type="submit"
                  onClick={handleLogin}
                >
                  Sign Up
                </button>
              </form>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Registion_Login;
