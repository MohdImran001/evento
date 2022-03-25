import axios from "axios";
import { useQuery } from "react-query";

const fetchUserEvents = (userId) => {
  return axios.get(`/api/events?userId=${userId}`);
};

const EventList = () => {
  return <div>EventList</div>;
};

export default EventList;
