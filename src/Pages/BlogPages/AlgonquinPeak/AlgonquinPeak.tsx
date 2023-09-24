import HikeBlogTemplate from "../../../Components/HikeBlogTemplate";
import Blog from "./Blog.md";
import { useState } from "react";
import { adirondackHikes } from "../../Hikes/Models/hikes";
import { HikeName } from "../../../Enums/hikeName";

function AlgonquinPeak(): JSX.Element {
  const [blog, setBlog] = useState("");

  const hike = adirondackHikes.find(
    (hike) => hike.name === HikeName.AlgonquinPeak
  )!;

  fetch(Blog)
    .then((response) => response.text())
    .then((text) => {
      setBlog(text);
    });

  return (
    <HikeBlogTemplate
      coverPhotoId={"13iVrbQLE46PI4i2thgn1Uj9KkmmmjUPq"}
      title={hike?.name}
      date={new Date(2023, 8, 19)}
      summary={
        "Algonquin peak was a brutal overnight hike with the gruesome twosome. We got our assess kicked but it was still a beautiful one and well worth the grind."
      }
      allTrailsIframeSource="https://www.alltrails.com/widget/recording/evening-backpack-trip-at-wright-peak-alqonquin-peak-iroquois-peak-and-avalanche-lake-loop-8d8f733?scrollZoom=false&u=i&sh=x01s6z"
      galleryImageIds={[
        "1NOji8GDyE7RMqyfwhu-Nys3E9HWJ72Bi",
        "14hi3ICHlfO_WH_nTrcFb8dYB0rcB6uc_",
        "1taDbdZ4vL6UqGlIuLs6jGvKH7KXb7KGd",
        "1IGHtrr8E155juihXv2CnuzEUxMAKR23J",
        "13iVrbQLE46PI4i2thgn1Uj9KkmmmjUPq",
        "1AcjFQMg-dETWdHdHGeV5DUBp3zYami0c",
        "1ST7TQ_i3EaHpdASGsvAPSKO6wdh_OndW",
        "1ITAfDzga7ujGGUL5D4tGMV-by8aT2tQ4",
        "1eaJxC2abW2XT3GNjUugENRpaDjRhnpWo",
      ]}
      latitude={hike.latitude}
      longitude={hike.longitude}
      distance={16.32}
      elevationGain={3632}
      blog={blog}
    />
  );
}

export default AlgonquinPeak;
