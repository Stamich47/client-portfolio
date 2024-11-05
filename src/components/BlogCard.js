import { FaHeart } from "react-icons/fa";

export default function BlogCard({ post }) {
  return (
    <div className="blog-card my-3">
      <div className="blog-card-body">
        <h2 className="card-title border-bottom pb-3">{post.title}</h2>
        <p className="card-text">{post.body}</p>
        <div className="card-info d-flex justify-content-between">
          <p className="card-date">{post.date}</p>
          <div className="card-likes d-flex gap-1 align-items-center justify-content-center">
            <i className="fas fa-heart">
              <FaHeart />
            </i>
            <p className="body-style likes">{post.reactions.likes}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
