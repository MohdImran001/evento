import * as Yup from "yup";
import { Formik, Form } from "formik";

import {
  MenuAlt2Icon,
  CheckCircleIcon,
  XCircleIcon,
} from "@heroicons/react/outline";

import {
  PencilIcon,
  PhotographIcon,
  CalendarIcon,
  MapIcon,
} from "@heroicons/react/solid";

import { Button, Icon } from "@chakra-ui/react";

import AppLayout from "layouts/AppLayout";
import BoxLayout from "layouts/BoxLayout";
import TabNavigation from "layouts/TabNavigation";

import Editor from "components/EventSettings/Edit/Editor";
import FileUpload from "components/EventSettings/Edit/FileUpload";
import Title from "components/EventSettings/Edit/Title";
import MapWithPlacesAutoComplete from "components/EventSettings/Edit/Map";
import DateAndTime from "components/EventSettings/Edit/DateAndTime";

import useEditEvent from "lib/hooks/mutations/useEditEvent";

export default function EventEditTemplate({ event }) {
  const updateEvent = useEditEvent(event._id);
  return (
    <AppLayout>
      <TabNavigation event_id={event._id}>
        <Formik
          initialValues={{
            coverImageUrl: event ? event.coverImageUrl : "",
            title: event ? event.title : "",
            about: event ? event.about : "",
            location: {
              place_id: event ? event.location.place_id : "",
              address: event ? event.location.address : "",
              name: event ? event.location.name : "",
              additional_info: event ? event.location.additional_info : "",
            },
            eventDate: event ? event.eventDate : new Date(),
            eventStartTime: event ? event.eventStartTime : new Date(),
          }}
          validationSchema={Yup.object({
            title: Yup.string()
              .min(5, "Must be atleast 5 characters or more")
              .required("Required"),
            about: Yup.string(),
            location: Yup.object().shape({
              place_id: Yup.string(),
              address: Yup.string(),
              name: Yup.string(),
              additional_info: Yup.string(),
            }),
            coverImageUrl: Yup.string().url(),
            eventDate: Yup.date(),
            eventTime: Yup.date(),
          })}
          onSubmit={async (values) => {
            await (await updateEvent).mutateAsync({ ...values });
          }}
        >
          {({ isSubmitting }) => (
            <Form>
              <BoxLayout
                title="Event Title"
                summary="Name your event"
                icon={PencilIcon}
              >
                <Title title={event.title} />
              </BoxLayout>
              <BoxLayout
                title="Main Event Image"
                summary="Use a high quality image: 2160x1080px (2:1 ratio)."
                icon={PhotographIcon}
              >
                <FileUpload url={event.coverImageUrl} />
              </BoxLayout>
              <BoxLayout
                title="Date and Time"
                summary="Tell event-goers when your event starts and ends so they can make plans to attend."
                icon={CalendarIcon}
              >
                <DateAndTime
                  date={event.eventDate}
                  time={event.eventStartTime}
                />
              </BoxLayout>
              <BoxLayout
                title="Location"
                summary="Help people in the area discover your event and let attendees know where to show up."
                icon={MapIcon}
              >
                <MapWithPlacesAutoComplete location={event.location} />
              </BoxLayout>
              <BoxLayout
                title="Description"
                summary="Add more details to your event like your schedule, sponsors, or featured guests."
                icon={MenuAlt2Icon}
              >
                <Editor content={event.about} />
              </BoxLayout>
              <Button
                leftIcon={
                  <Icon as={CheckCircleIcon} color="#FFFFFF" w={6} h={6} />
                }
                variant="solid"
                mt="2rem"
                ml="3.7rem"
                type="submit"
                borderRadius="5px"
                size="lg"
                bg="brandBlue"
                color="white"
                _hover={{ bg: "brandBlue" }}
                isLoading={isSubmitting}
              >
                Save Changes
              </Button>
              <Button
                leftIcon={<Icon as={XCircleIcon} color="#FFF" w={6} h={6} />}
                variant="solid"
                mt="2rem"
                ml="2rem"
                type="button"
                borderRadius="5px"
                size="lg"
                colorScheme="red"
              >
                Discard
              </Button>
            </Form>
          )}
        </Formik>
      </TabNavigation>
    </AppLayout>
  );
}
