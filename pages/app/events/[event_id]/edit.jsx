import Error from "next/error";

import dbConnect from "core/db/connect";
import Event from "core/db/models/Event";
import { formatEventData } from "core/utils/event";

import EventEditTemplate from "templates/Event/Manage/Edit";

export default function Edit({ event }) {
  if (!event) {
    return (
      <Error
        statusCode={404}
        title={
          "You're not authorized to view edit this event or This event doesn't exists"
        }
      />
    );
  }
  return <EventEditTemplate event={event} />;
}

export async function getServerSideProps(context) {
  const { event_id } = context.params;

  await dbConnect();
  const event = await Event.findById(event_id).lean();

  return {
    props: {
      event: event ? formatEventData(event) : null,
    },
  };
}
