import axios from "axios";
import { useMutation, useQueryClient } from "react-query";

export default function useRegisterAttendee(event_id) {
  const queryClient = useQueryClient();

  return useMutation(
    (attendeeInfo) =>
      axios.post(`/api/app/events/${event_id}/register`, {
        formData: attendeeInfo,
      }),
    {
      onSuccess: (data) => {
        queryClient.invalidateQueries(["guests", event_id]);
      },
    }
  );
}
