import React from "react";

const PartsSection = ({ parts = [] }) => {
  return (
    <div className="table-container">
      <table className="table is-hoverable">
        <thead>
          <tr>
            <th>Parte</th>
            <th>Nome</th>
            <th>Advogado</th>
            <th>OAB</th>
          </tr>
        </thead>

        <tbody>
          {parts.map((part) => (
            <tr key={part[1]}>
              <td className="-white-space-nowrap">{part[8]}</td>
              <td>{part[2]}</td>
              <td>{part[9].flatMap((lawyer) => [lawyer[1]]).join(" ")}</td>
              <td>{part[9].flatMap((lawyer) => [lawyer[2]])}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PartsSection;
