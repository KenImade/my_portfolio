import React from 'react';
import { Link } from 'react-router-dom';
import useDocumentTitle from "../hooks/documentTitle";
import '../css/portfolio_style.css'; // Update this path according to your project structure

const PageNotFound = () => {
  useDocumentTitle("404 🙅‍♂️")
  return (
    <div>
      <h1 className="title">Page Not Found</h1>
      <p className="text">Sorry, the page you asked for does not exist...</p>
      <Link to="/" className="button-89">Return To Home Page</Link>
    </div>
  );
};

export default PageNotFound;
