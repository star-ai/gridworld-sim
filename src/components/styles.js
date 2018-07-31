import styled from 'styled-components';

export const Label = styled.label`
  padding: 5px;
`;

export const Input = styled.input`
  font-size: 0.45rem;
  width: ${props => props.width || 3}rem;
  border-radius: 5px;
  padding: 2px;
`;

export const InlineBlock = styled.div`
  float: left;
  margin-right: 10px;

  &:first-child {
    margin-left: 10px;
  }
`;

export const Fieldset = styled.fieldset`
  font-size: 0.6rem;
  padding: 5px;
  padding-bottom: 15px;
  border-radius: 10px;

  &:last-child {
    content: "";
    display: table;
    clear: both;
  }
`;

export const Legend = styled.legend`
  font-size: 0.8rem;
  text-align: left;
`;

export const Button = styled.button`
  width: 3.5rem;
  border: 1px solid black;
  border-radius: 5px;
  margin-right: 10px;
  padding: 0;
  display: block;
  text-align: center;
  padding: 3px;
`;

export const Select = styled.select`
  padding: 5px;
  font-size: .45rem;
`;

export const UrlButton = styled.a`
  &:hover {
    color: black;
    background-color: lightblue;
  };
  &:last-child {
    margin: 0;
  }
`;

export const Board = styled.div`
  display: inline-block;
`;

export const Cell = styled.div`
  background: white;
  border: 1px solid black;
  float: left;
  font-size: 0.8rem;
  font-weight: bold;
  text-align: center;
  padding: 5px;
  line-height: 2.5rem;
  height: 2.5rem;
  width: 2.5rem;
  margin-right: -1px;
  margin-top: -1px;
`;
