import styled from '@emotion/styled';

import { Button } from '../ContactForm/ContactForm.styled';

export const List = styled.ul`
  width: 500px;
  margin: 0 auto;
  padding: 12px;
  border: 2.5px solid #3b85c5;
  border-radius: 4px;
`;

export const Contact = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4px;
  :not(:last-child) {
    border-bottom: 0.5px solid #3b85c5;
  }
`;

export const ContactName = styled.span`
  width: 200px;
  font-weight: 500;
`;

export const ContactNumber = styled.span`
  width: 100px;
  padding-left: 12px;
  font-size: 12px;
`;

export const DeleteButton = Button.withComponent('deletebutton');

export const DefaultMessage = styled.p`
  padding: 12px;
  text-align: center;
`;
