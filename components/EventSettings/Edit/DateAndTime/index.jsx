import { useState, forwardRef } from "react";
import { Box, Button, Icon, Flex, Heading } from "@chakra-ui/react";
import { CalendarIcon, ClockIcon } from "@heroicons/react/solid";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import { getLocalizedDate, getLocalizedTime } from "core/utils/event";

export default function DateAndTime({ date, time }) {
  const [startDate, setStartDate] = useState(new Date(date));
  const [startTime, setStartTime] = useState(new Date(time));

  // eslint-disable-next-line react/display-name
  const CustomDateButton = forwardRef(({ value, onClick }, ref) => (
    <Button
      leftIcon={<Icon as={CalendarIcon} />}
      className="example-custom-input"
      onClick={onClick}
      ref={ref}
    >
      {value}
    </Button>
  ));

  // eslint-disable-next-line react/display-name
  const CustomTimeButton = forwardRef(({ value, onClick }, ref) => (
    <Button
      leftIcon={<Icon as={ClockIcon} />}
      className="example-custom-input"
      onClick={onClick}
      ref={ref}
    >
      {value}
    </Button>
  ));

  return (
    <Box>
      <Box
        borderWidth="2px"
        borderColor="brandBlue"
        color="brandBlue"
        p="20px"
        px="20px"
        bg="secondaryBlue"
        w="50%"
        borderRadius="5px"
        mb="1rem"
      >
        <Heading fontWeight="bold" as="h4" size="sm">
          {getLocalizedDate(startDate)} at {getLocalizedTime(startTime)}
        </Heading>
      </Box>
      <Flex experimental_spaceX={5}>
        <Box>
          <DatePicker
            dateFormat="dd/MM/yyyy"
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            customInput={<CustomDateButton />}
            minDate={new Date()}
          />
        </Box>
        <Box>
          <DatePicker
            dateFormat="hh:mm aa"
            selected={startTime}
            showTimeSelect
            showTimeSelectOnly
            onChange={(date) => setStartTime(date)}
            customInput={<CustomTimeButton />}
            minDate={new Date()}
          />
        </Box>
      </Flex>
    </Box>
  );
}
