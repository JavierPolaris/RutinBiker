import Post from "../postCommunity/postCommunity";
import Share from "../share/Share";
import "./feedCommunity.css";


export default function Feed() {
  return (
    <div className="feed">
      <div className="feedWrapper">
        <Share />
       
        <Post />
      </div>
    </div>
  );
}