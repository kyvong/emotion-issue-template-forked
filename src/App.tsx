/** @jsxImportSource @emotion/react */
import { css } from '@emotion/css';
import styled from '@emotion/styled';

// Classname example
const appClassName = css`
  font-family: sans-serif;
  text-align: center;
`;

// Styled component example
const Title = styled.h1`
  font-size: 30px;
  color: ${(props) => props.theme.titleColor};
`;

const Heading = () => (
  <Title css={(theme) => ({ color: theme.headerColor })}>
    Emotion Issue Template
  </Title>
);

export default function App() {
  return (
    <div className={appClassName}>
      <Heading css={{ color: 'blue' }} />

      {/* css prop example */}
      <h2 css={{ color: 'salmon' }}>Start editing to see some magic happen!</h2>
    </div>
  );
}
