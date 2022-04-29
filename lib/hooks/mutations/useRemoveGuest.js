import axios from "axios";
import { useQueryClient, useMutation } from "react-query";

export default function useRemoveGuest(event_id) {
  const queryClient = useQueryClient();

  return useMutation(
    (guestId) =>
      axios.delete(
        `/api/app/events/${event_id}/guests/remove?guestId=${guestId}`
      ),
    {
      onSuccess: (data) => {
        queryClient.invalidateQueries(["guests", event_id]);
      },
    }
  );
}
