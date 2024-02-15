import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';

export default function Root() {
  return (
    <>
      <Outlet />
      <Navigate to='/' replace />
    </>
  );
}
