import * as Yup from "yup";
import { Formik, Form } from "formik";

import {
  PhotographIcon,
  DocumentTextIcon,
  PencilAltIcon,
  CheckCircleIcon,
  LocationMarkerIcon,
  CalendarIcon,
  XCircleIcon,
} from "@heroicons/react/outline";
import { Button, Icon } from "@chakra-ui/react";

import AppLayout from "layouts/AppLayout";
import BoxLayout from "layouts/BoxLayout";
import TabNavigation from "layouts/TabNavigation";

import Editor from "components/Editor";
import FileUpload from "components/FileUpload";
import Title from "components/EventSettings/Title";
import MapWithPlacesAutoComplete from "components/Map";
import DateAndTime from "components/DateAndTime";

export default function EventEditTemplate({ event }) {
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
          onSubmit={(values) => {
            console.log(values);
          }}
        >
          <Form>
            <BoxLayout
              title="Title"
              summary="Name your event"
              icon={PencilAltIcon}
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
              <DateAndTime date={event.eventDate} time={event.eventStartTime} />
            </BoxLayout>
            <BoxLayout
              title="Location"
              summary="Help people in the area discover your event and let attendees know where to show up."
              icon={LocationMarkerIcon}
            >
              <MapWithPlacesAutoComplete location={event.location} />
            </BoxLayout>
            <BoxLayout
              title="Description"
              summary="Add more details to your event like your schedule, sponsors, or featured guests."
              icon={DocumentTextIcon}
            >
              <Editor content={event.about} />
            </BoxLayout>
            <Button
              leftIcon={
                <Icon as={CheckCircleIcon} color="#FFFFFF" w={6} h={6} />
              }
              bg="brandBlue"
              _hover={{ bg: "brandBlue" }}
              color="#FFF"
              variant="solid"
              mt="2rem"
              ml="3.7rem"
              type="submit"
              borderRadius="5px"
              size="lg"
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
        </Formik>
      </TabNavigation>
    </AppLayout>
  );
}
