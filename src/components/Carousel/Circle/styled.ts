import styled from '@emotion/styled';
import { css } from '@emotion/react';

interface ICircleButton {
  isActive: boolean;
  describe: number;
  rotateBtn: string;
}

interface ICircleIndex {
  rotateIndex: string;
  isActive: boolean;
}

interface ICircleIndexNumber {
  isActive: boolean;
}

interface ICircleText {
  isActive: boolean;
}

export const CircleButton = styled.button<ICircleButton>`
  position: absolute;
  width: 2px;
  top: 0;
  left: 50%;
  height: 50%;
  transform: translateX(-50%);
  transform-origin: bottom left;
  background-color: transparent;
  border: none;
  will-change: transform;
  rotate: ${(props) => props.rotateBtn};
  cursor: pointer;
`;

export const CircleItem = styled.div`
  position: absolute;
  top: 0%;
  left: 50;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const CircleIndex = styled.div<ICircleIndex>`
  display: flex;
  align-items: center;
  justify-content: center;
  transform: translate3d(-50%, -50%, 0) rotate(${(props) => (+props.rotateIndex.replace('deg', '') + 30) * -1}deg);
  will-change: transform;
  width: ${(props) => (props.isActive ? '56px' : '6px')};
  height: ${(props) => (props.isActive ? '56px' : '6px')};
  border-radius: 50%;
  border: 1px solid rgba(48, 62, 88, 0.5);
  transition: all 0.4s ease-in-out;
  z-index: 200;
  background-color: ${(props) => (props.isActive ? 'transparent' : '#000')};
  overflow: ${(props) => (props.isActive ? 'none' : 'hidden')};
  &:hover {
    width: 56px;
    height: 56px;
    background-color: #f4f5f9;
    color: #000;
  }
`;

export const CircleIndexNumber = styled.div<ICircleIndexNumber>``;

export const CircleText = styled.div<ICircleText>`
  position: absolute;
  top: 35%;
  left: calc(100% + 12px);
  opacity: ${(props) => (props.isActive ? 1 : 0)};
  will-change: opacity;
  transition: opacity 0.4s ease-in-out;
  pointer-events: none;

  ${({ isActive }) =>
    isActive &&
    css`
      pointer-events: all;
      opacity: 1;
      transition: opacity 0.4s 0.4s ease-in-out;
    `}
`;
