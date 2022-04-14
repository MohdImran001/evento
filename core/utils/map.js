// Google Map API Key
const GOOGLE_MAP_API_KEY = process.env.GOOGLE_MAP_API_KEY;

export const getGoogleMapsPlacesUrl = () => {
  return `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAP_API_KEY}&libraries=places`;
};
