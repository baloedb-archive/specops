import DeadlineField from "./DeadlineField";
import DepartmentField from "./DepartmentField";
import IntervalField from "./IntervalField";
import NameField from "./NameField";
import TimeframeField from "./TimeframeField";

const FieldCombination = () => {
  return (
    <div>
      <NameField />
      <br />
      <DepartmentField />
      <br />
      <TimeframeField />
      <br />
      <IntervalField />
      <br />
      <DeadlineField />
      <br />
    </div>
  );
};

export default FieldCombination;
