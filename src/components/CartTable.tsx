import React from 'react';

export type CartTable = {
  jewelName: string;
  quantity: number;
  price: number;
};

/* Renders a single row in the List Stuff table. See list/page.tsx. */
const CTable = ({ jewelName, quantity, price }: CartTable) => (
  <tr>
    <td className="table-cell jewel-name">{jewelName}</td>
    <td className="table-cell quantity">{quantity}</td>
    <td className="table-cell price">
      $
      {price.toFixed(2)}
    </td>
    <td className="table-cell actions">
      <a href="\" className="edit-link">Edit</a>
    </td>
  </tr>
);

export default CTable;
