import { Link } from 'react-router-dom';
import { PopularQustions } from "../store/slice/post.Sclice"
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
const Homepage = () => {
  const dispatch = useDispatch();
  const popularQustions = useSelector((state) => state.post?.popularQustions)
  useEffect(() => {
    dispatch(PopularQustions())
  }, [])
  return (
    <div className="flex flex-col min-h-dvh bg-backgroundclr">
      <main className="flex-1">
        <section className="bg-background py-12 md:py-20">
          <div className=" px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl font-sans">
                Find Solutions to Your Problems
              </h1>
              <p className="text-mutedForeground md:text-xl">
                Search our community-driven knowledge base to get the answers
                you need.
              </p>
              <div className="relative w-full max-w-xl bg-forgroundclr">
                <div className="absolute left-3 top-1/2 -translate-y-1/2 text-mutedForeground">
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
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.3-4.3" />
                  </svg>
                </div>
                <input
                  className="flex h-10 border border-input px-3 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-mutedForeground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full rounded-md bg-muted pl-10 pr-4 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary "
                  type="search"
                  placeholder="Search for answers... "
                />
              </div>
            </div>
          </div>
        </section>
        <section className="bg-muted py-12 md:py-20 ">
          <div className=" px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl font-sans">
                Top Problem Categories
              </h2>
              <p className="text-mutedForeground md:text-lg">
                Explore the most common problems our community has solved.
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                <a
                  className="bg-backgroundclr rounded-md px-4 py-3 flex flex-col items-center gap-2 hover:bg-accent hover:text-accent-foreground transition-colors"
                  href="#"
                >
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
                    <polyline points="16 18 22 12 16 6" />
                    <polyline points="8 6 2 12 8 18" />
                  </svg>
                  <span className="text-sm font-medium">Programming</span>
                </a>
                <a
                  className="bg-backgroundclr rounded-md px-4 py-3 flex flex-col items-center gap-2 hover:bg-accent hover:text-accent-foreground transition-colors"
                  href="#"
                >
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
                    <ellipse cx="12" cy="5" rx="9" ry="3" />
                    <path d="M3 5V19A9 3 0 0 0 21 19V5" />
                    <path d="M3 12A9 3 0 0 0 21 12" />
                  </svg>
                  <span className="text-sm font-medium">Databases</span>
                </a>
                <a
                  className="bg-backgroundclr rounded-md px-4 py-3 flex flex-col items-center gap-2 hover:bg-accent hover:text-accent-foreground transition-colors"
                  href="#"
                >
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
                    <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9Z" />
                  </svg>
                  <span className="text-sm font-medium">Cloud</span>
                </a>
                <a
                  className="bg-backgroundclr rounded-md px-4 py-3 flex flex-col items-center gap-2 hover:bg-accent hover:text-accent-foreground transition-colors"
                  href="#"
                >
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
                    <rect width="16" height="16" x="4" y="4" rx="2" />
                    <rect width="6" height="6" x="9" y="9" rx="1" />
                    <path d="M15 2v2" />
                    <path d="M15 20v2" />
                    <path d="M2 15h2" />
                    <path d="M2 9h2" />
                    <path d="M20 15h2" />
                    <path d="M20 9h2" />
                    <path d="M9 2v2" />
                    <path d="M9 20v2" />
                  </svg>
                  <span className="text-sm font-medium">Hardware</span>
                </a>
              </div>
            </div>
          </div>
        </section>
        <section className="bg-backgroundclr py-12 md:py-20">
          <div className=" px-4 md:px-6">
            <div className="max-w-3xl mx-auto space-y-8">
              <div className="text-center space-y-4">
                <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl font-sans">
                  Popular Questions
                </h2>
                <p className="text-mutedForeground md:text-lg">
                  Check out the most viewed and answered questions in our
                  community.
                </p>
              </div>
              <div className="space-y-4">
                {
                  popularQustions && popularQustions.slice(0, 4).map((question) => (
                    <div key={question._id}
                      className="rounded-lg border bg-secondaryColor text-cardForeground shadow-sm"
                      data-v0-t="card"
                    >
                      <div className="flex flex-col space-y-1.5 p-6">
                        <h3 className="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">
                          <a className="font-medium hover:underline" href="#">
                            {question.title
                            }
                          </a>
                        </h3>
                        <p className="text-sm text-mutedForeground">
                          {question.body}
                        </p>
                      </div>
                      <div className="p-6 flex items-center justify-between">
                        <div className="flex items-center gap-2 text-sm text-mutedForeground">
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
                            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                            <circle cx="12" cy="7" r="4" />
                          </svg>
                          <span>John Doe</span>
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
                            <path d="M8 2v4" />
                            <path d="M16 2v4" />
                            <rect width="18" height="18" x="3" y="4" rx="2" />
                            <path d="M3 10h18" />
                          </svg>
                          <span>{question.createdAt}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10">
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
                              <path d="M7 10v12" />
                              <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" />
                            </svg>
                            <span className="sr-only">Upvote</span>
                          </button>
                          <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10">
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
                              <path d="M17 14V2" />
                              <path d="M9 18.12 10 14H4.17a2 2 0 0 1-1.92-2.56l2.33-8A2 2 0 0 1 6.5 2H20a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.76a2 2 0 0 0-1.79 1.11L12 22h0a3.13 3.13 0 0 1-3-3.88Z" />
                            </svg>
                            <span className="sr-only">Downvote</span>
                          </button>
                          <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10">
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
                              <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
                            </svg>
                            <span className="sr-only">Comment</span>
                          </button>
                        </div>
                      </div>
                    </div>

                  ))}



              </div>
            </div>
          </div>
        </section>
        <section className="bg-muted py-12 md:py-20">
          <div className=" px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center space-y-4">
              <h2 className="text-2xl font-bold tracking-tighter sm:text-3xl">
                Get Answers to Your Questions
              </h2>
              <p className="text-mutedForeground md:text-lg">
                Dont see the solution you need? Submit your own question and our
                community will help you find the answer.
              </p>
              <Link
                className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primaryForeground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                to="/askquestion"
              >
                Ask a Question
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Homepage;

