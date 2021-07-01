import React from 'react';
import { Link } from 'react-router-dom';
import { routes } from 'core/router';
import { AppLayout } from 'layouts';
import { CheckoutListContainer } from 'pods';

export const CheckoutScene: React.FC = () => {
  return (
    <AppLayout>
      <h1>Checkout</h1>
      <CheckoutListContainer />
    </AppLayout>
  );
};
