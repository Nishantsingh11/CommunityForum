import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { GetPost } from '../store/slice/post.Sclice';
import Loader from './loader/loader';
import {
  Like, GetPostLike,

  CommentLike,
  GetCommnetLike,
} from '../store/slice/like.sclice';
import {
  GetCommentForPost,
  AddComment,
  DeleteComment,
} from '../store/slice/comment.Sclice';
import { toast } from 'react-toastify';
import { MdDeleteOutline } from 'react-icons/md';
import { BsReplyAllFill } from 'react-icons/bs';

const Qustion = () => {
  const [loading, setLoading] = useState(true);
  const [commentData, setCommentData] = useState({
    body: '',
  });
  const { id } = useParams();

  const dispatch = useDispatch();
  const post = useSelector((state) => state.post.post?.data);
  const comments = useSelector((state) => state.comment?.comments?.data);
  // console.log('comments', comments);
  const postLike = useSelector((state) => state.like?.like?.data);
  const CommnetLike = useSelector((state) => state.like.commentLike?.data);

  console.log('comment Like ', CommnetLike);

  useEffect(() => {
    const fetchedComments = async () => {
      
      await dispatch(GetCommentForPost({ postId: id })).unwrap()
      console.log("commnets from qustion", comments);
      for (let i = 0; i < comments?.length; i++) {
        await dispatch(GetCommnetLike(comments?.[i]?._id)).unwrap()
      }


    }
    fetchedComments()
  }, [dispatch, id]);

  useEffect(() => {
    dispatch(GetPostLike(id));
  }, [dispatch, id]);

  useEffect(() => {
    dispatch(GetPost(id));
  }, [dispatch, id]);


  // useEffect(()=>{
  // const fetachData = async() =>{
  //   try {
  //     await Promise.all([
  //       dispatch(GetPost(id)).unwrap(),
  //       dispatch(GetPostLike(id)).unwrap(),
  //     ]);
  // const fetchedComments = await dispatch(GetCommentForPost({ postId: id })).unwrap();
  // await fetchCommentLikes(fetchedComments);
  // setLoading(false);

  //   await dispatch(GetCommnetLike(fetchedComments._id)).unwrap()
  // } catch (error) {
  //   console.error("Error fetching post data:", error);
  //   setLoading(true);
  // }
  // }
  // const fetchCommentLikes = async (comments) => {
  //   try {
  //     await Promise.all(
  //       comments.map(comment =>
  //         dispatch(GetCommnetLike(comment._id)).unwrap()
  //       )
  //     );
  //   } catch (error) {
  //     console.error("Error fetching comment likes:", error);
  //   }
  // };
  // },[dispatch,id])

  useEffect(() => {
    if (post && post && postLike) {
      setLoading(false);
    } else {
      setLoading(true);
    }
  }, [post]);

  const handleLike = async () => {
    await dispatch(Like(id)).unwrap();
    dispatch(GetPostLike(id));
  };

  const HandleAddComment = async (e) => {
    e.preventDefault();
    try {
      await dispatch(AddComment({ postId: id, data: commentData })).unwrap();
      toast.success('Comment added successfully', {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      console.log(commentData);
      setCommentData({ body: '' });
      dispatch(GetCommentForPost({ postId: id }));
    } catch (error) {
      toast.error('Error adding comment:', {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };
  const handleDeleteCommnets = async (commentId) => {
    try {
      await dispatch(DeleteComment({ commentId: commentId })).unwrap();
      toast.success('Comment deleted successfully', {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      dispatch(GetCommentForPost({ postId: id }));
    } catch (error) {
      console.log(error);
      toast.error('Error deleting comment:', {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };
  const handleCommnetLike = async (commentId) => {
    try {
      await dispatch(CommentLike({ commentId })).unwrap();
      toast.success('Comment liked successfully', {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      dispatch(GetCommentForPost({ postId: id }));
    } catch (error) {
      toast.error('Error liking comment:', {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
  };
  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <div className="w-full max-w-4xl mx-auto px-4 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold mb-2 font-sans">{post.title}</h1>
            <p className="text-mutedForeground ">
              Asked by {post.user.username} on{' '}
              {post.post.createdAt?.slice(0, 10)}
            </p>
          </div>
          <div className="space-y-8">
            <div className="flex gap-4">
              <span className="relative flex shrink-0 overflow-hidden rounded-full w-10 h-10 border">
                <img
                  className="aspect-square h-full w-full"
                  src={post.user.avatar}
                />
              </span>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-2">
                  <div className="font-medium">{post.user.username}</div>
                  <time className="text-sm text-mutedForeground">
                    {post.post.createdAt.slice(0, 10)}{' '}
                  </time>
                </div>
                <div className="prose text-mutedForeground">
                  <p>{post.post.body}</p>
                  {post.post.img && (
                    <img
                      src={post.post.img}
                      alt="Comment Image"
                      width="400"
                      height="300"
                      className="rounded-md mt-4"
                      style={{ aspectRatio: '400 / 300', objectFit: 'cover' }}
                    />
                  )}
                </div>
                <div className="flex items-center gap-4 mt-4">
                  <button
                    className={`inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background  ${postLike.IsLikedUser ? 'bg-accent' : ''}  transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10`}
                    onClick={handleLike}
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
                      className="w-4 h-4"
                    >
                      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                    </svg>
                    <span className="sr-only">Like</span>
                  </button>
                  <div className="text-sm text-mutedForeground">
                    {postLike?.UserLen}
                  </div>
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
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                    <span className="sr-only">Favorite</span>
                  </button>
                  <div className="text-sm text-mutedForeground">5</div>
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
                  <div className="text-sm text-mutedForeground">15</div>
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
                      <path d="M4 12v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8" />
                      <polyline points="16 6 12 2 8 6" />
                      <line x1="12" x2="12" y1="2" y2="15" />
                    </svg>
                    <span className="sr-only">Share</span>
                  </button>
                </div>
              </div>
            </div>
            {/*  */}
            <div>
              <h2 className="text-2xl font-bold mb-4 font-sans">Comments:</h2>
            </div>
            {comments &&
              comments.map((comment) => (
                <div className="flex gap-4" key={comment._id}>
                  <span className="relative flex shrink-0 overflow-hidden rounded-full w-10 h-10 border">
                    <img
                      className="aspect-square h-full w-full"
                      src={comment.user.avatar}
                    />
                  </span>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <div className="font-medium">{comment.user.name}</div>
                      <time className="text-sm text-mutedForeground">
                        {comment.createdAt.slice(0, 10)}{' '}
                      </time>
                    </div>
                    <div className="prose text-mutedForeground">
                      <p className="text-mutedForeground" value={comment.body}>
                        {comment.body}
                      </p>
                    </div>
                    <div className="flex items-center gap-4 mt-4">
                      <button
                        className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10"
                        onClick={() => handleCommnetLike(comment._id)}
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
                          className="w-4 h-4"
                        >
                          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                        </svg>
                        <span className="sr-only">Like</span>
                      </button>
                      <div className="text-sm text-mutedForeground">{CommnetLike?.userid?.length}</div>

                      <button
                        className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-secondaryColor hover:text-accent-foreground h-10 w-10"
                        onClick={() => handleDeleteCommnets(comment._id)}
                      >
                        <MdDeleteOutline />

                        <span className="sr-only">Share</span>
                      </button>

                      <button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10">
                        <BsReplyAllFill />

                        <span className="sr-only">Favorite</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
          </div>
          <div className="mt-8">
            <h2 className="text-2xl font-bold mb-4 font-sans">Add a Comment</h2>
            <form className="grid gap-4">
              <div className="grid gap-2">
                <label
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="content"
                >
                  Comment
                </label>
                <textarea
                  className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-mutedForeground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  id="content"
                  name="content"
                  rows="4"
                  required={true}
                  value={commentData.body}
                  onChange={(e) =>
                    setCommentData({ ...commentData, body: e.target.value })
                  }
                />
              </div>
              <div className="grid gap-2">
                <label
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  htmlFor="image"
                >
                  Image
                </label>
                <input
                  className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-mutedForeground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                  id="image"
                  type="file"
                  name="image"
                />
              </div>
              <button
                className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primaryForeground hover:bg-primary/90 h-10 px-4 py-2"
                type="submit"
                onClick={HandleAddComment}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Qustion;
