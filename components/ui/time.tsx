"use client";
import { useState } from "react";
import {
  TimeField,
  Label,
  DateInput,
  DateSegment,
  TimeValue,
} from "react-aria-components";
import { Time } from "@internationalized/date";

export default function Hour() {
  let [value, setValue] = useState(new Time(undefined, undefined));

  const handleChange = (value: TimeValue) => {
    console.log(value);
    const timeValue = new Time(value.hour, value.minute);

    setValue(timeValue);
  };

  return (
    <div>
      <TimeField
        className="w-full "
        hourCycle={24}
        onChange={handleChange}
        value={value}
        hideTimeZone={true}
      >
        <DateInput className="flex">
          {(segment) => <DateSegment segment={segment} />}
        </DateInput>
      </TimeField>
    </div>
  );
}
