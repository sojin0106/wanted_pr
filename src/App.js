import './App.css';
import styled from "styled-components";
import Tab from './components/Tab';
import Toggle from './components/Toggle';
import Input from './components/Input';

function App() {
  return (
    <div className="App">
      <Wrap>
        <Toggle></Toggle>
        <Tab></Tab>
        <Input></Input>
      </Wrap>
    </div>
  );
}

const Wrap = styled.div`
  width: 100%;
  margin: auto;

`

export default App;
