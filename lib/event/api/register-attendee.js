import axios from "axios";

const registerAttendee = async (attendeeDetails, eventId) => {
  const data = { ...attendeeDetails, eventId };
  let result = null;

  try {
    const response = await axios.post("/api/event/register", data);
    result = response.data;
  } catch (err) {
    console.log(err);
  }

  return result;
};

export default registerAttendee;
