import "./PageNotFound404.css";
import { Link } from 'react-router-dom'

export const PageNotFound404 = () => {
  return (
    <div className="notfound-container">
      <h1 className="notfound-title">404</h1>
      <p className="notfound-text">Oops! The page you're looking for doesn't exist.</p>
      <Link to="/" className="notfound-btn">
        Go Back Home
      </Link>
    </div>
  )
}
