import { Link } from "react-router-dom"
import formatDate from "../hooks/dateFormat"

const PostCard = ({post}) => {
  return (
    <article>
        <div className="text-lg font-medium">
            <Link to={`/posts/${post.slug}`}>{post.title}</Link>
            <dl>
                <dt className="sr-only">Published on</dt>
                <dd className="text-base italic text-sky-950 opacity-90 m-0 p-0">
                    {formatDate(post.date)}
                </dd>
            </dl>
        </div>
    </article>
  )
}
export default PostCard