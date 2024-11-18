// src/Table.js
import React from 'react';


const Table = ({ data }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Type</th>
          <th>Name</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.id}>
            <td>{item.id}</td>
            <td>{item['@odata.type']}</td>
            <td>{item.displayName}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
