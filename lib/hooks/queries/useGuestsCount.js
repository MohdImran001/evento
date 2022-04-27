import axios from "axios";
import { useQuery } from "react-query";

/**
 * Fetch total number of people who registered for the event
 * @param {string} event_id - id of the event
 * @returns {Number}        - total number of people, registered for the event
 */
export default function useGuestsCount(event_id) {
  const { isLoading, isError, isSuccess, data } = useQuery(
    ["guestsCount", event_id],
    () => axios.get(`api/app/events/${event_id}/guests?onlyCount=1`)
  );

  return {
    isLoading,
    isError,
    count: isSuccess ? data.data.count : null,
  };
}
