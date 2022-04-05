import AppLayout from "layouts/AppLayout";
import TabNavigation from "layouts/TabNavigation";

import { PhotographIcon } from "@heroicons/react/solid";

import FileUpload from "components/FileUpload";
import BoxLayout from "layouts/BoxLayout";

export default function EventEditTemplate({ event_id }) {
  return (
    <AppLayout>
      <TabNavigation event_id={event_id}>
        <BoxLayout
          title="Main Event Image"
          summary="Use a high quality image: 2160x1080px (2:1 ratio)."
          icon={PhotographIcon}
        >
          <FileUpload />
        </BoxLayout>
      </TabNavigation>
    </AppLayout>
  );
}
