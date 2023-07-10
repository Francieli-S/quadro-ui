import { FC } from 'react';

export interface CardProps {
  title: string;
}

export const Card: FC<CardProps> = ({ title }) => {
  return (
    <>
      <h1>{title}</h1>
    </>
  );
};
