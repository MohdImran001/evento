import { format } from "date-fns";

// Google Map API Key
const GOOGLE_MAP_API_KEY = process.env.GOOGLE_MAP_API_KEY;

export const copyUrl = (url) => {
  navigator.clipboard.writeText(url);
};

export const getMapUrl = ({ address, place_id }) => {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
    address
  )}&query_place_id=${place_id}`;
};

export const getEmbedMapUrl = (place_id) => {
  return `https://www.google.com/maps/embed/v1/place?key=${GOOGLE_MAP_API_KEY}&q=place_id:${place_id}`;
};

export const formatEventData = (event) => {
  const newDate = new Date(event.eventDate);

  return {
    ...event,
    localizedDate: format(newDate, "PPPP"), // e.g. Friday, April 29th, 1453
    localizedTime: format(newDate, "p"), // e.g. 12:00 AM,
    calendar: {
      day: format(newDate, "EEEE"), // e.g. Thursday
      date: format(newDate, "d"), // e.g. 30th
      month: format(newDate, "MMMM"), // e.g. March
    },
    hosts: event.hosts.map((host) => ({
      ...host,
      _id: host._id.toString(),
    })),
    createdAt: event.createdAt.toString(),
    updatedAt: event.updatedAt.toString(),
    eventDate: event.eventDate.toString(),
  };
};

export const getLocalizedDate = (date) => {
  if (!date) return "";
  const d = new Date(date);
  return format(d, "PPPP");
};

export const getLocalizedTime = (date) => {
  if (!date) return "";
  const d = new Date(date);
  return format(d, "p");
};

export const getDay = (date) => {
  const d = new Date(date);
  return format(d, "EEEE");
};

export const getDate = (date) => {
  const d = new Date(date);
  return format(d, "d");
};

export const getMonth = (date) => {
  const d = new Date(date);
  return format(d, "MMMM");
};
