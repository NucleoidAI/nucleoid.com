import PropTypes from 'prop-types';
import GoogleMapReact from 'google-map-react';
import { useState, useCallback } from 'react';

import Box from '@mui/material/Box';

import { GOOGLE_MAP_API } from 'src/config-global';

import MapPopup from './map-popup';
import { mapStyle } from './styles';
import MapMarker from './map-marker';

// ----------------------------------------------------------------------

export default function Map({ offices, sx, ...other }) {
  const [tooltip, setTooltip] = useState(null);

  const [centerMap, setCenterMap] = useState({
    lat: offices[0].latlng[0],
    lng: offices[0].latlng[1],
  });

  const handleOpen = useCallback(
    (lat, lng, office) => {
      setCenterMap({
        ...centerMap,
        lat: lat - 32,
        lng,
      });
      setTooltip(office);
    },
    [centerMap]
  );

  return (
    <Box sx={{ height: 480, overflow: 'hidden', ...sx }} {...other}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: GOOGLE_MAP_API }}
        center={centerMap}
        zoom={2}
        options={{
          styles: mapStyle,
          disableDefaultUI: true,
        }}
      >
        {offices.map((office, index) => (
          <MapMarker
            key={index}
            lat={office.latlng[0]}
            lng={office.latlng[1]}
            onOpen={() => handleOpen(office.latlng[0], office.latlng[1], office)}
          />
        ))}

        {tooltip && (
          <MapPopup
            lat={tooltip.latlng[0]}
            lng={tooltip.latlng[1]}
            office={tooltip}
            onClose={() => setTooltip(null)}
          />
        )}
      </GoogleMapReact>
    </Box>
  );
}

Map.propTypes = {
  offices: PropTypes.array,
  sx: PropTypes.object,
};
