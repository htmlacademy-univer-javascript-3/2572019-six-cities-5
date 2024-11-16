import {City} from '../../types/city.ts';
import {useEffect, useRef} from 'react';
import useMap from '../../hooks/use-map.ts';
import leaflet, {Icon, layerGroup} from 'leaflet';
import 'leaflet/dist/leaflet.css';
import {MapVariants} from '../../types/variants.ts';
import {URL_MARKER_CURRENT, URL_MARKER_DEFAULT} from '../../const.ts';
import {Point, Points} from '../../types/point.ts';

type MapProps = {
  city: City;
  points: Points;
  selectedPoint: Point | undefined;
  variant: MapVariants;
};

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [27, 39],
  iconAnchor: [20, 40]
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [27, 39],
  iconAnchor: [2, 4]
});

function Map({city, points, selectedPoint, variant}: MapProps): JSX.Element {
  const sectionClassName = variant === 'main' ? 'cities__map' : 'offer__map';
  const mapRef = useRef(null);
  const map = useMap({mapRef, center: city.location});
  const markers = leaflet.layerGroup();

  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);

      points.forEach((point) => {
        const marker = leaflet
          .marker({
            lat: point.location.latitude,
            lng: point.location.longitude,
          });

        marker
          .setIcon(
            selectedPoint !== undefined && point.id === selectedPoint.id
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(markerLayer);
      });

      markers.addTo(map);

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, points, markers, selectedPoint]);
  return <section className={sectionClassName} ref={mapRef}></section>;
}

export default Map;
