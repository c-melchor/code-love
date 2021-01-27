import React, { useEffect } from "react";
import axios from "axios";

export default function Home() {
  return (
    <div>
      <h1>Welcome!</h1>
      {/* useEffect=(()=>
      {axios
        .get("https://picsum.photos/200/300")
        .then(res => {
          console.log(res);
        })
        .catch(err => {
          console.log(err);
        })}
      ),[]) */}
    </div>
  );
}
