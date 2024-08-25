import { useEffect, useMemo, useState } from 'react';
import { Loader } from '../../Components';
import { useNavigate } from 'react-router-dom';
import { usePopularQustions, usePostDatas } from '../Hooks/Post.Hook';
import {getTimeDifference} from "../common/GetTime"
const Qustions = () => {
  const navigate = useNavigate();
  const [showAllQustion, setShowAllQustion] = useState(false);
  const { postFromDb } = usePostDatas();
  const { popularQustions } = usePopularQustions();
  const post = useMemo(() => postFromDb, [postFromDb])
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (post) {
      setLoading(false);
    } else setLoading(true);
  }, [post]);

  const handleNavigate = (id) => {
    navigate(`/qustion/${id}`);
  };

  const handleShowAll = () => {
    setShowAllQustion(!showAllQustion);
  }

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <div className="flex flex-col min-h-screen">
          <main className="flex-1 container mx-auto py-8 px-4 md:px-6">
            <div className="grid gap-6">
              <div className="grid gap-4">
                <div className="flex items-center justify-between">
                  <h2 className="text-xl font-bold font-sans">
                    Recent Questions
                  </h2>
                  {post.length > 6 && (
                    <a className="text-primary hover:underline" href="#"
                      onClick={handleShowAll}>
                      {
                        showAllQustion ? "Show less" : "See all"
                      }
                    </a>
                  )
                  }
                </div>
                <div className="grid gap-4">
                  {(showAllQustion ? post : post.slice(0, 6)).map((post) => (
                    <div
                      key={post.post._id}
                      className="rounded-lg border bg-card text-cardForeground shadow-sm p-4 flex items-start gap-4"
                      data-v0-t="card"
                      onClick={() => {
                        handleNavigate(post.post._id);
                      }}
                    >
                      <span className="relative flex h-10 w-10 overflow-hidden rounded-full shrink-0">
                        <img
                          className="aspect-square h-full w-full"
                          alt="@shadcn"
                          src={post?.user?.avatar || null}
                        />
                      </span>
                      <div className="flex-1 grid gap-2">
                        <div className="flex items-center justify-between">
                          <a className="font-medium text-lg" href="#">
                            {post.post.title}
                          </a>
                          <div
                            className={`inline-flex w-fit items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground text-xs ${post.post.status === "answered" ? "border-primary bg-primary text-primaryForeground" : "border-secondary bg-secondary text-secondaryForeground"}`}
                            data-v0-t="badge"
                          >
                            {post.post.status}
                          </div>
                        </div>
                        <p className="text-mutedForeground line-clamp-2">
                          {post.post.body}
                        </p>
                        <div className="flex items-center gap-2 text-xs text-mutedForeground">
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
                              <circle cx="12" cy="12" r="10" />
                              <polyline points="12 6 12 12 16 14" />
                            </svg>
                            <span>{getTimeDifference(post.post.createdAt)}</span>
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
                              <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
                            </svg>
                            <span>{post.commnets}</span>
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
                              <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                            </svg>
                            <span>{post.likes}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}





                </div>
              </div>

              {
                !showAllQustion && (
                  <div className="grid gap-4">
                    <div className="flex items-center justify-between">
                      <h2 className="text-xl font-bold">Top Questions</h2>
                      <a className="text-primary hover:underline" href="#">
                        See all
                      </a>
                    </div>
                    <div className="grid gap-4">
                      {
                        popularQustions && popularQustions.slice(0, 4).map((question) => (

                          <div key={question._id}
                            className="rounded-lg border bg-card text-cardForeground shadow-sm p-4 flex items-start gap-4"
                            data-v0-t="card"
                          >
                            <span className="relative flex h-10 w-10 overflow-hidden rounded-full shrink-0">
                              <img
                                className="aspect-square h-full w-full"
                                alt="@shadcn"
                                src="/placeholder-user.jpg"
                              />
                            </span>
                            <div className="flex-1 grid gap-2">
                              <div className="flex items-center justify-between">
                                <a className="font-medium text-lg" href="#">
                                  {question.title}
                                </a>
                                <div
                                  className="inline-flex w-fit items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondaryForeground hover:bg-secondary/80 text-xs"
                                  data-v0-t="badge"
                                >
                                  Answered
                                </div>
                              </div>
                              <p className="text-mutedForeground line-clamp-2">
                                {question.body}
                              </p>
                              <div className="flex items-center gap-2 text-xs text-mutedForeground">
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
                                    <circle cx="12" cy="12" r="10" />
                                    <polyline points="12 6 12 12 16 14" />
                                  </svg>
                                  <span>{getTimeDifference(question.createdAt)}</span>
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
                                    <path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" />
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
                                    <path d="M7 10v12" />
                                    <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" />
                                  </svg>
                                  <span>45 votes</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))}
                    </div>
                  </div>
                )
              }
            </div>
          </main>
        </div>
      )}
    </div>
  );
};

export default Qustions;
