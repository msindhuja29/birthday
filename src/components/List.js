import React from "react";

const List = (props) => {
  return (
    <div>
      {props.people.map((person) => {
        const { id, name, age, image } = person;
        return (
          <article key={id} className="person">
            <img src={image} alt={name}></img>
            <div>
              <h4>{name}</h4>
              <p>{age} years old</p>
            </div>
          </article>
        );
      })}
    </div>
  );
};

export default List;
