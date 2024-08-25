import { useEffect, useState } from 'react';
import { Loader } from "../../Components"
import { useSelector, useDispatch } from 'react-redux';
import { GetUserPosts, UpdatePost, DetelePost } from '../../store/slice/post.Sclice';
import { Link, useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { FaEdit } from 'react-icons/fa';
import { MdDeleteOutline } from 'react-icons/md';
import { getTimeDifference } from '../common/GetTime'
import { useGetUserPosts } from '../Hooks/Post.Hook';

const Your_Qustions = () => {
  const [isModelOpen, setIsModelOpen] = useState(false);
  const [modelPost, setModelPost] = useState(null);
  const [updatedPost, setUpdatedPost] = useState({
    title: modelPost?.title,
    body: modelPost?.body,
    tags: modelPost?.tags,
    status: modelPost?.status
  })

  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const user = useSelector((state) => state.post.userPosts.user)
  const { getUserPost } = useGetUserPosts()

  const post = getUserPost
  useEffect(() => {
    if (post) {
      setLoading(false);
    } else {
      setLoading(true);
    }
  }, [post]);
  const handleNavigate = (id) => {
    navigate(`/qustion/${id}`);
  };

  const handleModel = (post) => {
    setIsModelOpen(!isModelOpen);
    setModelPost(post)
  }

  const handleFormUpdate = async (e) => {
    e.preventDefault();
    await dispatch(UpdatePost({ postId: modelPost._id, updatedPost })).unwrap();
    setIsModelOpen(false);
    dispatch(GetUserPosts());
  }
  const handleDeleteQustion = async (post) => {
    await dispatch(DetelePost({ postId: post._id })).unwrap();
    dispatch(GetUserPosts());
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
                  <Link
                    className="inline-flex h-10 items-center justify-center rounded-md bg-primary px-6 text-sm font-medium text-primaryForeground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                    to="/askquestion"
                  >
                    Ask a Question
                  </Link>
                </div>



                {isModelOpen && (
                  <div className="fixed inset-0 z-50 flex items-center justify-center  bg-opacity-100">
                    <div className="bg-white rounded-lg shadow-lg max-w-lg w-full p-6">
                      <h2 className="text-xl font-bold mb-4">Edit Post</h2>
                      <form className="grid gap-4">
                        <div>
                          <label className="block text-sm font-medium mb-2" htmlFor="title">
                            Title
                          </label>
                          <input
                            type="text"
                            id="title"
                            name="title"
                            required
                            defaultValue={modelPost.title}
                            className="w-full p-2 border border-gray-300 rounded-md"
                            onChange={(e) => setUpdatedPost({ ...updatedPost, title: e.target.value })}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2" htmlFor="body">
                            Body
                          </label>
                          <textarea
                            id="body"
                            name="body"
                            required
                            defaultValue={modelPost.body}
                            className="w-full p-2 border border-gray-300 rounded-md"
                            onChange={(e) => setUpdatedPost({ ...updatedPost, body: e.target.value })}
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2" htmlFor="tags">
                            Tags
                          </label>
                          <input
                            type="text"
                            id="tags"
                            name="tags"
                            required
                            defaultValue={modelPost.tags.join(",")}
                            className="w-full p-2 border border-gray-300 rounded-md"
                            onChange={(e) => setUpdatedPost({ ...updatedPost, tags: e.target.value })}
                          />
                          <small className="text-gray-500">Separate tags with commas</small>
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2" htmlFor="status">
                            Status
                          </label>
                          <select
                            id="status"
                            name="status"
                            required
                            defaultValue={modelPost.status}
                            className="w-full p-2 border border-gray-300 rounded-md"
                            onChange={(e) => setUpdatedPost({ ...updatedPost, status: e.target.value })}
                          >
                            <option value="unanswered">Unanswered</option>
                            <option value="answered">Answered</option>
                          </select>
                        </div>

                        <div className="flex justify-end gap-4">
                          <button
                            type="button"
                            onClick={handleModel}
                            className="bg-gray-200 text-gray-700 rounded-md px-4 py-2"
                          >
                            Cancel
                          </button>
                          <button
                            className="bg-blue-600 text-white rounded-md px-4 py-2"
                            onClick={handleFormUpdate}
                          >
                            Submit
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                )}
                <div className="grid gap-4">
                  {post?.map((post) => (
                    <div
                      key={post._id}
                      className="rounded-lg border bg-card text-cardForeground shadow-sm p-4 flex items-start gap-4"
                      data-v0-t="card"

                    >
                      <span className="relative flex h-10 w-10 overflow-hidden rounded-full shrink-0">
                        <img
                          className="aspect-square h-full w-full"
                          alt="Image Of user"
                          src={user.avatar}
                        />
                      </span>
                      <div className="flex-1 grid gap-2">
                        <div className="flex items-center justify-between">
                          <a className="font-medium text-lg" href="#">
                            {post.post.title}
                          </a>
                          <div
                            className="inline-flex w-fit items-center whitespace-nowrap rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 text-foreground text-xs"
                            data-v0-t="badge"
                          >
                            Unanswered
                          </div>
                        </div>
                        <div className='flex justify-end space-x-5 text-xl'>

                          <FaEdit onClick={() => handleModel(post.post)} />
                          <MdDeleteOutline onClick={() => handleDeleteQustion(post.post)} />
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
            </div>
          </main>
        </div>
      )}
    </div>
  );
};

export default Your_Qustions;
