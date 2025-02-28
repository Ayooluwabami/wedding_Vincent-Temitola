
import { useCallback, useRef, useState } from 'react';
import { GoogleMap, useJsApiLoader, Marker, InfoWindow } from '@react-google-maps/api';

interface MapProps {
  latitude: number;
  longitude: number;
  name: string;
  address: string;
}

const Map = ({ latitude, longitude, name, address }: MapProps) => {
  const [infoOpen, setInfoOpen] = useState(false);
  const [map, setMap] = useState<google.maps.Map | null>(null);
  const mapRef = useRef<HTMLDivElement>(null);

  const center = {
    lat: latitude,
    lng: longitude
  };

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: "YOUR_API_KEY" // This should be replaced with an actual API key
  });

  const onLoad = useCallback((map: google.maps.Map) => {
    setMap(map);
  }, []);

  const onUnmount = useCallback(() => {
    setMap(null);
  }, []);

  return isLoaded ? (
    <div className="h-[400px] w-full rounded-lg overflow-hidden shadow-md" ref={mapRef}>
      <GoogleMap
        mapContainerStyle={{
          width: '100%',
          height: '100%',
        }}
        center={center}
        zoom={15}
        onLoad={onLoad}
        onUnmount={onUnmount}
        options={{
          disableDefaultUI: false,
          zoomControl: true,
          mapTypeControl: false,
          streetViewControl: false,
          styles: [
            {
              featureType: 'all',
              elementType: 'all',
              stylers: [{ saturation: -100 }]
            }
          ]
        }}
      >
        <Marker
          position={center}
          onClick={() => setInfoOpen(!infoOpen)}
        >
          {infoOpen && (
            <InfoWindow
              position={center}
              onCloseClick={() => setInfoOpen(false)}
            >
              <div className="p-2">
                <h3 className="font-semibold text-wedding-charcoal">{name}</h3>
                <p className="text-sm text-wedding-charcoal/80">{address}</p>
              </div>
            </InfoWindow>
          )}
        </Marker>
      </GoogleMap>
    </div>
  ) : (
    <div className="h-[400px] w-full bg-gray-100 rounded-lg flex items-center justify-center">
      <p>Loading map...</p>
    </div>
  );
};

export default Map;
