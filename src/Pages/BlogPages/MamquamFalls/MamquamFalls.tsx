import HikeBlogTemplate from "../../../Components/HikeBlogTemplate";
import Blog from "./Blog.md";
import { useState } from "react";
import { Hike, squamishHikes } from "../../Hikes/Models/hikes";
import { HikeName } from "../../../Enums/hikeName";

function MamquamFalls(): JSX.Element {
  const [blog, setBlog] = useState("");

  const hike = squamishHikes.find(
    (hike) => hike.name === HikeName.MamquamFalls
  ) as Hike;

  fetch(Blog)
    .then((response) => response.text())
    .then((text) => {
      setBlog(text);
    });

  return (
    <HikeBlogTemplate
      hike={hike}
      coverPhotoId={"1JAL_XrAY9vEoBuOXEUoQWdiWTntudf5X"}
      summary={
        "A zesty hike, filled with good and bad smells alike. On your way up, you are surrounded by lemon trees and lemon farms with views overlooking the Mediterranean. We did an adapted version of the all trails hike (below): starting in Minori, hiking up to Convento San Nicola (a church), and back down into Maori. The best part of this hike was grabbing a lemon, ripping it in two, and putting it in our water bottles."
      }
      allTrailsIframeSource="https://www.alltrails.com/widget/trail/canada/british-columbia/mamquam-falls?u=i&sh=x01s6z"
      galleryImageIds={[
        "15g_YA3OHrfziZf7st4KzciOkS90pAuOq", 
        "15w1EJyBctnNFzcGzAOomjlCS5FnySxIu", 
        "19j4y3zbdyf7MhvFTpcvfGQeyhyfMifPs", 
        "1HUvB3i24delazki9hvQdDxtapI5veMGG", 
        "1HknahYdJIeum7rMkfC_H3w9kqcvQ4SxC", 
        "1Vc97el4VIgFu6D3BHR0BrEP8ig0oagdJ", 
        "1e0GjNEX5d_d3OkOkAxOFGwATTE0oK5GY", 
        "1ki2em8ObsRq60MLMlY4Pc0tZ1U4RBtgA", 
        "1qC5Q8ZNEIpVucM4kFSq_kQYMmFIFk7MY", 
        "1xMEk0mxFtF7C7tqh1AIdMecIAY5SXewT"
      ]}
      blog={blog}
    />
  );
}

export default MamquamFalls;
