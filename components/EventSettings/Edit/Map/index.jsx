import React, { useState, useEffect } from "react";
import { useFormikContext } from "formik";
import {
  GoogleMap,
  useJsApiLoader,
  Autocomplete,
  Marker,
} from "@react-google-maps/api";

import {
  Box,
  InputGroup,
  InputLeftElement,
  Input,
  Icon,
} from "@chakra-ui/react";
import { LocationMarkerIcon } from "@heroicons/react/solid";

const containerStyle = {
  width: "100%",
  height: "400px",
};
const center = { lat: 28.6139, lng: 77.209 };
const libraries = ["places"];

function MapWithPlacesAutoComplete({ location }) {
  const [map, setMap] = useState(/** @type google.maps.Map */ (null));
  const [autoComplete, setAutoComplete] = useState(null);
  const [position, setPosition] = useState(location.geometry || center);

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY,
    libraries: libraries,
  });

  const { setFieldValue } = useFormikContext();
  const [locationData, setLocationData] = useState({
    place_id: location?.place_id,
    address: location?.address,
    name: location?.name,
    additional_info: location.additional_info || "",
    geometry: location.geometry || center,
  });

  useEffect(() => {
    setFieldValue("location", locationData);
  }, [locationData, setFieldValue]);

  const getPlaceInfo = () => {
    const { geometry, place_id, formatted_address, name } =
      autoComplete.getPlace();

    const newLocation = {
      lat: geometry.location.lat(),
      lng: geometry.location.lng(),
    };

    map.panTo(newLocation);
    setPosition(newLocation);
    setLocationData({
      ...locationData,
      place_id: place_id,
      address: formatted_address,
      name: name,
      geometry: newLocation,
    });
  };

  if (!isLoaded) return <p>Loading...</p>;

  return (
    <Box>
      <Box my="1rem">
        <InputGroup>
          <InputLeftElement
            pointerEvents="none"
            // eslint-disable-next-line react/no-children-prop
            children={<Icon as={LocationMarkerIcon} w={5} h={5} />}
          />
          <Autocomplete
            onLoad={(autoComplete) => setAutoComplete(autoComplete)}
            onPlaceChanged={getPlaceInfo}
            fields={[
              "place_id",
              "formatted_address",
              "name",
              "geometry.location",
            ]}
          >
            <Input
              size="lg"
              type="text"
              placeholder="Search your location"
              focusBorderColor="brandBlue"
              w="100%"
              defaultValue={location?.address}
            />
          </Autocomplete>
        </InputGroup>
        <Input
          mt="1rem"
          size="lg"
          type="text"
          placeholder="any additional info, e.g. First Floor etc"
          defaultValue={location?.additional_info}
          onChange={(e) =>
            setLocationData({
              ...locationData,
              additional_info: e.target.value,
            })
          }
          focusBorderColor="brandBlue"
        />
      </Box>
      <Box>
        <GoogleMap
          center={location.geometry || center}
          zoom={15}
          mapContainerStyle={containerStyle}
          options={{
            zoomControl: false,
            streetViewControl: false,
            mapTypeControl: false,
            fullscreenControl: false,
          }}
          onLoad={(map) => setMap(map)}
        >
          <Marker position={position} />
        </GoogleMap>
      </Box>
    </Box>
  );
}

export default React.memo(MapWithPlacesAutoComplete);
