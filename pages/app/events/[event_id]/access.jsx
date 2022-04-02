import EventAccessTemplate from "templates/Event/Access.jsx";

export default function Access() {
  return <EventAccessTemplate />;
}

export async function getServerSideProps(context) {
  return {
    props: {},
  };
}
