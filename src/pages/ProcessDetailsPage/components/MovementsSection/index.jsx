import React from "react";

const MovementsSection = ({ movements = [] }) => {
  return (
    <div className="table-container">
      <table className="table is-hoverable">
        <thead>
          <tr>
            <th>Data</th>
            <th>Tipo</th>
            <th>Texto</th>
          </tr>
        </thead>

        <tbody>
          {movements.map((movement) => (
            <tr key={movement[4]}>
              <td className="-white-space-nowrap">{movement[0]}</td>
              <td className="-white-space-nowrap">{movement[1]}</td>
              <td>{movement[2]}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default MovementsSection;
