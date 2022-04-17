import axios from "axios";
import { useQueryClient, useMutation } from "react-query";

export default async function useEditEvent(id) {
  const queryClient = useQueryClient();

  return useMutation(
    (data) => axios.put(`/api/app/events/${id}/edit`, { newEventData: data }),
    {
      onSuccess: (updatedEvent) => {
        queryClient.invalidateQueries(["events", id]);
      },
    }
  );
}
