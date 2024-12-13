'use client';

import React from 'react';

export type CartTable = {
  jewelName: string;
  quantity: number;
  price: number;
};

/* Renders a single row in the cart table with enhanced styling. */
const CTable = ({ jewelName, quantity, price }: CartTable) => (
  <tr className="cart-row bg-gradient shadow-sm rounded">
    <td className="table-cell jewel-name text-primary">{jewelName}</td>
    <td className="table-cell quantity">
      <span>
        {quantity}
      </span>
    </td>
    <td className="table-cell price text-end">
      <span className="fw-bold">$</span>
      {price.toFixed(2)}
    </td>
    <td className="table-cell actions text-center">
      <a href={`/edit/${jewelName}`}>Edit</a>
    </td>
  </tr>
);

export default CTable;
