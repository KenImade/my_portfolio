import { Link } from "react-router-dom"

const ErrorPage = () => {
  return (
    <>
        <div className="mb-8 text-lg">
            Sigh...unfortunately this page doesn't exist yet.
        </div>
        <div className="mt-8">   
            <Link to='/'> ← Head over to the home page</Link>
        </div>
        
    </>
  )
}
export default ErrorPage