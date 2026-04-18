import React from "react";
import { PieChart, Pie, Cell } from "recharts";

const PieChartComponent = ({ data }) => {
  const COLORS = data.map(entry => entry.color);

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, payload }) => {
    // Calculate the radius for label positioning
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    // Correct access to emojis from the payload
    return (
      <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
        {payload.title}  {/* Uses data.emojis */}
      </text>
    );
  };

  return (
    <PieChart width={300} height={200}>
      <Pie
        data={data}
        cx={140}
        cy={80}
        startAngle={360}
        endAngle={0}
        innerRadius={60}
        outerRadius={80}
        labelLine={false}
        label={renderCustomizedLabel} // Assign the render function here
        fill="#8884d8"
        paddingAngle={5}
        dataKey="value"
      >
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={entry.color} />
        ))}
      </Pie>
    </PieChart>
  );
};

export default PieChartComponent;
