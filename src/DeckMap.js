import React, { useState } from 'react';
import DeckGL from '@deck.gl/react';
import { ScatterplotLayer } from '@deck.gl/layers';
import { Map } from 'react-map-gl';
import {MapView, FirstPersonView} from '@deck.gl/core';

import './mapbox.css';


const MAPBOX_ACCESS_TOKEN = 'pk.eyJ1IjoidGVycnlicm82NiIsImEiOiJjbG9manlsaWQwcHhqMnJvMnRmZHRqaHMzIn0.Bm8wilmkbrtPPee612yQrg';

const INITIAL_VIEW_STATE = {
    longitude: -0.12,
    latitude:51.5,
    zoom: 4,
    pitch: 0,
    bearing: 0
  };

  const sampleData = [
    { position: [-100.4, 40.7], size: 100 },
    { position: [-101.4, 41.7], size: 150 },
    { position: [-99.4, 39.7], size: 200 },
    // ... more data points
  ];

  const scatterplotLayer = new ScatterplotLayer({
    id: 'scatterplot-layer',
    data: sampleData,
    pickable: true,
    opacity: 0.8,
    stroked: true,
    filled: true,
    radiusScale: 60,
    radiusMinPixels: 1,
    radiusMaxPixels: 100,
    lineWidthMinPixels: 1,
    getPosition: d => d.position,
    getRadius: d => d.size,
    getFillColor: [255, 140, 0],
    getLineColor: [0, 0, 0],
  })
  

  function DeckMap() {
    
    return (
      <div className="deckgl-container">

      <DeckGL
        initialViewState={INITIAL_VIEW_STATE}
        controller={true}
        layers={[scatterplotLayer]}
      >
      <Map         mapStyle="mapbox://styles/mapbox/streets-v11"
 mapboxAccessToken={MAPBOX_ACCESS_TOKEN} />

        </DeckGL>
        </div>
    );
  }
    export default DeckMap;