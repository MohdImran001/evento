import { format } from "date-fns";

// Google Map API Key
const GOOGLE_MAP_API_KEY = process.env.NEXT_PUBLIC_GOOGLE_MAP_API_KEY;

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
  const date = new Date(event.eventDate);
  const time = new Date(event.eventStartTime);
  return {
    ...event,
    localizedDate: format(date, "PPPP"), // e.g. Friday, April 29th, 1453
    localizedTime: format(time, "p"), // e.g. 12:00 AM,
    calendar: {
      day: format(date, "EEEE"), // e.g. Thursday
      date: format(date, "d"), // e.g. 30th
      month: format(date, "MMMM"), // e.g. March
    },
    hosts: event.hosts.map((host) => ({
      ...host,
      _id: host._id.toString(),
    })),
    createdAt: event.createdAt.toString(),
    updatedAt: event.updatedAt.toString(),
    eventDate: event.eventDate.toString(),
    eventStartTime: event.eventStartTime.toString(),
    location: {
      ...event.location,
      _id: event.location._id.toString(),
    },
    access: {
      ...event.access,
      _id: event.access?._id.toString() || "",
    },
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
