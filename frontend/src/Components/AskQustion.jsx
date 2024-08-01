
const AskQustion = () => {
  return (
    <div>


<div  className="flex flex-col min-h-screen">
  <header  className="bg-background border-b px-4 md:px-6 flex items-center justify-between h-16 shrink-0">
    <a  className="flex items-center gap-2" href="#">
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
         className="w-6 h-6"
      >
        <path d="m8 3 4 8 5-5 5 15H2L8 3z"></path>
      </svg>
      <span  className="font-bold text-lg">Q&amp;A</span>
    </a>
    <div  className="relative flex-1 max-w-md">
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
         className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground"
      >
        <circle cx="11" cy="11" r="8"></circle>
        <path d="m21 21-4.3-4.3"></path>
      </svg>
      <input
         className="flex h-10 rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 pl-10 w-full"
        placeholder="Search questions..."
        type="search"
      />
    </div>
    <nav  className="hidden md:flex items-center gap-4">
      <a  className="text-sm font-medium hover:underline" href="#">
        Home
      </a>
      <a  className="text-sm font-medium hover:underline" href="#">
        Questions
      </a>
      <a  className="text-sm font-medium hover:underline" href="#">
        Tags
      </a>
      <a  className="text-sm font-medium hover:underline" href="#">
        Users
      </a>
    </nav>
  </header>
  <main  className="flex-1 py-8 px-4 md:px-6">
    <div  className="max-w-3xl mx-auto grid gap-8">
      <div  className="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
        <div  className="flex flex-col space-y-1.5 p-6">
          <div  className="flex items-center gap-3">
            <span  className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
              <img  className="aspect-square h-full w-full" src="/placeholder-user.jpg" />
            </span>
            <div>
              <h3  className="font-semibold">Ask a new question</h3>
              <p  className="text-sm text-muted-foreground">Share your question with the community</p>
            </div>
          </div>
        </div>
        <div  className="p-6">
          <form  className="grid gap-4">
            <div  className="grid gap-1">
              <label
                 className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                htmlFor="title"
              >
                Question title
              </label>
              <input
                 className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                id="title"
                placeholder="Enter your question title"
              />
            </div>
            <div  className="grid gap-1">
              <label
                 className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                htmlFor="description"
              >
                Description
              </label>
              <textarea
                 className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                id="description"
                placeholder="Provide more details about your question"
                rows="4"
              ></textarea>
            </div>
            <div  className="grid gap-1">
              <label
                 className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                htmlFor="tags"
              >
                Tags
              </label>
              <input
                 className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                id="tags"
                placeholder="Add tags separated by commas"
              />
            </div>
            <div>
              <label  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                Attach an image (optional)
              </label>
              <div  className="flex items-center gap-2">
                <button  className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3">
                  Upload
                </button>
                <span  className="text-sm text-muted-foreground">No file chosen</span>
              </div>
            </div>
            <button
               className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 justify-self-end"
              type="submit"
            >
              Ask Question
            </button>
          </form>
        </div>
      </div>
      <div  className="grid gap-4">
        <div  className="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
          <div  className="flex flex-col space-y-1.5 p-6">
            <div  className="flex items-center gap-3">
              <span  className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
                <img  className="aspect-square h-full w-full" src="/placeholder-user.jpg" />
              </span>
              <div>
                <h3  className="font-semibold">How do I set up a React project with Tailwind CSS?</h3>
                <p  className="text-sm text-muted-foreground">Lorem ipsum</p>
              </div>
            </div>
          </div>
          <div  className="p-6">
            <div  className="flex flex-wrap gap-2">
              <div
                 className="inline-flex w-fit items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80"
                data-v0-t="badge"
              >
                react
              </div>
              <div
                 className="inline-flex w-fit items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80"
                data-v0-t="badge"
              >
                tailwind
              </div>
              <div
                 className="inline-flex w-fit items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80"
                data-v0-t="badge"
              >
                setup
              </div>
            </div>
          </div>
          <div  className="flex items-center p-6">
            <div  className="flex items-center justify-between">
              <div  className="text-sm text-muted-foreground">Asked 2 days ago</div>
              <button  className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10">
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
                   className="w-5 h-5"
                >
                  <circle cx="12" cy="12" r="1"></circle>
                  <circle cx="19" cy="12" r="1"></circle>
                  <circle cx="5" cy="12" r="1"></circle>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div  className="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
          <div  className="flex flex-col space-y-1.5 p-6">
            <div  className="flex items-center gap-3">
              <span  className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
                <img  className="aspect-square h-full w-full" src="/placeholder-user.jpg" />
              </span>
              <div>
                <h3  className="font-semibold">What are the best practices for writing clean and maintainable CSS?</h3>
                <p  className="text-sm text-muted-foreground">
                  Im looking to improve my CSS skills and write more organized and scalable CSS.
                </p>
              </div>
            </div>
          </div>
          <div  className="p-6">
            <div  className="flex flex-wrap gap-2">
              <div
                 className="inline-flex w-fit items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80"
                data-v0-t="badge"
              >
                css
              </div>
              <div
                 className="inline-flex w-fit items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80"
                data-v0-t="badge"
              >
                best-practices
              </div>
              <div
                 className="inline-flex w-fit items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80"
                data-v0-t="badge"
              >
                maintainability
              </div>
            </div>
          </div>
          <div  className="flex items-center p-6">
            <div  className="flex items-center justify-between">
              <div  className="text-sm text-muted-foreground">Asked 1 week ago</div>
              <button  className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10">
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
                   className="w-5 h-5"
                >
                  <circle cx="12" cy="12" r="1"></circle>
                  <circle cx="19" cy="12" r="1"></circle>
                  <circle cx="5" cy="12" r="1"></circle>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div  className="rounded-lg border bg-card text-card-foreground shadow-sm" data-v0-t="card">
          <div  className="flex flex-col space-y-1.5 p-6">
            <div  className="flex items-center gap-3">
              <span  className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
                <img  className="aspect-square h-full w-full" src="/placeholder-user.jpg" />
              </span>
              <div>
                <h3  className="font-semibold">How can I optimize the performance of my Next.js application?</h3>
                <p  className="text-sm text-muted-foreground">
                  Im building a Next.js app and I want to ensure its fast and efficient.
                </p>
              </div>
            </div>
          </div>
          <div  className="p-6">
            <div  className="flex flex-wrap gap-2">
              <div
                 className="inline-flex w-fit items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80"
                data-v0-t="badge"
              >
                next.js
              </div>
              <div
                 className="inline-flex w-fit items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80"
                data-v0-t="badge"
              >
                performance
              </div>
              <div
                 className="inline-flex w-fit items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80"
                data-v0-t="badge"
              >
                optimization
              </div>
            </div>
          </div>
          <div  className="flex items-center p-6">
            <div  className="flex items-center justify-between">
              <div  className="text-sm text-muted-foreground">Asked 3 days ago</div>
              <button  className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10">
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
                   className="w-5 h-5"
                >
                  <circle cx="12" cy="12" r="1"></circle>
                  <circle cx="19" cy="12" r="1"></circle>
                  <circle cx="5" cy="12" r="1"></circle>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
  <footer  className="bg-muted/40 border-t px-4 md:px-6 py-4 text-center text-sm text-muted-foreground">
    © 2024 Q&amp;A. All rights reserved.
  </footer>
</div>
    </div>
  )
}

export default AskQustion
