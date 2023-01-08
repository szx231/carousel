import styled from '@emotion/styled';

export const Container = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 50px;
  position: absolute;
  left: 50%;
  top: 50%;
  -webkit-transform: translate(-50%, -50%);
  -moz-transform: translate(-50%, -50%);
  -ms-transform: translate(-50%, -50%);
  -o-transform: translate(-50%, -50%);
  transform: translate(-50%, -50%);
  flex-wrap: nowrap;
  width: 100%;
  margin: -20px 0px 0px -20px;
`;

export const Date1 = styled.h2`
  font-family: 'PT Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 200px;
  color: #5d5fef;
  line-height: 160px;
`;

export const Date2 = styled.h2`
  font-family: 'PT Sans';
  font-style: normal;
  font-weight: 700;
  font-size: 200px;
  color: #ef5da8;
  line-height: 160px;
`;
