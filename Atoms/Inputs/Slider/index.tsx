import { FormControl, FormLabel, Slider as MuiSlider } from '@mui/material';
import { type Control, useController } from 'react-hook-form';

interface PropTypes {
  name: string;
  label: string;
  defaultValue?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  control: Control<any>;
  steps?: number;
  min?: number;
  max?: number;
}

const Slider = ({
  name,
  label,
  defaultValue,

  control,
  steps,
  min,
  max,
}: PropTypes) => {
  const { field } = useController({ name, control, defaultValue });

  return (
    <FormControl component="fieldset" sx={{ width: '98%' }}>
      <FormLabel component="legend">{label}</FormLabel>
      <MuiSlider {...field} name={name} step={steps || 1} marks min={min || 0} max={max || 10} />
    </FormControl>
  );
};
export default Slider;
