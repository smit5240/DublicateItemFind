import React, { useEffect } from "react";
import jsonData from "./Test.json";

export default function Home() {
  // --------------------------------------------     Method :- 1
  // let temp = [];
  // let original = [];
  // let samedata = [];
  // useEffect(() => {
  //   jsonData.ColorName.map((element) => {
  //     let data = [];
  //     if (!temp.includes(element.color)) {
  //       temp.push(element.color);
  //       data.push(element.color);
  //       data.push(element.value);
  //       original.push(data);
  //     } else {
  //       samedata.push(element.color);
  //     }
  //   });
  //   console.log("Original  --->", original);
  //   console.log("samefdata --->", samedata);8
  // });

  // ---------------------------------------------    Method :- 2

  useEffect(() => {
    const dublicate = jsonData.ColorName.filter((item, index) => {
      return (
        index !==
        jsonData.ColorName.findIndex((element) => {
          return element.color === item.color;
        })
      );
    });
    const original = jsonData.ColorName.filter((item, index) => {
      return (
        index ===
        jsonData.ColorName.findIndex((element) => {
          return element.color === item.color;
        })
      );
    });
    console.log("Original --->", original);
    console.log("Dublicate --->", dublicate);
  }, []);

  return (
    <div>
      <h1>Hello world </h1>
    </div>
  );
}
