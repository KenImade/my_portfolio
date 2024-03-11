import { useContext } from 'react';
import { Link } from "react-router-dom"
import PageTitleContext from "../PageTitleContext"

const Layout = ({children}) => {
    const [title, setTitle] = useContext(PageTitleContext);
  return (
    <>
        <div className="max-w-3xl mx-auto px-4 sm:px-6 xl:max-w-5xl xl:px-0 pb-12">
            <div className="py-10 space-y-16">
                <header className="space-y-2 sm:space-y-4">
                    <h1
                        className="lg:pt-32 text-2xl leading-9 font-extrabold sm:text-3xl sm:leading-10 md:text-5xl md:leading-14 italic lowercase"                    
                    >
                        {title}
                    </h1>

                    <nav>
                        <ul className="flex gap-6 text-sm font-sans">
                            <li>
                                <Link to='/'>Home</Link>
                            </li>
                            <li>
                                <Link to='/projects'>Projects</Link>
                            </li>
                            <li>
                                <Link to='/posts'>Writing</Link>
                            </li>
                        </ul>
                    </nav>
                </header>

                <>
                    {children}
                </>
            </div>
        </div>
    </>
  )
}
export default Layout