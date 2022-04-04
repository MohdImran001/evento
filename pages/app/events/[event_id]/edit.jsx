import EventEditTemplate from "templates/Event/Edit";

export default function Edit({ event_id }) {
  return <EventEditTemplate event_id={event_id} />;
}

export async function getServerSideProps(context) {
  const { event_id } = context.params;
  return {
    props: {
      event_id: event_id,
    },
  };
}
