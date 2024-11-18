'use client';

import React from 'react';
// import { useSession } from 'next-auth/react';
import { Col, Container, Row } from 'react-bootstrap';
// import { useForm } from 'react-hook-form';
// import { yupResolver } from '@hookform/resolvers/yup';
// import swal from 'sweetalert';
// import { redirect } from 'next/navigation';
// import LoadingSpinner from '@/components/LoadingSpinner';
// import { AddStuffSchema } from '@/lib/validationSchemas';

// const onSubmit = async (data: { name: string; quantity: number; owner: string; condition: string }) => {
//   // console.log(`onSubmit data: ${JSON.stringify(data, null, 2)}`);
//   await addStuff(data);
//   swal('Success', 'Your item has been added', 'success', {
//     timer: 2000,
//   });
// };

const OurProductsPage = () => (
  <Container className="py-3">
    <Row className="justify-content-center">
      <Col xs={5}>
        <Col className="text-center">
          <h2>Our Products</h2>
        </Col>
        <h2>Necklaces</h2>
      </Col>
    </Row>
  </Container>
);

export default OurProductsPage;
