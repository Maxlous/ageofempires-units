import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateCost } from "../redux/actions";

const Costs = () => {
  const isCost = useSelector((state) => state.optionsReducer.costs);
  const dispatch = useDispatch();
  const goldRef = useRef();
  const foodRef = useRef();
  const woodRef = useRef();

  const handleCheckboxChange = (e) => {
    if (e.target.checked) {
      dispatch(updateCost(e.target.value, 50));
    } else {
      //set default value 50 to re-orient slider when cost category disabled
      if (e.target.value === "Food") foodRef.current.value = 50;
      if (e.target.value === "Wood") woodRef.current.value = 50;
      if (e.target.value === "Gold") goldRef.current.value = 50;
      dispatch(updateCost(e.target.value, null));
    }
  };

  const handleSliderChange = (e) => {
    dispatch(updateCost(e.target.name, e.target.valueAsNumber));
  };

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
          <input
            type="range"
            name="Wood"
            min="1"
            max="200"
            defaultValue={50}
            onChange={handleSliderChange}
            disabled={isCost.Wood ? false : true}
            ref={woodRef}
          />
          <span>{isCost.Wood ? woodRef.current.value : ""}</span>
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
          <input
            type="range"
            name="Food"
            min="1"
            max="200"
            defaultValue={50}
            onChange={handleSliderChange}
            disabled={isCost.Food ? false : true}
            ref={foodRef}
          />
          <span>{isCost.Food ? foodRef.current.value : ""}</span>
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
          <input
            type="range"
            name="Gold"
            min="1"
            max="200"
            defaultValue={50}
            onChange={handleSliderChange}
            disabled={isCost.Gold ? false : true}
            ref={goldRef}
          />
          <span>{isCost.Gold ? goldRef.current.value : ""}</span>
        </div>
      </div>
    </section>
  );
};

export default Costs;
