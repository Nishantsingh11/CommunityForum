import {
    GetPostLike,
} from '../../store/slice/like.sclice';

import useFetchData from './FetchData.Hook';

const useLike = (postId) => {
    const postLikeState = useFetchData(() => GetPostLike(postId), [postId]);
    const postLike = postLikeState?.like?.like?.data;
    return { postLike };
}
export default useLike;