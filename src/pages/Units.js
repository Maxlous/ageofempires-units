import { useSelector } from "react-redux";
import Ages from "../components/Ages";
const Units = () => {
  const data = useSelector((state) => state.agesReducer);
  console.log(data);
  return (
    <div>
      <Ages />
    </div>
  );
};

export default Units;
