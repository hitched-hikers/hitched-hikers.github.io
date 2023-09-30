import HikeBlogTemplate from "../../../Components/HikeBlogTemplate";
import Blog from "./Blog.md";
import { useState } from "react";
import { Hike, amalfiHikes } from "../../Hikes/Models/hikes";
import { HikeName } from "../../../Enums/hikeName";

function PathOfTheGods(): JSX.Element {
  const [blog, setBlog] = useState("");

  const hike = amalfiHikes.find(
    (hike) => hike.name === HikeName.PathOfTheGods
  ) as Hike;

  fetch(Blog)
    .then((response) => response.text())
    .then((text) => {
      setBlog(text);
    });

  return (
    <HikeBlogTemplate
      hike={hike}
      coverPhotoId={"1U_Bcp2Sc-ukIhrAhHMz0PD3_tOTbjk6W"}
      summary={
        "A downhill hike with a spectacular view! Path of the Gods is enjoyable for both beginner and advanced hikers. The hike spans a distance of 5.8 miles with minimal elevation gain, starting in the small town of Bomerano and ending in Positano. Along the way you traverse mountain ridges and are met with stunning views of the Mediterranean Sea."
      }
      allTrailsIframeSource="https://www.alltrails.com/widget/trail/italy/campania/sentiero-degli-dei-bomerano-positano?u=i&sh=x01s6z"
      galleryImageIds={[
        "1UqdwmPZlX44AAJ9yos5IJsSzR6iiAv-O",
        "1WTXzPiHovX-rMLL81MB5-5la0CWLirei",
        "1LrNa-25Dx5E0IXn-geEcLl1CJWCtUDcu",
        "1wmxIUhkV2O2ivO-QI_F_G00tpJXY8B5C",
        "1a89cHHOJfq8PHnrbj1QfIjO9WFmoAEvH",
      ]}
      blog={blog}
    />
  );
}

export default PathOfTheGods;
