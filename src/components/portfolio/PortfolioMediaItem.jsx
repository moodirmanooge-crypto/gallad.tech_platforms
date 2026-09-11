import { useEffect, useState } from "react";
import { FaHeart, FaRegHeart, FaCommentDots } from "react-icons/fa";
import {
  subscribeLikeCount,
  hasLiked,
  toggleLike,
  subscribeComments,
  addComment,
} from "../../firebase/portfolioEngagement";
import CornerReveal from "../animations/CornerReveal";
import "./PortfolioMedia.css";

export default function PortfolioMediaItem({
  itemKey,
  image,
  caption,
  index = 0,
  variant = "gallery",
}) {
  const [likeCount, setLikeCount] = useState(0);
  const [liked, setLiked] = useState(false);
  const [showComments, setShowComments] = useState(false);
  const [comments, setComments] = useState([]);
  const [name, setName] = useState("");
  const [text, setText] = useState("");
  const [posting, setPosting] = useState(false);

  useEffect(() => {
    setLiked(hasLiked(itemKey));

    const unsubLikes = subscribeLikeCount(itemKey, setLikeCount);
    const unsubComments = subscribeComments(itemKey, setComments);

    return () => {
      unsubLikes();
      unsubComments();
    };
  }, [itemKey]);

  const handleLike = async () => {
    try {
      const nowLiked = await toggleLike(itemKey);
      setLiked(nowLiked);
    } catch (error) {
      console.error("Like error:", error);
    }
  };

  const handleSubmitComment = async (e) => {
    e.preventDefault();

    if (!name.trim() || !text.trim()) return;

    setPosting(true);

    try {
      await addComment(itemKey, name.trim(), text.trim());
      setText("");
    } catch (error) {
      console.error("Comment error:", error);
    } finally {
      setPosting(false);
    }
  };

  return (
    <CornerReveal index={index}>
      <div className={`pmi-card pmi-${variant}`}>
        <img className="pmi-image" src={image} alt={caption || ""} />

        {caption && <p className="pmi-caption">{caption}</p>}

        <div className="pmi-actions">
          <button
            className={`pmi-like-btn ${liked ? "liked" : ""}`}
            onClick={handleLike}
          >
            {liked ? <FaHeart /> : <FaRegHeart />}
            <span>{likeCount}</span>
          </button>

          <button
            className="pmi-comment-toggle"
            onClick={() => setShowComments((v) => !v)}
          >
            <FaCommentDots />
            <span>{comments.length}</span>
          </button>
        </div>

        {showComments && (
          <div className="pmi-comment-panel">
            <div className="pmi-comment-list">
              {comments.length === 0 && (
                <p className="pmi-no-comments">
                  Weli faallo ma jirto — kow noqo mid.
                </p>
              )}

              {comments.map((c) => (
                <div className="pmi-comment-item" key={c.id}>
                  <strong>{c.name}</strong>
                  <span>{c.text}</span>
                </div>
              ))}
            </div>

            <form className="pmi-comment-form" onSubmit={handleSubmitComment}>
              <input
                placeholder="Magacaaga"
                value={name}
                onChange={(e) => setName(e.target.value)}
                maxLength={40}
              />
              <input
                placeholder="Qor faallo..."
                value={text}
                onChange={(e) => setText(e.target.value)}
                maxLength={200}
              />
              <button type="submit" disabled={posting}>
                {posting ? "..." : "Dir"}
              </button>
            </form>
          </div>
        )}
      </div>
    </CornerReveal>
  );
}