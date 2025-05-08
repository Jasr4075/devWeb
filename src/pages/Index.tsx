
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Layout from '@/components/Layout';
import Dashboard from './Dashboard';
import Relatorio from './Relatorio';

const Index = () => {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/relatorio" element={<Relatorio />} />
      </Routes>
    </Layout>
  );
};

export default Index;
