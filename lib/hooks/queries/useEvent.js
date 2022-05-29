import axios from "axios";
import { useQuery } from "react-query";

const fetchEventById = (event_id, fields) => {
  let url = `/api/app/events/${event_id}`;
  if (fields.length > 0) url += `?fields=${fields.split(" ").join(",")}`;
  return axios.get(url);
};

/**
 *
 * @param {string} event_id - id of the event
 * @param {string} fields   - a string of space seperated values to be fetch from event api
 * @returns {object}        - event object with the required fields
 */
export default function useEvent(event_id, fields = "") {
  const { isLoading, isError, isSuccess, data, error } = useQuery(
    ["events", event_id],
    () => fetchEventById(event_id, fields)
  );
  return {
    isLoading,
    isError,
    event: isSuccess ? data.data : null,
    error,
  };
}
