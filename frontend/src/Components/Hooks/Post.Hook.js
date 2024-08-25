import useFetchData from "./FetchData.Hook";
import { GetPost, GetPosts, GetUserPosts, PopularQustions } from "../../store/slice/post.Sclice";
import { UserProfile } from "../../store/slice/auth.Sclice";

const usePostData = (postId) => {
    // Pass a function that dispatches GetPost with postId
    const postState = useFetchData(() => GetPost(postId), [postId]); // Corrected to pass dependencies correctl
    const post = postState?.post?.post?.data; // Get the post data from the state
    return { post }; // Return the fetched post
};



const usePopularQustions = () => {
    const popularQustionsState = useFetchData(PopularQustions, []); // Corrected to pass dependencies correctly
    const popularQustions = popularQustionsState?.post?.popularQustions
    // Get the popularQustions data from the state
    return { popularQustions }; // Return the fetched popularQustions
}

const usePostDatas = () => {
    const postState = useFetchData(GetPosts, []); // Corrected to pass dependencies correctly
    const postFromDb = postState?.post?.posts // Get the post data from the state

    return { postFromDb }; // Return the fetched post
}

const useGetUserData = () => {
    const userData = useFetchData(() => UserProfile(), [])

    const user = userData?.auth?.userData
    return { user }
}
const useGetUserPosts = () => {
    const userPosts = useFetchData(() => GetUserPosts(), [])
    const getUserPost = userPosts?.post?.userPosts?.postData

    
    return { getUserPost }

}
export { usePostData, usePopularQustions, usePostDatas, useGetUserData, useGetUserPosts }; // Export the hooks