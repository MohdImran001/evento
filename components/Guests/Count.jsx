import useGuestsCount from "lib/hooks/queries/useGuestsCount";

export default function GuestsCount({ event_id }) {
  const { isLoading, isError, count } = useGuestsCount(event_id);
  if (isError) return "nil";
  return isLoading ? "..." : count;
}
