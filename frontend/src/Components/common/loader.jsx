const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <svg className="animate-spin h-24 w-24 text-primary" viewBox="0 0 24 24">
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M12 2a10 10 0 1 0 10 10A10 10 0 0 0 12 2z"
        />
      </svg>
    </div>
  );
};

export default Loader;
