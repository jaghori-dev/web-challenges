import { useEffect, useState } from "react";
import Controls from "../Controls/index";
import Map from "../Map/index";
import useSWR from "swr";

const fetcher = (url) => fetch(url).then((res) => res.json());
const URL = "https://api.wheretheiss.at/v1/satellites/25544";

export default function ISSTracker() {

  const { data: coords, isLoading, error, mutate } = useSWR(URL, fetcher);
  console.log(coords);

  // async function getISSCoords() {
  //   try {
  //     const response = await fetch(URL);
  //     if (response.ok) {
  //       const data = await response.json();
  //       setCoords({ longitude: data.longitude, latitude: data.latitude });
  //     }
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     getISSCoords();
  //   }, 5000);

  //   return () => {
  //     clearInterval(timer);
  //   };
  // }, []);
  if (isLoading) {
    return <h1>looding</h1>;
  }
  if (error) {
    return <h1>error</h1>;
  }
  return (
    <main>
      <Map longitude={coords.longitude} latitude={coords.latitude} />
      <Controls
        longitude={coords.longitude}
        latitude={coords.latitude}
        // onRefresh={mutate()}
      />
    </main>
  );
}
