import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";

import { locationData } from "./data.js";
import "./styles.scss";

// free topojson source
const geoUrl =
  "https://raw.githubusercontent.com/deldersveld/topojson/master/world-countries.json";

const LocationMap = () => {
  return (
    <div className="location-card">

      {/* LEFT SIDE MAP */}
      <div className="map-area">
        <ComposableMap projection="geoMercator" projectionConfig={{ scale: 140 }}>
          <h3>Revenue by Locations</h3>
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  style={{
                    default: { fill: "var(--hover-bg)", outline: "none" },
                    hover: { fill: "var(--border-color)", outline: "none" },
                    pressed: { fill: "var(--border-color)", outline: "none" },
                  }}
                />
              ))
            }
          </Geographies>

          {/* DOT MARKERS */}
          {locationData.map((loc, i) => (
            <Marker key={i} coordinates={loc.coordinates}>
              <circle r={6} fill="var(--primary)" stroke="var(--marker-stroke)" strokeWidth={2} />
            </Marker>
          ))}
        </ComposableMap>
      </div>

      {/* RIGHT SIDE LIST */}
      <div className="locations-list">
      

        {locationData.map((loc, i) => (
          <div key={i} className="location-row">
            <div className="left">
              <div className="flag">{loc.country.charAt(0)}</div>
              <p>{loc.country}</p>
            </div>
            <span className="amount">{loc.amount}</span>
          </div>
        ))}
      </div>

    </div>
  );
};

export default LocationMap;
