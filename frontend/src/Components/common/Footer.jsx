const Footer = () => {
  return (
    <div>
      <footer className="bg-background border-t px-4 md:px-6 py-6">
        <div className=" flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
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
          </div>
          <nav className="flex items-center gap-4">
            <a
              className="text-sm font-medium hover:underline underline-offset-4"
              href="#"
            >
              Terms of Service
            </a>
            <a
              className="text-sm font-medium hover:underline underline-offset-4"
              href="#"
            >
              Privacy Policy
            </a>
            <a
              className="text-sm font-medium hover:underline underline-offset-4"
              href="#"
            >
              Contact Us
            </a>
          </nav>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
