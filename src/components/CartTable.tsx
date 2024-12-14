'use client';

import React from 'react';
import Link from 'next/link';
import { CartItems } from '@prisma/client';

/* Renders a single row in the cart table with enhanced styling. */
const CTable = ({ id, jewelName, quantity, pricePerUnit }: CartItems) => (
  <tr className="cart-row bg-gradient shadow-sm rounded">
    <td className="table-cell jewel-name text-primary">{jewelName}</td>
    <td className="table-cell quantity">
      <span>
        {quantity}
      </span>
    </td>
    <td className="table-cell price text-end">
      <span className="fw-bold">$</span>
      {pricePerUnit.toFixed(2)}
    </td>
    <td className="table-cell actions text-center">
      <Link href={`/edit/${id}`}>Edit</Link>
    </td>
  </tr>
);

export default CTable;
