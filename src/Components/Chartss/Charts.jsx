import React from 'react';
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid } from 'recharts';
import './chart.css'
const colors = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red', 'pink'];

const data = [
  {
    name: '1919',
    uv: 4,
    pv: 2400,
    amt: 2400,
  },
  {
    name: '1943',
    uv: 3,
    pv: 1398,
    amt: 2210,
  },
  {
    name: '1944',
    uv: 2,
    pv: 9800,
    amt: 2290,
  },
  {
    name: '1955',
    uv: 2,
    pv: 3908,
    amt: 2000,
  },
  {
    name: '1974',
    uv: 1,
    pv: 4800,
    amt: 2181,
  },
  {
    name: '1975',
    uv: 2,
    pv: 3800,
    amt: 2500,
  },
{ name: '1977', uv: 3, pv: 4, amt: 2100, },
{ name: '1979', uv: 3, pv: 4, amt: 2100, },
{ name: '1980', uv: 3, pv: 4, amt: 2100, },
{ name: '1981', uv: 34, pv: 4, amt: 2100, },
{ name: '1982', uv: 30, pv: 4, amt: 2100, },
{ name: '1983', uv: 39, pv: 4, amt: 2100 },
{ name: '1986', uv: 90, pv: 4, amt: 2100 },
{ name: '1987', uv: 50, pv: 4300, amt: 2100 },
{ name: '1988', uv: 90, pv: 4300, amt: 2100 },
{ name: '1989', uv: 30, pv: 4300, amt: 2100 },
{ name: '1990', uv: 3, pv: 4300, amt: 2100 },
{ name: '1992', uv: 30, pv: 4300, amt: 2100 },
{ name: '1993', uv: 30, pv: 4300, amt: 2100 },
{ name: '1995', uv: 90, pv: 4300, amt: 2100 },
{ name: '1997', uv: 30, pv: 4300, amt: 2100 },
{ name: '2000', uv: 90, pv: 4300, amt: 2100 },
{ name: '2001', uv: 90, pv: 4300, amt: 2100 },
{ name: '2002', uv: 90, pv: 4300, amt: 2100 },
{ name: '2003', uv: 90, pv: 4300, amt: 2100 },
{ name: '2004', uv: 90, pv: 4300, amt: 2100 },
{ name: '2006', uv: 90, pv: 4300, amt: 2100 },
{ name: '2007', uv: 30, pv: 4300, amt: 2100 },
{ name: '2008', uv: 34, pv: 4300, amt: 2100 },
{ name: '2009', uv: 39, pv: 4300, amt: 2100 },
{ name: '2010', uv: 30, pv: 4300, amt: 2100 },
{ name: '2011', uv: 40, pv: 4300, amt: 2100 },
{ name: '2012', uv: 34, pv: 4300, amt: 2100 },
{ name: '2013', uv: 30, pv: 4300, amt: 2100 },
{ name: '2014', uv: 30, pv: 4300, amt: 2100 },
{ name: '2015', uv: 40, pv: 4300, amt: 2100 },
{ name: '2016', uv: 90, pv: 4300, amt: 2100 },
{ name: '2017', uv: 90, pv: 4300, amt: 2100 },
{ name: '2018', uv: 90, pv: 4300, amt: 2100 },
{ name: '2019', uv: 30, pv: 4300, amt: 2100 },
{ name: '2020', uv: 30, pv: 4300, amt: 2100 },
  
];
const getPath = (x, y, width, height) => {
    return `M${x},${y + height}C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3}
    ${x + width / 2}, ${y}
    C${x + width / 2},${y + height / 3} ${x + (2 * width) / 3},${y + height} ${x + width}, ${y + height}
    Z`;
  };
  
  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;
  
    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };
  const Charts = () => {
    return (
      <div className = 'charts'>
        <BarChart
          width={1200}
          height={300}
          data={data}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis
            type="number" // Use 'number' type for numeric values
            domain={[0, 90]} // Set the desired Y-axis range
            tickCount={6} // Adjust the number of ticks on the Y-axis
            // Add other Y-axis configurations as needed
          />
          <Bar
            dataKey="uv"
            fill="#8884d8"
            shape={<TriangleBar />}
            label={{ position: 'top' }}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index % 20]} />
            ))}
          </Bar>
        </BarChart>
      </div>
    );
  };
  
export default Charts;
