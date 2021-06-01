import { useSelector } from "react-redux";
import TableItem from "./TableItem";

const UnitTable = () => {
  const data = useSelector((state) => state.filterReducer);

  return (
    <table>
      <thead>
        <tr>
          <th>id</th>
          <th>name</th>
          <th>age</th>
          <th>costs</th>
        </tr>
      </thead>
      <tbody>
        {data &&
          data.map((unit) => {
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
      </tbody>
    </table>
  );
};

export default UnitTable;
