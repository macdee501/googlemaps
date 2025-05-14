"use client"
import {APIProvider, Map} from '@vis.gl/react-google-maps';
import {useState} from "react";

export default function Home() {

    const API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAP_API as string

    //custom marker that shows central orkney by default
    const markerLocation = {
        lat:-26.974673114466885,
        lng:26.66995356468627,
    }



  return (
    <>
      <APIProvider apiKey={API_KEY} >
          <div className="">

        <Map
            style={{width: '100vw', height: '60vh'}}
            defaultCenter={markerLocation}
            defaultZoom={14}
            gestureHandling={'greedy'}
            disableDefaultUI={true}
        />
          </div>
          <div className="">
              <p>bottom area</p>
          </div>
      </APIProvider>

    </>
  );
}
