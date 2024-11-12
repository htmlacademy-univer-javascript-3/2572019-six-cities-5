import {City} from '../../types/city.ts';
import {useEffect, useRef} from 'react';
import useMap from '../../hooks/use-map.ts';
import {Locations} from '../../types/location.ts';
import leaflet from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {MapVariants} from '../../types/variants.ts';

type MapProps = {
  city: City;
  points: Locations;
  variant: MapVariants;
};

function Map({city, points, variant}: MapProps): JSX.Element {
  const sectionClassName = variant === 'main' ? 'cities__map' : 'offer__map';
  const mapRef = useRef(null);
  const map = useMap({mapRef, center: city.location});

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
  return <section className={sectionClassName} ref={mapRef}></section>;
}

export default Map;
