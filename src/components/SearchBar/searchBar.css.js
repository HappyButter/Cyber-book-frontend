import styled from 'styled-components';

export const SearchBarInput = styled.input`
  color: rgb(170, 170, 170);
  min-width: 400px;
  padding: 10px;
  margin-bottom: 10px;
  gap: 10px;

  background: rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px 0 rgba(100, 100, 100, 0.1);
  backdrop-filter: blur(14px);
  -webkit-backdrop-filter: blur(14px);
  border-radius: 1.4em;
  border: 1px solid rgba(255, 255, 255, 0.1);

  &:focus {
    outline: none;
  }
`;
