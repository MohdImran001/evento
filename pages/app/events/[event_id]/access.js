import EventAccessTemplate from "templates/event/Access";

export default function Access() {
  return <EventAccessTemplate />;
}

export async function getServerSideProps(context) {
  return {
    props: {},
  };
}
