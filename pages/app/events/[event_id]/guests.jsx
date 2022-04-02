import EventGuestsTemplate from "templates/Event/guest.jsx";

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
