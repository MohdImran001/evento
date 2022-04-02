import Error from "next/error";
import EventDetails from "templates/event/Details";

// DB Connection and Models
import Event from "core/db/models/Event";
import dbConnect from "core/db/connect";

// Core utility for formatting event data
import { formatEventData } from "core/utils/event";

export default function Evento({ eventData, error }) {
  if (error) {
    return <Error statusCode={error.code} title={error.message} />;
  }

  return <EventDetails eventData={eventData} />;
}

export async function getServerSideProps(context) {
  const { evento_id } = context.params;
  let response = { eventData: null, error: null };

  try {
    await dbConnect();
    response.eventData = await Event.findById(evento_id)
      .populate("hosts", "name email image")
      .lean();
  } catch (err) {
    // Set Internal error, in case of failure of request
    response.error = { code: 500, message: err.message };
  }

  // Set 404 error when Event is not found
  if (!response.eventData) {
    response.error = {
      code: 404,
      message: "Oops, the event you're looking for doesn't exist",
    };
  } else {
    response.eventData = formatEventData(response.eventData);
  }

  // Return event data after formatting
  return {
    props: response,
  };
}
