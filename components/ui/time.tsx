import {
  TimeField,
  Label,
  DateInput,
  DateSegment,
  TimeValue,
} from "react-aria-components";
import { Time } from "@internationalized/date";

export default function Hour({
  value,
  onChange,
}: {
  value: TimeValue;
  onChange: Function;
}) {
  const handleChange = (value: TimeValue) => {
    const timeValue = value
      ? new Time(value.hour, value.minute)
      : new Time(0, 0);
    onChange(timeValue);
  };

  return (
    <div>
      <TimeField
        className="w-full"
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
