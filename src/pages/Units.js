import Ages from "../components/Ages";
import Costs from "../components/Costs";
import UnitTable from "../components/UnitTable";

const Units = () => {
  return (
    <div className="wrapper">
      <div className="filters">
        <div className="filters-fixed">
          <Ages />
          <Costs />
        </div>
      </div>
      <UnitTable />
    </div>
  );
};

export default Units;
