import React from "react";
import '../css/contact_style.css';
import useDocumentTitle from "../hooks/documentTitle";
import { Link } from "react-router-dom";


function Contact() {
    useDocumentTitle("Contact Me 📲")
    return (
        <>
             <h1 className="title">
                Contact
            </h1>

            <section className="contact">
                <p className="text">You can reach me through the following channels:</p>
                <div>
                    <Link className="button-50 link text" to="mailto:kenimade91@gmail.com">Email</Link>
                    <Link className="button-50 link text" to="https://www.linkedin.com/in/kenneth-imade/" target="_blank" rel="noopener noreferrer">LinkedIn</Link>
                    <Link className="button-50 link text" to="https://twitter.com/kenneth1made" target="_blank" rel="noopener noreferrer">Twitter</Link>
                </div>
            </section>
        </>
    )
}

export default Contact;