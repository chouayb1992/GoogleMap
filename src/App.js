import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { useMemo } from "react";
import "./App.css";
import { FaRegCopyright } from "react-icons/fa";
import Header from "./Components/Header";

const App = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_API_KEY,
  });
  const center = useMemo(() => ({ lat: 18.52043, lng: 73.856743 }), []);

  return (
    <div className="App">
      <Header/>
      {!isLoaded ? (
        <h1>Loading...</h1>
      ) : (
        <GoogleMap
          mapContainerClassName="map-container"
          center={center}
          zoom={10}
        >
          <Marker 
          position={{ lat: 36.455066, lng: 10.715423 }}
           />
        </GoogleMap>
      )}
      <div>
        <p className='footer-text'><FaRegCopyright /> 2024 All rights reserved.</p>
      </div>

    </div>
  );
};

export default App;