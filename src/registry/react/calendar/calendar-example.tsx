"use client";

import { Calendar } from "@mijn-ui/react";
import * as React from "react";

const CalendarExample = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <Calendar
      className="rounded-lg border"
      mode="single"
      onSelect={setDate}
      selected={date}
    />
  );
};

export default CalendarExample;
