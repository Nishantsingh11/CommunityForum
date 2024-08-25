import { Loader } from "../../Components"
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useGetUserData, useGetUserPosts } from "../Hooks/Post.Hook";
const User_Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  let [loading, setLoading] = useState(true);
  const { user } = useGetUserData()
  const { getUserPost } = useGetUserPosts()
  const handleAskedQustion = () => {
    navigate(`/your-questions/${user?._id}`);
  };  
  useEffect(() => {
    if (user) {
      setLoading(false);
    }
  }, [user]);

  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <div className="w-full max-w-5xl mx-auto py-12 md:py-16 lg:py-20 h-screen">
          <div className="grid gap-8 md:grid-cols-3">
            <div className="col-span-1 md:col-span-1">
              <div
                className="rounded-lg bg-card text-cardForeground border-0 shadow-lg"
                data-v0-t="card"
              >
                <div className="relative h-40 md:h-60">
                  <img
                    src={user?.coverImage}
                    alt="Cover image"
                    width="800"
                    height="320"
                    className="w-full h-full object-cover rounded-t-lg"
                    style={{ aspectRatio: '800 / 320', objectFit: 'cover' }}
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-4 rounded-t-lg">
                    <div className="flex items-center gap-4">
                      <span className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full ring-4 ring-background">
                        <img
                          className="aspect-square h-full w-full"
                          src={user?.avatar}
                        />
                      </span>
                      <div className="text-white">
                        <h3 className="text-lg font-medium">{user?.name}</h3>
                        <p className="text-sm text-mutedForeground">
                          @{user?.username}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  <div className="grid gap-2">
                    <h4 className="text-lg font-medium">About</h4>
                    <p className="text-mutedForeground">
                      Im a passionate web developer with a strong interest in
                      building user-friendly and scalable applications.
                    </p>
                  </div>
                  <div
                    data-orientation="horizontal"
                    role="none"
                    className="shrink-0 bg-border h-[1px] w-full"
                  />
                  <div className="grid gap-2">
                    <h4 className="text-lg font-medium">Joined</h4>
                    <p className="text-mutedForeground">{user?.createdAt}</p>
                  </div>
                  <div
                    data-orientation="horizontal"
                    role="none"
                    className="shrink-0 bg-border h-[1px] w-full"
                  />
                  <div className="grid gap-2">
                    <h4 className="text-lg font-medium">Location</h4>
                    <p className="text-mutedForeground">San Francisco, CA</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-2 md:col-span-2 grid gap-8">
              <div
                className="rounded-lg bg-card text-cardForeground border-0 shadow-lg"
                data-v0-t="card"
              >
                <div className="flex flex-col space-y-1.5 p-6">
                  <h3 className="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">
                    Activity
                  </h3>
                </div>
                <div className="p-6 grid grid-cols-3 gap-6 text-center ">
                  <div
                    className="space-y-2 cursor-pointer "
                    onClick={handleAskedQustion}
                  >
                    <h4 className="text-4xl font-bold">
                      {getUserPost?.length || 0}
                    </h4>
                    <p className="text-mutedForeground">Questions Asked</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-4xl font-bold">85</h4>
                    <p className="text-mutedForeground">Questions Answered</p>
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-4xl font-bold">250</h4>
                    <p className="text-mutedForeground">Questions Liked</p>
                  </div>
                </div>
              </div>

              <div
                className="rounded-lg bg-card text-cardForeground border-0 shadow-lg"
                data-v0-t="card"
              >
                <div className="flex flex-col space-y-1.5 p-6">
                  <h3 className="whitespace-nowrap text-2xl font-semibold leading-none tracking-tight">
                    Milestones
                  </h3>
                </div>
                <div className="p-6 grid grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <div className="flex items-center justify-center">
                      <div className="w-32 h-32">

                      </div>
                    </div>
                    <p className="text-mutedForeground">Badges Earned</p>
                  </div>
                  <div className="space-y-2">
                    <div className="flex items-center justify-center">
                      <div className="w-32 h-32">

                      </div>
                    </div>
                    <p className="text-mutedForeground">Levels Reached</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default User_Profile;
