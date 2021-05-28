import { useState, useEffect } from "react";
import { filterAccordingToAge, removeAge } from "../redux/actions";
import { useDispatch } from "react-redux";

const Ages = () => {
  const [isAllSelected, setIsAllSelected] = useState(true);
  const dispatch = useDispatch();

  useEffect(() => {
    if (isAllSelected) {
      dispatch(removeAge("Remove", "All"));
      dispatch(filterAccordingToAge("All"));
    } else {
      dispatch(removeAge("Remove", "All"));
    }
  });

  const handleCheck = (e) => {
    if (e.target.checked && isAllSelected) {
      setIsAllSelected(false);
      // dispatch(removeAge("Remove", "All"));
      dispatch(filterAccordingToAge(e.target.value));
    }
    if (e.target.checked && !isAllSelected) {
      dispatch(filterAccordingToAge(e.target.value));
    } else {
      dispatch(removeAge("Remove", e.target.value));
    }
  };

  const handleAll = (e) => {
    if (e.target.checked) {
      setIsAllSelected(true);
    } else {
      setIsAllSelected(false);
    }
  };

  return (
    <section>
      <h2>Ages</h2>
      <div>
        <label htmlFor="all">All</label>
        {isAllSelected ? (
          <input
            onChange={handleAll}
            type="checkbox"
            value="All"
            id="all"
            defaultChecked
          />
        ) : (
          <input onChange={handleAll} type="checkbox" value="All" id="all" />
        )}
      </div>
      <div>
        <label htmlFor="dark">Dark</label>
        <input onChange={handleCheck} type="checkbox" value="Dark" id="dark" />
      </div>
      <div>
        <label htmlFor="feudal">Feudal</label>
        <input
          onChange={handleCheck}
          type="checkbox"
          value="Feudal"
          id="feudal"
        />
      </div>
      <div>
        <label htmlFor="imperial">Imperial</label>
        <input
          onChange={handleCheck}
          type="checkbox"
          value="Imperial"
          id="imperial"
        />
      </div>
      <div>
        <label htmlFor="castle">Castle</label>
        <input
          onChange={handleCheck}
          type="checkbox"
          value="Castle"
          id="castle"
        />
      </div>
    </section>
  );
};

export default Ages;
