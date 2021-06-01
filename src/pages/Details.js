import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import data from "../data.json";

const Details = () => {
  const [unitDetails, setUnitDetails] = useState({});
  const { id } = useParams();
  const getUnitDetails = (id) => {
    const foundUnit = data.units.find((unit) => unit.name === id);
    if (!foundUnit) return;
    setUnitDetails(foundUnit);
  };

  useEffect(() => {
    getUnitDetails(id);
  });

  return (
    <article className="details">
      <div className="deneme">
        <h1>{unitDetails.name}</h1>
        <div>
          <p>
            <span>ID: </span>
            {unitDetails.id}
          </p>
          <p>
            <span>Name: </span>
            {unitDetails.name}
          </p>
          <p className="description">
            <span>Description: </span>
            {unitDetails.description}
          </p>
          <p>
            <span>Min.Required Age: </span>
            {unitDetails.age}
          </p>
          <p>
            <span>Wood Cost: </span>
            {unitDetails.cost?.Wood}
          </p>
          <p>
            <span>Food Cost: </span>
            {unitDetails.cost?.Food}
          </p>
          <p>
            <span>Gold Cost: </span>
            {unitDetails.cost?.Gold}
          </p>
          <p>
            <span>Build Time: </span>
            {unitDetails.build_time}
          </p>
          <p>
            <span>Reload Time: </span>
            {unitDetails.reload_time}
          </p>
          <p>
            <span>Hit Points: </span>
            {unitDetails.hit_points}
          </p>
          <p>
            <span>Attack: </span>
            {unitDetails.attack}
          </p>
          <p>
            <span>Accuracy: </span>
            {unitDetails.accuracy}
          </p>
        </div>
      </div>
    </article>
  );
};

export default Details;
