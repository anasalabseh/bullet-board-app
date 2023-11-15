import { useSelector, useDispatch, shallowEqual } from "react-redux";
import { selectAllPosts, getPostsError, getPostsStatus, fetchPosts } from "./postsSlice";
import PostsExcerpt from "./PostsExcerpt";
import { useEffect } from "react";

const PostsList = () => {
    const dispatch = useDispatch()

    const posts = useSelector(selectAllPosts)
    const postsStatus = useSelector(getPostsStatus)
    const error = useSelector(getPostsError)

    useEffect(() => {
        if (postsStatus === 'idle') {
            dispatch(fetchPosts())
            console.log('executed once')
        }
    },[dispatch, postsStatus, posts.length])
     
    let content;
    if (postsStatus === 'loading' ){
        content = <p>loading</p>;
    }
    else if (postsStatus === 'succeeded'){
        const orderedPosts = posts.slice().sort((a,b) => b.date.localeCompare(a.date))
        content = orderedPosts.map(post => <PostsExcerpt key={post.id} post={post} />)
    }
    else if (postsStatus === 'failed'){
        content = <p>{error}</p>
    }

    return (
        <section>
            <h2>posts</h2>
            {content}
        </section>
    )
}

export default PostsList;