import styled from '@emotion/styled';

interface IButton {
  isDisabled: boolean;
}

interface IArrowImage {
  isDisabled: boolean;
}

export const Container = styled.section`
  max-width: 1480px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
  margin: 0 auto;
  padding: 0 20px;
`;

export const Button = styled.button<IButton>`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: ${(props) => (props.isDisabled ? '1px solid rgba(66, 86, 122, 0.1);' : '1px solid rgba(66, 86, 122, 0.5);')};
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  cursor: pointer;
`;

export const ArrowImage = styled.div<IArrowImage>`
  width: 10px;
  height: 14px;
  mask-image: url('/src/assets/arrowGrey.svg');
  mask-repeat: no-repeat;
  mask-position: center center;
  background-color: ${(props) => (props.isDisabled ? 'rgba(66, 86, 122, 0.1);' : 'rgba(66, 86, 122, 0.5);')};
`;

export const CurrentSlide = styled.div`
  color: rgba(66, 86, 122, 1);
  font-weight: 400;
  font-size: 14px;
  line-height: 18px;
  margin-bottom: 20px;
`;

export const ButtonsWrap = styled.div`
  display: flex;
  gap: 20px;
`;

export const CurrentSlideNavigation = styled.div`
  display: grid;
  align-items: center;
  margin-bottom: 56px;
`;
