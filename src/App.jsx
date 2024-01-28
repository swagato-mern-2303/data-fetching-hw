import { useEffect, useState } from "react";
import Post from "./components/Post";
import axios from "axios";

function App() {
  const [postsData, setPostsData] = useState([]);
  const [postToShow, setPostToShow] = useState(10);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.org/posts")
      .then((data) => setPostsData(data.data));
  }, []);

  console.log(postsData);

  return (
    <div>
      <div className="select-container">
        <h3>How many post to show ?</h3>
        <select
          value={postToShow}
          onChange={(e) => setPostToShow(e.target.value)}
        >
          {Array(10)
            .fill()
            .map((_, index) => (
              <option key={index} value={(index + 1) * 10}>
                {(index + 1) * 10}
              </option>
            ))}
        </select>
      </div>
      <div className="post-container">
        {postsData.map(
          (item, index) =>
            index < postToShow && <Post key={index} data={item} />
        )}
      </div>
    </div>
  );
}

export default App;
