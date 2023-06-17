import React, { useState } from 'react';
import { ComposableMap, Geographies, Geography, ZoomableGroup } from 'react-simple-maps';
import './Maps.css';
import Map_data from './Map_data'

const data = [
  { id: 'Himachal Pradesh', value: 1 },
  { id: 'Madhya Pradesh', value: 29 },
  { id: 'Assam', value: 6 },
  { id: 'Bihar', value: 19 },
  { id: 'Delhi', value: 135 },
  { id: 'Goa', value: 2 },
  { id: 'Kerala', value: 200 },
  { id: 'ARUNACHAL PRADESH', value: 1 },
  { id: 'Andhra Pradesh', value: 21 },
  { id: 'CHANDIGARH', value: 1 },
  { id: 'CHHATTISGARH', value: 8 },
  { id: 'DADRA AND NAGAR HAVELI', value: 1 },
  { id: 'Gujarat', value: 41 },
  { id: 'HARYANA', value: 17 },
  { id: 'JAMMU AND KASHMIR', value: 2 },
  { id: 'JHARKHAND', value: 8 },
  { id: 'KARNATAKA', value: 28 },
  { id: 'MAHARASHTRA', value: 586 },
  { id: 'MANIPUR', value: 4 },
  { id: 'NAGALAND', value: 1 },
  { id: 'OrIsSA', value: 19 },
  { id: 'PONDICHERRY', value: 5 },
  { id: 'Punjab', value: 24 },
  { id: 'RAJASTHAN', value: 72 },
  { id: 'SIKKIM', value: 1 },
  { id: 'TAMIL NADU', value: 94 },
  { id: 'TELANGANA', value: 9 },
  { id: 'UTTAR PRADESH', value: 157 },
  { id: 'UTTARAKHAND', value: 5 },
  { id: 'WEST BENGAL', value: 47 },
  { id: 'mizoram', value: 47 },
  { id: 'tripura', value: 47 },
  { id: 'meghalaya', value: 47 },
  { id: 'uttaranchal', value: 47 },
  { id: 'Andaman and Nicobar', value: 47 },
];

const IndiaMap = () => {
  const [datas, setData] = useState(0);
  const [state, setState] = useState("");
  return (
    <div className="map-container">
      <ComposableMap
        // data-tip=""
        projectionConfig={{ scale: 650 }}
        width={700}
        height={700}
        style={{ margin: '0 auto' }}
        className='Composable-Map'
      >
        <ZoomableGroup center={[85, 21]} zoom={2} disablePanning>
          <Geographies geography={INDIA_TOPO_JSON}>
            {({ geographies }) =>
              geographies.map((geo) => {
                const { NAME_1 } = geo.properties;
                const stateData = data.find((d) => d.id.toLowerCase() === NAME_1.toLowerCase());

                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill={stateData ? getColor(stateData.value) : 'black'}
                    onMouseEnter={() => {
                      console.log('State:', NAME_1);
                      console.log('Value:', stateData.value);
                      setData(stateData.value);
                      setState(NAME_1);
                    }}
                    onMouseLeave={() => {
                      console.log('Mouse left:', NAME_1);
                    }}
                    style={{
                      hover: {
                        fill: 'aqua',
                      },
                    }}
                  />
                );
              })
            }
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>
      {console.log(datas)}
      <Map_data data={{ name: state, val: datas }} />
    </div>
  );
};

// Function to determine color based on value
const getColor = (value) => {
  if (value < 10) {
    return 'green';
  } else if (value < 50) {
    return 'yellow';
  } else {
    return 'orange';
  }
};

// India TopoJSON data
const INDIA_TOPO_JSON = require('../indiaState.json');

export default IndiaMap;
