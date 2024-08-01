
const Qustions = () => {
  return (
    <div>
   

<div className="flex flex-col min-h-screen">
  <header className="bg-primary text-primary-foreground py-4 px-6 shadow bg-forButton">
    <div className="container mx-auto flex items-center justify-between">
      <h1 className="text-2xl font-bold font-sans">Q&amp;A</h1>
      <div className="relative">
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
          className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
        >
          <circle cx="11" cy="11" r="8"></circle>
          <path d="m21 21-4.3-4.3"></path>
        </svg>
        <input
          className="flex h-10 w-full border border-input px-3 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 pl-10 pr-4 py-2 rounded-md bg-primary/20 focus:bg-primary/30 focus:outline-none bg-forButton"
          placeholder="Search questions..."
          type="search"
        />
      </div>
    </div>
  </header>
  <main className="flex-1 container mx-auto py-8 px-4 md:px-6">
    <div className="grid gap-6">
      <div className="grid gap-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold font-sans">Recent Questions</h2>
        </div>
        <div className="grid gap-4">
          <div
            className="rounded-lg border bg-card text-card-foreground shadow-sm p-4 flex items-start gap-4"
            data-v0-t="card"
          >
            <span className="relative flex h-10 w-10 overflow-hidden rounded-full shrink-0">
              <img className="aspect-square h-full w-full" alt="@shadcn" src="/placeholder-user.jpg" />
            </span>
            <div className="flex-1 grid gap-2">
              <div className="flex items-center justify-between">
                <a className="font-medium text-lg" href="#">
                  How do I set up a React project from scratch?
                </a>
                <div
                  className="inline-flex w-fit items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground text-xs"
                  data-v0-t="badge"
                >
                  Unanswered
                </div>
              </div>
              <p className="text-muted-foreground line-clamp-2">
                Im new to React and I want to set up a project from scratch. Can someone guide me through the
                process?
              </p>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <div className="flex items-center gap-1">
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
                    className="w-4 h-4"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                  <span>2 hours ago</span>
                </div>
                <div className="flex items-center gap-1">
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
                    className="w-4 h-4"
                  >
                    <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path>
                  </svg>
                  <span>0 answers</span>
                </div>
                <div className="flex items-center gap-1">
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
                    className="w-4 h-4"
                  >
                    <path d="M7 10v12"></path>
                    <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z"></path>
                  </svg>
                  <span>3 votes</span>
                </div>
              </div>
            </div>
          </div>
          <div
            className="rounded-lg border bg-card text-card-foreground shadow-sm p-4 flex items-start gap-4"
            data-v0-t="card"
          >
            <span className="relative flex h-10 w-10 overflow-hidden rounded-full shrink-0">
              <img className="aspect-square h-full w-full" alt="@shadcn" src="/placeholder-user.jpg" />
            </span>
            <div className="flex-1 grid gap-2">
              <div className="flex items-center justify-between">
                <a className="font-medium text-lg" href="#">
                  What is the best way to handle state in a React application?
                </a>
                <div
                  className="inline-flex w-fit items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 text-xs"
                  data-v0-t="badge"
                >
                  Answered
                </div>
              </div>
              <p className="text-muted-foreground line-clamp-2">
                Im building a React app and Im not sure how to best manage the state. Can someone provide some
                guidance on the different state management approaches?
              </p>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <div className="flex items-center gap-1">
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
                    className="w-4 h-4"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                  <span>1 day ago</span>
                </div>
                <div className="flex items-center gap-1">
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
                    className="w-4 h-4"
                  >
                    <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path>
                  </svg>
                  <span>4 answers</span>
                </div>
                <div className="flex items-center gap-1">
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
                    className="w-4 h-4"
                  >
                    <path d="M7 10v12"></path>
                    <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z"></path>
                  </svg>
                  <span>12 votes</span>
                </div>
              </div>
            </div>
          </div>
          <div
            className="rounded-lg border bg-card text-card-foreground shadow-sm p-4 flex items-start gap-4"
            data-v0-t="card"
          >
            <span className="relative flex h-10 w-10 overflow-hidden rounded-full shrink-0">
              <img className="aspect-square h-full w-full" alt="@shadcn" src="/placeholder-user.jpg" />
            </span>
            <div className="flex-1 grid gap-2">
              <div className="flex items-center justify-between">
                <a className="font-medium text-lg" href="#">
                  How can I optimize the performance of my React application?
                </a>
                <div
                  className="inline-flex w-fit items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground text-xs"
                  data-v0-t="badge"
                >
                  Unanswered
                </div>
              </div>
              <p className="text-muted-foreground line-clamp-2">
                Ive noticed my React app is starting to feel a bit slow. What are some best practices I can follow
                to improve the performance?
              </p>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <div className="flex items-center gap-1">
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
                    className="w-4 h-4"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                  <span>3 days ago</span>
                </div>
                <div className="flex items-center gap-1">
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
                    className="w-4 h-4"
                  >
                    <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path>
                  </svg>
                  <span>0 answers</span>
                </div>
                <div className="flex items-center gap-1">
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
                    className="w-4 h-4"
                  >
                    <path d="M7 10v12"></path>
                    <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z"></path>
                  </svg>
                  <span>7 votes</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid gap-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-bold">Top Questions</h2>
          <a className="text-primary hover:underline" href="#">
            See all
          </a>
        </div>
        <div className="grid gap-4">
          <div
            className="rounded-lg border bg-card text-card-foreground shadow-sm p-4 flex items-start gap-4"
            data-v0-t="card"
          >
            <span className="relative flex h-10 w-10 overflow-hidden rounded-full shrink-0">
              <img className="aspect-square h-full w-full" alt="@shadcn" src="/placeholder-user.jpg" />
            </span>
            <div className="flex-1 grid gap-2">
              <div className="flex items-center justify-between">
                <a className="font-medium text-lg" href="#">
                  How do I set up a React project from scratch?
                </a>
                <div
                  className="inline-flex w-fit items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 text-xs"
                  data-v0-t="badge"
                >
                  Answered
                </div>
              </div>
              <p className="text-muted-foreground line-clamp-2">
                Im new to React and I want to set up a project from scratch. Can someone guide me through the
                process?
              </p>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <div className="flex items-center gap-1">
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
                    className="w-4 h-4"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                  <span>2 weeks ago</span>
                </div>
                <div className="flex items-center gap-1">
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
                    className="w-4 h-4"
                  >
                    <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path>
                  </svg>
                  <span>12 answers</span>
                </div>
                <div className="flex items-center gap-1">
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
                    className="w-4 h-4"
                  >
                    <path d="M7 10v12"></path>
                    <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z"></path>
                  </svg>
                  <span>45 votes</span>
                </div>
              </div>
            </div>
          </div>
          <div
            className="rounded-lg border bg-card text-card-foreground shadow-sm p-4 flex items-start gap-4"
            data-v0-t="card"
          >
            <span className="relative flex h-10 w-10 overflow-hidden rounded-full shrink-0">
              <img className="aspect-square h-full w-full" alt="@shadcn" src="/placeholder-user.jpg" />
            </span>
            <div className="flex-1 grid gap-2">
              <div className="flex items-center justify-between">
                <a className="font-medium text-lg" href="#">
                  What is the best way to handle state in a React application?
                </a>
                <div
                  className="inline-flex w-fit items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 text-xs"
                  data-v0-t="badge"
                >
                  Answered
                </div>
              </div>
              <p className="text-muted-foreground line-clamp-2">
                Im building a React app and Im not sure how to best manage the state. Can someone provide some
                guidance on the different state management approaches?
              </p>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <div className="flex items-center gap-1">
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
                    className="w-4 h-4"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                  <span>1 month ago</span>
                </div>
                <div className="flex items-center gap-1">
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
                    className="w-4 h-4"
                  >
                    <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path>
                  </svg>
                  <span>20 answers</span>
                </div>
                <div className="flex items-center gap-1">
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
                    className="w-4 h-4"
                  >
                    <path d="M7 10v12"></path>
                    <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z"></path>
                  </svg>
                  <span>78 votes</span>
                </div>
              </div>
            </div>
          </div>
          <div
            className="rounded-lg border bg-card text-card-foreground shadow-sm p-4 flex items-start gap-4"
            data-v0-t="card"
          >
            <span className="relative flex h-10 w-10 overflow-hidden rounded-full shrink-0">
              <img className="aspect-square h-full w-full" alt="@shadcn" src="/placeholder-user.jpg" />
            </span>
            <div className="flex-1 grid gap-2">
              <div className="flex items-center justify-between">
                <a className="font-medium text-lg" href="#">
                  How can I optimize the performance of my React application?
                </a>
                <div
                  className="inline-flex w-fit items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80 text-xs"
                  data-v0-t="badge"
                >
                  Answered
                </div>
              </div>
              <p className="text-muted-foreground line-clamp-2">
                Ive noticed my React app is starting to feel a bit slow. What are some best practices I can fol
              </p>
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <div className="flex items-center gap-1">
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
                    className="w-4 h-4"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <polyline points="12 6 12 12 16 14"></polyline>
                  </svg>
                  <span>2 months ago</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</div>
    </div>
  )
}

export default Qustions
