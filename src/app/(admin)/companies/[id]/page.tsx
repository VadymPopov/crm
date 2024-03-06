import React from 'react';
import Header from '@/app/components/Header';

export interface PageProps {
  params: { id: string };
}

const Page = ({ params }: PageProps) => {
  return (
    <>
      <Header>Companies ({params.id})</Header>
    </>
  );
};

export default Page;
