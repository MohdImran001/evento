import axios from "axios";
import { useEffect } from "react";
import { useQuery } from "react-query";

const fetchUserEvents = () => {
  return axios.get(`/api/app/events`);
};

const EventList = () => {
  useEffect(() => {
    const fetchUserEvents = async () => {
      await axios.get(`/api/app/events`);
    };

    fetchUserEvents();
  });

  return <div>EventList</div>;
};

export default EventList;
