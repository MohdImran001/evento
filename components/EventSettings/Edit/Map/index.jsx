import React, { useState, useEffect } from "react";
import { useFormikContext } from "formik";
import {
  GoogleMap,
  useJsApiLoader,
  Autocomplete,
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
  const { setFieldValue } = useFormikContext();

  const [locationData, setLocationData] = useState({
    place_id: location?.place_id,
    address: location?.address,
    name: location?.name,
    additional_info: location.additional_info || "",
  });

  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY,
    libraries: libraries,
  });

  useEffect(() => {
    setFieldValue("location", locationData);
  }, [locationData, setFieldValue]);

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
          <Autocomplete>
            <Input
              size="lg"
              type="text"
              placeholder="Search your location"
              focusBorderColor="brandBlue"
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
          center={center}
          zoom={15}
          mapContainerStyle={containerStyle}
          options={{
            zoomControl: false,
            streetViewControl: false,
            mapTypeControl: false,
            fullscreenControl: false,
          }}
          onLoad={(map) => setMap(map)}
        ></GoogleMap>
      </Box>
    </Box>
  );
}

export default React.memo(MapWithPlacesAutoComplete);
