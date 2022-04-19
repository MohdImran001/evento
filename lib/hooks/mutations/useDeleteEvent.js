import axios from "axios";
import { useQueryClient, useMutation } from "react-query";

export default function useNewEvent() {
  const queryClient = useQueryClient();

  return useMutation((id) => axios.delete(`/api/app/events/${id}/delete`), {
    onSuccess: () => {
      queryClient.invalidateQueries(["events", "user"]);
    },
  });
}
