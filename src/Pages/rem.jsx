import React, { useState } from 'react';
import * as Tabs from '@radix-ui/react-tabs';
import * as Select from '@radix-ui/react-select';
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from '@radix-ui/react-icons';
import './styles.css';
import classnames from 'classnames';
import State from '../states.json';

const TabsDemo = () => {
  const [selectedState, setSelectedState] = useState('');

  const handleStateChange = (event) => {
    setSelectedState(event.target.value);
  };

  return (
    <div className="parent-div">
      <Tabs.Root className="TabsRoot" defaultValue="tab1">
        <Tabs.List className="TabsList" aria-label="Manage your account">
          <Tabs.Trigger className="TabsTrigger" value="tab1">
            Account
          </Tabs.Trigger>
        </Tabs.List>

        {/* State Name */}
        <div className="state-dis">
          <Tabs.Content className="TabsContent stateName" value="tab1">
            <Select.Root>
              <Select.Trigger className="SelectTrigger" aria-label="State">
                <Select.Value placeholder="Select a State" />
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
          </Tabs.Content>

          {/* District Name */}
          <Tabs.Content className="TabsContent districtName" value="tab1">
            <Select.Root>
              <Select.Trigger className="SelectTrigger" aria-label="District">
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
                    {selectedState && (
                      <Select.Group>
                        <Select.Label className="SelectLabel">Districts</Select.Label>
                        {State[selectedState].districts.map((district) => (
                          <SelectItem value={district} key={district}>
                            {district}
                          </SelectItem>
                        ))}
                      </Select.Group>
                    )}
                  </Select.Viewport>
                  <Select.ScrollDownButton className="SelectScrollButton">
                    <ChevronDownIcon />
                  </Select.ScrollDownButton>
                </Select.Content>
              </Select.Portal>
            </Select.Root>
          </Tabs.Content>
        </div>

        {/* Class / Type of Society */}
        <div className="state-dis">
          <Tabs.Content className="TabsContent stateName" value="tab1">
            <Select.Root>
              <Select.Trigger className="SelectTrigger" aria-label="Food">
                <Select.Value placeholder="Select a fruit…" />
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
                      <Select.Label className="SelectLabel">Fruits</Select.Label>
                      <SelectItem value="apple">Apple</SelectItem>
                      <SelectItem value="banana">Banana</SelectItem>
                      <SelectItem value="blueberry">Blueberry</SelectItem>
                      <SelectItem value="grapes">Grapes</SelectItem>
                      <SelectItem value="pineapple">Pineapple</SelectItem>
                    </Select.Group>

                    <Select.Separator className="SelectSeparator" />

                    <Select.Group>
                      <Select.Label className="SelectLabel">Vegetables</Select.Label>
                      <SelectItem value="aubergine">Aubergine</SelectItem>
                      <SelectItem value="broccoli">Broccoli</SelectItem>
                      <SelectItem value="carrot" disabled>
                        Carrot
                      </SelectItem>
                      <SelectItem value="courgette">Courgette</SelectItem>
                      <SelectItem value="leek">Leek</SelectItem>
                    </Select.Group>

                    <Select.Separator className="SelectSeparator" />

                    <Select.Group>
                      <Select.Label className="SelectLabel">Meat</Select.Label>
                      <SelectItem value="beef">Beef</SelectItem>
                      <SelectItem value="chicken">Chicken</SelectItem>
                      <SelectItem value="lamb">Lamb</SelectItem>
                      <SelectItem value="pork">Pork</SelectItem>
                    </Select.Group>
                  </Select.Viewport>
                  <Select.ScrollDownButton className="SelectScrollButton">
                    <ChevronDownIcon />
                  </Select.ScrollDownButton>
                </Select.Content>
              </Select.Portal>
            </Select.Root>
          </Tabs.Content>

          <Tabs.Content className="TabsContent stateName" value="tab1">
            <div style={{ display: 'flex', padding: '0 20px', flexWrap: 'wrap', alignItems: 'center' }}>
              <input className="Input" type="text" id="firstName" placeholder="Full Name" />
            </div>
          </Tabs.Content>
        </div>

        <div className="state-dis">
          <fieldset className="Fieldset">
            <input className="Input" id="pan" placeholder="Registered Address" />
          </fieldset>

          <fieldset className="Fieldset">
            <input className="Input" id="tan" placeholder="Registered Address" />
          </fieldset>
        </div>

        <Tabs.Content className="TabsContent" value="tab1">
          <fieldset className="Fieldset">
            <input className="Input" id="name" placeholder="Registered Address" />
          </fieldset>
          <fieldset className="Fieldset">
            <input className="Input" id="username" defaultValue="@peduarte" />
          </fieldset>
          <div style={{ display: 'flex', marginTop: 20, justifyContent: 'flex-end' }}>
            <button className="Button green">Save changes</button>
          </div>
        </Tabs.Content>
      </Tabs.Root>
    </div>
  );
};

const SelectItem = React.forwardRef(({ children, className, ...props }, forwardedRef) => {
  const [selectedState, setSelectedState] = useState('');
  const handleStateChange = (event) => {
    setSelectedState(event.target.value);
  };

  return (
    <Select.Item className={classnames('SelectItem', className)} {...props} ref={forwardedRef}>
      <Select.ItemText>{children}</Select.ItemText>
      <Select.ItemIndicator className="SelectItemIndicator">
        <CheckIcon />
      </Select.ItemIndicator>
    </Select.Item>
  );
});

export default TabsDemo;
