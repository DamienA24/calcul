import {
  TimeField,
  Label,
  DateInput,
  DateSegment,
  TimeValue,
  FieldError,
} from "react-aria-components";
import { Time } from "@internationalized/date";

export default function Hour({
  value,
  onChange,
}: {
  value: TimeValue;
  onChange: (value: Time) => void;
}) {
  const handleChange = (value: TimeValue | null) => {
    console.log(value);
    if (!value) {
      return;
    }
    const timeValue = new Time(value.hour, value.minute);
    onChange(timeValue);
  };

  return (
    <div>
      <TimeField
        className="w-full"
        hourCycle={24}
        hideTimeZone={true}
        value={value}
        onChange={handleChange}
      >
        <DateInput className="flex justify-center rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50">
          {(segment) => (
            <DateSegment className="outline-none" segment={segment} />
          )}
        </DateInput>
      </TimeField>
    </div>
  );
}
