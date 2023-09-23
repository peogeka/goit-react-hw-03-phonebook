import styled from 'styled-components';

export const Title = styled.h2``;

export const List = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 20px;
  border: 1px solid rgb(204, 204, 204);
  border-radius: 5px;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 0px 10px;
  padding: 25px;
`;

export const Item = styled.li``;

export const Wrapper = styled.div`
  display: flex;
  justify-content: start;
  align-item: center;
  gap: 20px;
  
`;

export const Text = styled.p`
  margin: 0;
`;

export const Button = styled.button`
  cursor: pointer;
  padding: 4px 8px;
  border-radius: 6px;
  border-color: lightgray;
  background-color: red;
`;