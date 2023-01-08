import React from 'react';
import { Container, Date1, Date2 } from './styled';

interface ICircle {
  title1: string;
  title2: string;
}

export const TitleDate: React.FC<ICircle> = ({ title1, title2 }) => {
  return (
    <Container>
      <Date1>{title1}</Date1>
      <Date2>{title2}</Date2>
    </Container>
  );
};
