// External Dependencies
import React, { useState } from 'react';
import styled from 'styled-components';

// Local Variables
const Main = styled.main`
  display: flex;
  flex-direction: column;
  width: 100%;
  font-family: 'Open Sans', sans-serif;
`;

const Header = styled.header`
  padding: 12px 16px;
  border-bottom: 3px solid darkblue;
  flex: 1 0 100%;
`;

const Title = styled.h1`
  font-family: 'Marko One', serif;
  margin: 0;
`;

const Section = styled.section`
  background-color: aliceblue;
  display: flex;
  align-items: center;
  flex-direction: column;
  flex: 1 0 100%;
  text-align: center;
  padding: 36px;
`;

const Paragraph = styled.p`
  font-size: 18px;
  padding: 0 16px;
`;

const Form = styled.form`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 300px;
`;

const Input = styled.input`
  border-radius: 8px;
  font-size: 24px;
  padding: 8px 16px;
`;

const Button = styled.button`
  border-radius: 8px;
  font-size: 24px;
  margin-top: 16px;
  padding: 8px 16px;
`;

// Component Definition
function App() {
  const [value, setValue] = useState('');
  const [attempts, setAttempts] = useState([]);
  // const [hasResult, setHasResult] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  // const [isInSequence, setIsInSequence] = useState('');

  function handleSetValue(e) {
    setValue(e.target.value);
  }

  function handleSetIsLoading(currentLoadingValue) {
    setIsLoading(currentLoadingValue);
  }

  // function handleSetIsInSequence() {

  // }

  function handleSubmitFib(e) {
    e.preventDefault();

    handleSetIsLoading(true);
  }

  return (
    <Main>
      <Header>
        <Title>No Fibbing</Title>
      </Header>
      <Section>
        <Paragraph>
          Try a number to check if it's in the Fibonacci sequence.
        </Paragraph>
        <Form onSubmit={handleSubmitFib}>
          <label>
            <Input
              onChange={handleSetValue}
              placeholder="Try a number"
              type="number"
              value={value}
            />
          </label>
          <Button disabled={isLoading}>Let's try it</Button>
        </Form>
        {attempts.length > 0 && (
          <div>
            {attempts.map(a => {
              return (
                <div>
                  <Paragraph>{a.number}</Paragraph>
                  <Paragraph>{a.result}</Paragraph>
                </div>
              );
            })}
          </div>
        )}
      </Section>
    </Main>
  );
}

export default App;
