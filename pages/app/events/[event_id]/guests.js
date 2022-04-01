import EventGuestsTemplate from "templates/event/Guest";

export default function GuestsSettings({ params }) {
  console.log(params);
  return <EventGuestsTemplate />;
}

export async function getServerSideProps(context) {
  return {
    props: {
      params: { ...context.params },
    },
  };
}
