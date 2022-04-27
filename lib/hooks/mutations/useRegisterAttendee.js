import axios from "axios";
import { useMutation } from "react-query";

export default function useRegisterAttendee(event_id) {
  return useMutation(
    (attendeeInfo) =>
      axios.post(`/api/app/events/${event_id}/register`, {
        formData: attendeeInfo,
      }),
    {
      onSuccess: (data) => {
        console.log(data);
      },
    }
  );
}
