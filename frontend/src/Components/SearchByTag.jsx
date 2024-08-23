import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { FindByTag, GetPopularTags } from "../store/slice/post.Sclice";
import { useNavigate } from "react-router-dom";
const SearchByTag = () => {
  const [isFindbyTag, setIsFindbyTag] = useState(false)
  const PoluparTag = useSelector((state) => state.post?.popularTag)
  const FindBytag = useSelector((state) => state.post?.searchByTagPost)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(GetPopularTags())
  }, [])
  const findBytag = async (tag) => {
    await dispatch(FindByTag(tag)).unwrap()
  }
  useEffect(() => {
    if (FindByTag.length) {
      setIsFindbyTag(true)
    }
    else {
      setIsFindbyTag(false)
    }
  }, [])
  const handleNavigate = (id) => {
    navigate(`/qustion/${id}`)
  }
  const handleTagSearch = (e) => {
    dispatch(FindByTag(e.target.value))
  }
  const handleSeeAll = () => {
    navigate("/AllTags")
  }
  return (
    <div>
      <div className="flex flex-col md:flex-row w-full min-h-screen bg-background">
        <aside className="hidden md:block md:w-64 bg-card p-6 border-r">
          <h2 className="text-xl font-bold mb-4">Popular Tags</h2>
          <div className="grid grid-cols-2 gap-4">

            {PoluparTag && PoluparTag?.map((tag) => (


              <a key={tag._id}
                className="bg-muted rounded-md px-3 py-2 text-sm font-medium hover:bg-muted/50 transition-colors"
                href="#"
                onClick={() => findBytag(tag._id)}
              >
                {tag._id}
              </a>
            ))
            }
          </div>
        </aside>
        <div className="flex-1 p-6">
          <div className="max-w-xl mx-auto">
            <h1 className="text-3xl font-bold mb-4">Find Tags</h1>
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
                className="absolute left-3 top-3 h-5 w-5 text-mutedForeground"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.3-4.3" />
              </svg>
              <input
                className="flex h-10 border border-input px-3 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-mutedForeground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 w-full rounded-md bg-card pl-10 pr-4 py-3 focus:outline-none focus:ring-1 focus:ring-primary"
                placeholder="Search for tags..."
                type="search"
                onChange={handleTagSearch}
              />
            </div>
          </div>

          <hr className="mt-5 mb-5" />
          {
            isFindbyTag ? (

              <div className="grid gap-4">
                <div className="flex justify-center items-center text-center ">
                  <h1 className="text-2xl font-bold">Search Result :</h1>
                </div>
                {FindBytag && FindBytag.map((post) => (
                  <div
                    key={post._id}
                    className="rounded-lg border bg-card text-cardForeground shadow-sm p-4 flex items-start gap-4"
                    data-v0-t="card"
                    onClick={() => {
                      handleNavigate(post._id);
                    }}
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
                          {post.title}
                        </a>
                        <div
                          className="inline-flex w-fit items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground text-xs"
                          data-v0-t="badge"
                        >
                          Unanswered
                        </div>
                      </div>
                      <p className="text-mutedForeground line-clamp-2">
                        {post.body}
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
                          <span>{post.createdAt}</span>
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
                            <path d="M7 10v12" />
                            <path d="M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z" />
                          </svg>
                          <span>3 votes</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}

                {FindBytag.length > 4 && (
                  <div className="flex justify-center mt-4">
                    <button
                      className="px-4 py-2 rounded bg-blue-500 text-white hover:bg-blue-700"
                      onClick={handleSeeAll}
                    >
                      See All
                    </button>
                  </div>
                )}
              </div>

            ) : (
              <div className=" flex justify-center items-start">
                <h1>No result found </h1>
              </div>
            )
          }
        </div>
      </div>
    </div>
  );
};

export default SearchByTag;
