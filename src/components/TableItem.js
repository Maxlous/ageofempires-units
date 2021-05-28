const TableItem = ({ id, name, age, costs }) => {
  return (
    <tr>
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
