import { useSelector } from "react-redux";
import TableItem from "./TableItem";

const UnitTable = () => {
  const data = useSelector((state) => state.agesReducer);
  console.log(data);
  return (
    <table>
      <tr key="heading">
        <th>id</th>
        <th>name</th>
        <th>age</th>
        <th>costs</th>
      </tr>
      {data.map((unit) => {
        return (
          <TableItem
            key={unit.id}
            name={unit.name}
            age={unit.age}
            costs={unit.cost}
            id={unit.id}
          />
        );
      })}
    </table>
  );
};

export default UnitTable;
