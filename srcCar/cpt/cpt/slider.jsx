import React from "react";
import Slider from "@material-ui/core/Slider";

function valuetext(value) {
  return `${value}°C`;
}

const marks = [
    {
      value: 2300,
      label: '2300mm',
    },
    {
      value: 3500,
      label: '3500mm',
    },
  ];

export default function RangeSlider() {
  const [value, setValue] = React.useState([2400, 3000]);

  const handleChange = (event, newValue) => {
    console.log(newValue);
    setValue(newValue);
  };

  return (
    <div className="sliderCon">
        <label className = 'SliderLabelName'>轴距</label>
      <Slider 
        value={value}
        onChange={handleChange}
        valueLabelDisplay="auto"
        aria-labelledby="range-slider"
        getAriaValueText={valuetext}
        marks = {marks}
        max = {3500}
        min = {2300}
      />
    </div>
  );
}
