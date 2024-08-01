import { useState } from "react";

const Registion_Login = () => {
  const [isLogin, setIsLogin] = useState(false);
  return (
    <div>
      <div className="w-full max-w-5xl mx-auto gap-10 py-12 px-4 md:px-6 h-screen">
        {isLogin
          ? <div className="flex items-center justify-center">
              <div className="w-full max-w-md space-y-6">
                <div className="space-y-2 text-center">
                  <h1 className="text-3xl font-bold font-sans">Sign Up</h1>
                  <p className="text-muted-foreground">
                    Already have an account?{" "}
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
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 bg-backgroundclr   "
                      id="username"
                      placeholder="Enter your username"
                      required=""
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
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50     bg-backgroundclr"
                      id="name"
                      placeholder="Enter your name"
                      required=""
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
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 bg-backgroundclr   "
                      id="password"
                      placeholder="Enter your password"
                      required=""
                      type="password"
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
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 bg-backgroundclr   "
                      id="confirm-password"
                      placeholder="Confirm your password"
                      required=""
                      type="password"
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
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 bg-backgroundclr   "
                      id="email"
                      placeholder="Enter your email"
                      required=""
                      type="email"
                    />
                  </div>
                  <button
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full bg-forButton"
                    type="submit"
                  >
                    Sign Up
                  </button>
                </form>
              </div>
            </div>
          : <div className="flex items-center justify-center">
              <div className="w-full max-w-md space-y-6">
                <div className="space-y-2 text-center">
                  <h1 className="text-3xl font-bold font-sans">Log In</h1>
                  <p className="text-muted-foreground">
                    Dont have an account?{" "}
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
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 bg-backgroundclr   "
                      id="email-or-username"
                      placeholder="Enter your email or username"
                      required=""
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
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 bg-backgroundclr   "
                      id="password"
                      placeholder="Enter your password"
                      required=""
                      type="password"
                    />
                  </div>
                  <button
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full bg-forButton"
                    type="submit"
                  >
                    Sign Up
                  </button>
                </form>
              </div>
            </div>}
      </div>
    </div>
  );
};

export default Registion_Login;
