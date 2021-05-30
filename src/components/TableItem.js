import { useHistory } from "react-router-dom";

const TableItem = ({ id, name, age, costs }) => {
  const history = useHistory();
  const goToDetailsPage = () => {
    history.push(`/units/details/${name}`);
  };
  return (
    <tr onClick={goToDetailsPage}>
      <td>{id}</td>
      <td>{name}</td>
      <td>{age}</td>
      <td>
        {costs &&
          Object.entries(costs).map(([key, value], index) => {
            return `${key}: ${value}${index === 0 ? ", " : " "}`;
          })}
      </td>
    </tr>
  );
};

export default TableItem;
