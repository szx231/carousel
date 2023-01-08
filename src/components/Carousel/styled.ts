import styled from '@emotion/styled';

interface ICarousel {
  readonly rotate: string;
}

export const CarouselCircle = styled.div<ICarousel>`
  rotate: ${(props) => props.rotate};
  width: 530px;
  height: 530px;
  border: 1px solid rgba(66, 86, 122, 0.1);
  border-radius: 50%;
  transition: 0.4s ease-in-out;
  transform: rotate(30deg);
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 530px;
  max-width: 530px;
  margin: 0 auto;
  margin: -170px -40px -104px -78px;
`;

export const CarouselWrapper = styled.div`
  position: relative;
  transition: 0.4s ease-in-out;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;
