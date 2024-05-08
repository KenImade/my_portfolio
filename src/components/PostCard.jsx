import { Link } from "react-router-dom"
import formatDate from "../hooks/dateFormat"

const PostCard = ({post}) => {
  return (
    post["is_published"] && <article>
        <div className="text-lg font-bold">
            <Link to={`/posts/${post.slug}`}>{post.title}</Link>
            <dl>
                <dt className="sr-only">Published on</dt>
                <dd className="text-base italic opacity-80 m-0 p-0">
                    {formatDate(post.date)}
                </dd>
            </dl>
        </div>
    </article>
  )
}
export default PostCard