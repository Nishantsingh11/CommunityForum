import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { GetCommentForPost } from "../../store/slice/comment.Sclice";
import { GetCommnetLike } from "../../store/slice/like.sclice";
import useFetchData from "./FetchData.Hook";

const useComment = (postId) => {
    const commentsState = useFetchData(() => GetCommentForPost(postId), [postId]);
    const comments = commentsState?.comment?.comments?.data;
    return { comments }

}

export default useComment;