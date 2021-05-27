import { filterAccordingToAge, removeAge } from "../redux/actions";
import { useDispatch } from "react-redux";

const Ages = () => {
  const dispatch = useDispatch();

  const handleCheck = (e) => {
    if (e.target.checked) {
      dispatch(filterAccordingToAge(e.target.value));
    } else {
      dispatch(removeAge("Remove", e.target.value));
    }
  };

  return (
    <section>
      <h2>Ages</h2>
      <div>
        <label htmlFor="all">All</label>
        <input onChange={handleCheck} type="checkbox" value="All" id="all" />
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
