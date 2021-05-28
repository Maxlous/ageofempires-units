import { useState } from "react";
import { useDispatch } from "react-redux";
import { filterAccordingToCost, removeCost } from "../redux/actions";

const Costs = () => {
  const [isDisabled, setIsDisabled] = useState({
    food: true,
    gold: true,
    wood: true,
  });

  const dispatch = useDispatch();

  const handleCheckboxChange = (e) => {
    if (e.target.checked) {
      setIsDisabled({ ...isDisabled, [e.target.id]: false });
      dispatch(filterAccordingToCost(e.target.value, 50));
    } else {
      setIsDisabled({ ...isDisabled, [e.target.id]: true });
      dispatch(removeCost("Remove", e.target.value));
    }
  };

  const handleSliderChange = (e) => {};

  return (
    <section>
      <h2>Costs</h2>
      <div>
        <div>
          <input
            onChange={handleCheckboxChange}
            id="wood"
            value="Wood"
            type="checkbox"
          />
          <label htmlFor="wood">Wood</label>
        </div>
        <div>
          {isDisabled.wood ? (
            <input type="range" name="Wood" min="0" max="200" disabled />
          ) : (
            <input
              type="range"
              name="Wood"
              min="0"
              max="200"
              defaultValue={50}
              onChange={handleSliderChange}
            />
          )}
        </div>
      </div>
      <div>
        <div>
          <input
            onChange={handleCheckboxChange}
            id="food"
            value="Food"
            type="checkbox"
          />
          <label htmlFor="food">Food</label>
        </div>
        <div>
          {isDisabled.food ? (
            <input type="range" name="Food" min="0" max="200" disabled />
          ) : (
            <input
              type="range"
              name="Food"
              min="0"
              max="200"
              defaultValue={50}
              onChange={handleSliderChange}
            />
          )}
        </div>
      </div>
      <div>
        <div>
          <input
            onChange={handleCheckboxChange}
            id="gold"
            value="Gold"
            type="checkbox"
          />
          <label htmlFor="gold">Gold</label>
        </div>
        <div>
          {isDisabled.gold ? (
            <input type="range" name="Gold" min="0" max="200" disabled />
          ) : (
            <input
              type="range"
              name="Gold"
              min="0"
              max="200"
              defaultValue={50}
              onChange={handleSliderChange}
            />
          )}
        </div>
      </div>
    </section>
  );
};

export default Costs;
