import {City} from '../../types/city.ts';
import {useEffect, useRef} from 'react';
import useMap from '../../hooks/use-map.ts';
import {Locations} from '../../types/location.ts';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';

type MapProps = {
  city: City;
  points: Locations;
};

function Map({city, points} : MapProps) : JSX.Element {
  const mapRef = useRef(null);
  const map = useMap({mapRef, center:city.location});

  useEffect(() => {
    if (map) {
      points.forEach((point) => {
        leaflet
          .marker({
            lat: point.latitude,
            lng: point.longitude,
          }).addTo(map);
      });
    }
  }, [map, points]);
  return <section className="cities__map map" ref={mapRef}></section>;
}

export default Map;
