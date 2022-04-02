import EventGuestsTemplate from "templates/Event/Guests";

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
