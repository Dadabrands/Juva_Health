
import  { useState } from 'react';

const colors = ['bg-lightgreen', 'bg-secondary', 'bg-lightblue'];

const EditableField = ({ initialValue }) => {
  const [value, setValue] = useState(initialValue);
  const [isEditing, setIsEditing] = useState(false);
  const [randomColorIndex, setRandomColorIndex] = useState(
    Math.floor(Math.random() * colors.length)
  );

  const handleDoubleClick = () => {
    setIsEditing(true);
  };

  const handleBlur = () => {
    setIsEditing(false);
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div
      onDoubleClick={handleDoubleClick}
      onBlur={handleBlur}
      className={`flex flex-col justify-center items-center px-16 py-4 mt-4 text-xl leading-6 rounded-3xl max-md:px-5 ${
        colors[randomColorIndex]
      } ${isEditing ? 'border' : ''}`}
    >
      {isEditing ? (
        <input
          value={value}
          onChange={handleChange}
          autoFocus
          className="w-full outline-none bg-transparent"
        />
      ) : (
        <span>{value}</span>
      )}
    </div>
  );
};

const VitalsForm = () => {
  return (
    <div className="flex flex-col mt-2 font-semibold max-md:mt-2 max-md:max-w-full">
      <div className="mt-14 text-5xl font-bold text-black max-md:mt-10 max-md:max-w-full max-md:text-4xl text-center">
        View and edit your vitals
      </div>
      <div className="mt-12 text-3xl text-black max-md:mt-10 max-md:max-w-full text-center">
        Your health status
      </div>
      <div className="flex gap-5 justify-between pr-20 mt-12 whitespace-nowrap text-stone-500 max-md:flex-wrap max-md:pr-5 max-md:mt-10 max-md:max-w-full">
        <div className="flex flex-col flex-1 justify-center">
          <div className="self-center text-lg">Blood Pressure</div>
          <EditableField initialValue="110/80" />
        </div>
        <div className="flex flex-col flex-1 justify-center">
          <div className="self-center text-lg">Pulse</div>
          <EditableField initialValue="62 BPM" />
        </div>
        <div className="flex flex-col flex-1 justify-center">
          <div className="self-center text-lg">Height (cm)</div>
          <EditableField initialValue="178cm" />
        </div>
      </div>
      <div className="flex gap-5 justify-between self-center mt-6 max-w-full whitespace-nowrap text-stone-500 w-[896px] max-md:flex-wrap">
        <div className="flex flex-col flex-1 justify-center">
          <div className="self-center text-lg">Weight (kg)</div>
          <EditableField initialValue="58kg" />
        </div>
        <div className="flex flex-col flex-1 justify-center">
          <div className="self-center text-lg">Blood Glucose Level</div>
          <EditableField initialValue="120 mg/dl" />
        </div>
        <div className="flex flex-col flex-1 justify-center">
          <div className="self-center text-lg">Blood Oxygen</div>
          <EditableField initialValue="98%" />
        </div>
      </div>
      <div className="flex gap-5 justify-between pr-20 mt-6 whitespace-nowrap text-stone-500 max-md:flex-wrap max-md:pr-5 max-md:max-w-full">
        <div className="flex flex-col flex-1 justify-center">
          <div className="self-center text-lg">Temperature</div>
          <EditableField initialValue="37.5°C" />
        </div>
        <div className="flex flex-col flex-1 justify-center">
          <div className="self-center text-lg">Respiratory Rate</div>
          <EditableField initialValue="16 bpm" />
        </div>
        <div className="flex flex-col flex-1 justify-center">
          <div className="self-center text-lg">Allergies</div>
          <EditableField initialValue="Penicillin, Ibuprofen" />
        </div>
      </div>
      <div className="self-center mt-24 text-xl text-purple-800 whitespace-nowrap max-md:mt-10">
        Double click to view and edit
      </div>
    </div>
  );
};

export default VitalsForm;
