import { updateAge } from "../redux/actions";
import { useDispatch, useSelector } from "react-redux";

const Ages = () => {
  const dispatch = useDispatch();
  const age = useSelector((state) => state.optionsReducer.age);

  const handleCheck = (e) => {
    dispatch(updateAge(e.target.value));
  };

  return (
    <section className="ages-section">
      <h2>Ages</h2>
      <div className="ages-section-inputs">
        <div>
          <input
            onClick={handleCheck}
            type="button"
            value="All"
            id="all"
            name="All"
            disabled={age === "All" ? true : false}
          />
        </div>
        <div>
          <input
            onClick={handleCheck}
            type="button"
            value="Dark"
            id="dark"
            name="Dark"
            disabled={age === "Dark" ? true : false}
          />
        </div>
        <div>
          <input
            onClick={handleCheck}
            type="button"
            value="Feudal"
            id="feudal"
            name="Feudal"
            disabled={age === "Feudal" ? true : false}
          />
        </div>
        <div>
          <input
            onClick={handleCheck}
            type="button"
            value="Imperial"
            id="imperial"
            name="Imperial"
            disabled={age === "Imperial" ? true : false}
          />
        </div>
        <div>
          <input
            onClick={handleCheck}
            type="button"
            value="Castle"
            id="castle"
            name="Castle"
            disabled={age === "Castle" ? true : false}
          />
        </div>
      </div>
    </section>
  );
};

export default Ages;
