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
      <label htmlFor={`quantity-${jewelName}`} className="sr-only">
        Quantity for {jewelName}
      </label>
      <input
        id={`quantity-${jewelName}`}
        type="number"
        min="1"
        value={quantity}
        className="quantity-input form-control form-control-sm w-15"
        onChange={(e) => console.log(`Update quantity for ${jewelName}:`, e.target.value)}
      />
    </td>
    <td className="table-cell price text-end">
      <span className="fw-bold">$</span>
      {price.toFixed(2)}
    </td>
    <td className="table-cell actions text-center">
      <button
        type="button"
        className="remove-button btn btn-danger btn-sm"
        onClick={() => console.log(`Remove item: ${jewelName}`)}
      >
        Remove
      </button>
    </td>
  </tr>
);

export default CTable;
