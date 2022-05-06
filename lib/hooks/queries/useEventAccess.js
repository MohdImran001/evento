import axios from "axios";
import { useQuery } from "react-query";

/**
 * Fetch event access property of the event
 * @param {string} event_id
 * @returns {Object}
 */
export default function useEventAccess(event_id) {
  const { isLoading, isError, isSuccess, data, error } = useQuery(
    ["event_access", event_id],
    () => axios.get(`/api/app/events/${event_id}/access`)
  );

  return {
    isLoading,
    isError,
    access: isSuccess ? data.data.access : null,
    error,
  };
}
