import React, { useState, createContext, useContext, useEffect } from 'react';
import * as Select from '@radix-ui/react-select';
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons';
import './styles.css';
import classnames from 'classnames';
import State from '../states.json';

const UserContext = createContext();

const Scroller = () => {
  const [selectedState, setSelectedState] = useState('Select a state');

  const handleStateChange = (value) => {
    setSelectedState(value);
    console.log('Selected value:', value);
  };



  return (
    <UserContext.Provider value={selectedState}>
      <div>
        <Select.Root value={selectedState} onValueChange={handleStateChange}>
          <Select.Trigger className="SelectTrigger" aria-label="State">
            State:
          <Select.Value placeholder="Select a District" />
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
                  {Object.keys(State).map((state) => (
                    <SelectItem value={state} key={state}>
                      {state}
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
      <Dis selectedState={selectedState} />
    </UserContext.Provider>
  );
};

const SelectItem = React.forwardRef(({ children, className, ...props }, forwardedRef) => {
  return (
    <Select.Item className={classnames('SelectItem', className)} {...props} ref={forwardedRef}>
      <Select.ItemText>{children}</Select.ItemText>
      <Select.ItemIndicator className="SelectItemIndicator">
        <CheckIcon />
      </Select.ItemIndicator>
    </Select.Item>
  );
});

export const Dis = ({ selectedState }) => {
  const user = useContext(UserContext);
  const [mar, setMar] = useState(selectedState);

  const handleStateChange = (value) => {
    setMar(value);
    console.log('Selected value:', value);
  };

  return (
    <div>
        <Select.Root value={mar} onValueChange={handleStateChange}>
        <Select.Trigger className="SelectTrigger" aria-label="State">
          District:
          <Select.Value placeholder="Select a District" />
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
                {State[user]?.districts.map((district) => (
                  <SelectItem value={district} key={district}>
                    {district}
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

export default Scroller;
