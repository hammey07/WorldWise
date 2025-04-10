import React from "react";
import styles from "./Map.module.css";
import { useNavigate, useSearchParams } from "react-router-dom";

export default function Map() {
  const navigate = useNavigate();
  const [searchPramas, setSearchParams] = useSearchParams();
  const lat = searchPramas.get("lat");
  const lng = searchPramas.get("lng");
  return (
    <div
      className={styles.mapContainer}
      onClick={() => {
        navigate("form");
      }}
    >
      <h1>Map</h1>
      <h1>
        {lat} , {lng}
      </h1>
      <button onClick={() => setSearchParams({ lat: 24, lng: 44 })}>
        change position
      </button>
    </div>
  );
}
