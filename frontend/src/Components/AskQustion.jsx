import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { CreatePost } from '../store/slice/post.Sclice';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
const AskQustion = () => {
  const navigate = useNavigate();
  const [data, setData] = useState({
    title: '',
    body: '',
    tags: '',
    img: null
  });
  console.log(data);
  const dispatch = useDispatch();
  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      await dispatch(CreatePost(data)).unwrap();
      navigate('/qustions');
      toast.success('post created successfully', {
        position: 'top-center',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } catch (error) {
      console.log(error);
      toast.error('Error creating post:', {
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
      <div className="flex flex-col min-h-screen">
        <main className="flex-1 py-8 px-4 md:px-6">
          <div className="max-w-3xl mx-auto grid gap-8">
            <div
              className="rounded-lg border bg-card text-cardForeground shadow-sm"
              data-v0-t="card"
            >
              <div className="flex flex-col space-y-1.5 p-6">
                <div className="flex items-center gap-3">
                  <span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
                    <img
                      className="aspect-square h-full w-full"
                      src="/placeholder-user.jpg"
                    />
                  </span>
                  <div>
                    <h3 className="font-semibold">Ask a new question</h3>
                    <p className="text-sm text-mutedForeground">
                      Share your question with the community
                    </p>
                  </div>
                </div>
              </div>
              <div className="p-6">
                <form className="grid gap-4">
                  <div className="grid gap-1">
                    <label
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      htmlFor="title"
                    >
                      Question title
                    </label>
                    <input
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-mutedForeground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      id="title"
                      placeholder="Enter your question title"
                      onChange={(e) =>
                        setData({ ...data, title: e.target.value })
                      }
                    />
                  </div>
                  <div className="grid gap-1">
                    <label
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      htmlFor="description"
                    >
                      Description
                    </label>
                    <textarea
                      className="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-mutedForeground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      id="description"
                      placeholder="Provide more details about your question"
                      rows="4"
                      onChange={(e) =>
                        setData({ ...data, body: e.target.value })
                      }
                    />
                  </div>
                  <div className="grid gap-1">
                    <label
                      className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                      htmlFor="tags"
                    >
                      Tags
                    </label>
                    <input
                      className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-mutedForeground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      id="tags"
                      placeholder="Add tags separated by commas"
                      onChange={(e) => setData({ ...data, tags: e.target.value })} />
                  </div>
                  <div>
                    <label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                      Attach an image (optional)
                    </label>
                      <div className="space-y-2">
                        <label
                          className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                          htmlFor="avatar"
                        >
                          Avatar
                        </label>
                        <input
                          className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-mutedForeground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                          id="avatar"
                          type="file"
                          accept="image/*"
                          onChange={(e) => setData({ ...data, img: e.target.files[0] })}
                        />
                      </div>
                  </div>
                  <button
                    className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primaryForeground hover:bg-primary/90 h-10 px-4 py-2 justify-self-end"
                    type="submit"
                    onClick={handleSubmit}
                  >
                    Ask Question
                  </button>
                </form>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AskQustion;
