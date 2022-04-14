export const BASE_URL = process.env.DOMAIN || "http://localhost:3000";
export const APP_BASE_URL = BASE_URL + "/app";
export const API_BASE_URL = BASE_URL + "/api/app";

export const EVENT_DATA_PLACHOLDER = {
  coverImageUrl: "",
  title: "",
  about: "",
  location: {
    place_id: "",
    address: "",
    name: "",
    additional_info: "",
  },
  eventDate: new Date(),
  startTime: new Date(),
};
