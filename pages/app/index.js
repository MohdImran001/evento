import Error from "next/error";
import { getSession } from "next-auth/react";

import App from "../../templates/App";

export default function Home({ user }) {
  if (!user) {
    return (
      <Error
        statusCode={401}
        title="You're Not Authorized, Please Login Again"
      />
    );
  }

  return <App user={user} />;
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  return {
    props: { ...session },
  };
}
