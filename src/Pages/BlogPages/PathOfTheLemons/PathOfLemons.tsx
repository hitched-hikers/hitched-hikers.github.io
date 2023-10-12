import HikeBlogTemplate from "../../../Components/HikeBlogTemplate";
import Blog from "./Blog.md";
import { useState } from "react";
import { Hike, amalfiHikes } from "../../Hikes/Models/hikes";
import { HikeName } from "../../../Enums/hikeName";

function PathTheLemons(): JSX.Element {
  const [blog, setBlog] = useState("");

  const hike = amalfiHikes.find(
    (hike) => hike.name === HikeName.PathOfLemons
  ) as Hike;

  fetch(Blog)
    .then((response) => response.text())
    .then((text) => {
      setBlog(text);
    });

  return (
    <HikeBlogTemplate
      hike={hike}
      coverPhotoId={"1nv-on_ohpJwp9x22ifT14_HP82dctjcl"}
      summary={
        "A zesty hike, filled with good and bad smells alike. On your way up, you are surrounded by lemon trees and lemon farms with views overlooking the Mediterranean. We did an adapted version of the all trails hike (below): starting in Minori, hiking up to Convento San Nicola (a church), and back down into Maori. The best part of this hike was grabbing a lemon, ripping it in two, and putting it in our water bottles."
      }
      allTrailsIframeSource="https://www.alltrails.com/widget/trail/italy/campania/sentiero-dei-limoni-maiori-minori-ravello?u=i&sh=x01s6z"
      galleryImageIds={[
        "1VPJGnv2h6-bs4JScM94FeJ3mGV0Fos5e",
        "1ON_zM9q1S8aizCuNBSyTQFg4zZh9OjeK",
        "1HCG6zv00706pfszgr-EJom9rgleXl95d",
        "12y_hWPpAuTqPMJRJYsIAAgSbRqDHm9Gs",
        "1VfK1Er9yS91jPfPNUQ5sxMf3dl_wESyG",
        "1CSsn-r-BHA3QHjn34FdZmrZR3zLv1sue",
        "1YHvit6OcSu4nE8JIInsUsue6rGVj_qIS",
      ]}
      blog={blog}
    />
  );
}

export default PathTheLemons;
