import React, { useState } from 'react';
import * as Select from '@radix-ui/react-select';
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons';
import './styles.css';
import classnames from 'classnames';
import State from '../states.json';

const options = [
    { value: '0', label: '-- Select Type --' },
    { value: '4', label: 'Agro' },
    { value: '16', label: 'Construction' },
    { value: '15', label: 'Consumer' },
    { value: '8', label: 'Cooperative Bank' },
    { value: '1', label: 'Credit' },
    { value: '3', label: 'Dairy' },
    { value: '24', label: 'Export' },
    { value: '19', label: 'Federation' },
    { value: '13', label: 'Fisheries' },
    { value: '18', label: 'Health/Hospital' },
    { value: '6', label: 'Housing' },
    { value: '17', label: 'Industrial/Textile' },
    { value: '21', label: 'Labour' },
    { value: '5', label: 'Marketing' },
    { value: '2', label: 'Multi Purpose' },
    { value: '10', label: 'National Federation' },
    { value: '23', label: 'Organic' },
    { value: '9', label: 'Others' },
    { value: '22', label: 'Seed' },
    { value: '7', label: 'Technical' },
    { value: '12', label: 'Tourism' },
    { value: '11', label: 'Transport' },
    { value: '14', label: 'Welfare' },
  ];

const Dis = () => {
  const [selectedStates, setSelectedStates] = useState('');

  const handleStateChange = (value) => {
    // setSelectedStates(value);
    console.log('Selected value:', value);
  };

  return (
    <div>
      <Select.Root>
        <Select.Trigger className="SelectTrigger" aria-label="State" onClick={handleStateChange}>
          <Select.Value placeholder="Class of the Society" />
          <Select.Icon className="SelectIcon">
            <ChevronDownIcon />
          </Select.Icon>
        </Select.Trigger>
        <Select.Portal>
          <Select.Content className="SelectContent">
            <Select.ScrollUpButton className="SelectScrollButton">
              <ChevronUpIcon />
            </Select.ScrollUpButton>
            <Select.Viewport className="SelectViewport">
              <Select.Group>
                <Select.Label className="SelectLabel">States</Select.Label>
                {options.map((option) => (
                  <SelectItem value={option.value} key={option.value}>
                    {option.label}
                  </SelectItem>
                ))}
              </Select.Group>
            </Select.Viewport>
            <Select.ScrollDownButton className="SelectScrollButton">
              <ChevronDownIcon />
            </Select.ScrollDownButton>
          </Select.Content>
        </Select.Portal>
      </Select.Root>
    </div>
  );
};

const SelectItem = React.forwardRef(({ children, className, ...props }, forwardedRef) => {
  const handleSelect = (event) => {
    const selectedValue = event.target.value;
    console.log('Selected value:', selectedValue);
  };

  return (
    <Select.Item className={classnames('SelectItem', className)} {...props} ref={forwardedRef} onSelect={handleSelect}>
      <Select.ItemText>{children}</Select.ItemText>
      <Select.ItemIndicator className="SelectItemIndicator">
        <CheckIcon />
      </Select.ItemIndicator>
    </Select.Item>
  );
});

export default Dis;





