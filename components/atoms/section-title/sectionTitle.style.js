import styled from 'styled-components';

export const Title = styled.h4`
  display: block;
  margin-bottom: 16px;
  font-weight: bold;
  font-size: 1.125em;
  font-family: 'Roboto', sans-serif;
  ${props => props.customStyle}
`;