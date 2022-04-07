import AppLayout from "layouts/AppLayout";
import TabNavigation from "layouts/TabNavigation";

import {
  PhotographIcon,
  DocumentTextIcon,
  PencilAltIcon,
} from "@heroicons/react/outline";

import BoxLayout from "layouts/BoxLayout";
import FileUpload from "components/FileUpload";
import Editor from "components/Editor";
import Title from "components/EventSettings/Title";

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
        <BoxLayout title="Title" summary="Name your event" icon={PencilAltIcon}>
          <Title />
        </BoxLayout>
        <BoxLayout
          title="Description"
          summary="Add more details to your event like your schedule, sponsors, or featured guests."
          icon={DocumentTextIcon}
        >
          <Editor />
        </BoxLayout>
      </TabNavigation>
    </AppLayout>
  );
}
