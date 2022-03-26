import axios from "axios";
import { useQuery } from "react-query";

const fetchUserEvents = () => {
  return axios.get(`/api/app/events`);
};

export default function useFetchEvents() {
  const { isLoading, isError, isSuccess, data, error } = useQuery(
    "userEvents",
    fetchUserEvents
  );
  return {
    isLoading,
    isError,
    events: isSuccess ? data.data.events : null,
    error,
  };
}
