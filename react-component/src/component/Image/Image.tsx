import React from 'react';
import styled, {css} from 'styled-components';


type ImageProps = {
  src: string;
  width: number;
  height: number;
};

const Wrapper = styled.div<Pick<ImageProps, 'width' | 'height'>>`
  background-color: #EEE;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({width}) => width}px;
  height: ${({height}) => height}px;
`;
const Image = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

export const ImageComponent: React.FC<ImageProps> = ({src, width, height}) => <Wrapper width={width} height={height}>
  <Image src={src}></Image>
</Wrapper>;