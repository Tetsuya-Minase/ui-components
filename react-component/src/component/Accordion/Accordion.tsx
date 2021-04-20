import React from 'react';
import styled, { keyframes } from 'styled-components';

const AccordionTitle = styled.label`
  display: flex;
  justify-content: space-between;
  width: 300px;
  &::after {
    content: '\ff0b';
    display: inline-block;
  }
`;
const AccordionDetailList = styled.ul`
  display: none;
`;
const ShowAnimation = keyframes`
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
`;
const AccordionCheckbox = styled.input.attrs({type: 'checkbox'})`
    display: none;
    &:checked {
      & + ${AccordionTitle}::after {
        content: '\ff0d';
      }
      & + ${AccordionTitle} + div {
        & > ul {
          display: block;
          animation: ${ShowAnimation} 0.3s linear 0s;
        }
      }
    }
`;

interface AccordionItem {
  readonly title: string;
  readonly details: string[];
}
export const Accordion: React.FC<{ itemList: AccordionItem[] }> = ({ itemList }) => {
  return <div>
    <ul>
      {itemList.map((i, index) =>
        <li key={`${i}${index}`}>
          <AccordionCheckbox id={`accordion__check${index}`}/>
          <AccordionTitle htmlFor={`accordion__check${index}`}>{i.title}</AccordionTitle>
          <div>
            <AccordionDetailList>
              {i.details.map((d,index) => <li key={`${d}${index}`}>{d}</li>)}
            </AccordionDetailList>
          </div>
        </li>
      )}
    </ul>
  </div>
}