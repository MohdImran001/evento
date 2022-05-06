import axios from "axios";
import { useMutation } from "react-query";

export default function useEventAccess(event_id) {
  return useMutation(
    (data) =>
      axios.patch(`/api/app/events/${event_id}/access/patch`, { props: data }),
    {
      onSuccess: (accessProps) => {},
    }
  );
}
