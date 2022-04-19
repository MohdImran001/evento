import axios from "axios";
import { useRouter } from "next/router";
import { useQueryClient, useMutation } from "react-query";

export default function useNewEvent() {
  const queryClient = useQueryClient();
  const router = useRouter();

  return useMutation(() => axios.post(`/api/app/events/new`), {
    onSuccess: (data) => {
      const { _id } = data.data;
      queryClient.invalidateQueries(["events", "user"]);
      router.push(`/app/events/${_id}/edit`);
    },
  });
}
