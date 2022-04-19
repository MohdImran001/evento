import axios from "axios";
import { useQueryClient, useMutation } from "react-query";

export default async function useNewEvent() {
  const queryClient = useQueryClient();

  return useMutation(() => axios.post(`/api/app/events/new`), {
    onSuccess: () => {
      queryClient.invalidateQueries(["events", "user"]);
    },
  });
}
