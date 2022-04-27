import axios from "axios";
import { useQuery } from "react-query";

/**
 * Fetch docs of people who registered for the event
 * @param {string} event_id
 * @returns {Array}
 */
export default function useGuests(event_id) {
  const { isLoading, isError, isSuccess, data, error } = useQuery(
    ["guests", event_id],
    () => axios.get(`/api/app/events/${event_id}/guests`)
  );

  return {
    isLoading,
    isError,
    guests: isSuccess ? data.data.guests : null,
    error,
  };
}
