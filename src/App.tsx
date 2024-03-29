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

export default function App() {
  return (
    <div className={appClassName}>
      <Title css={(theme) => ({ color: theme.headerColor })}>
        Emotion Issue Template
      </Title>

      {/* css prop example */}
      <h2 css={{ color: 'salmon' }}>Start editing to see some magic happen!</h2>
    </div>
  );
}
