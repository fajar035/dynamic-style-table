import { Wrapper, WrapperButton } from './styles/styles';
import Button from './components/Button';
import Table from './components/Table';
import { users } from './data/users';

function App() {
  return (
    <Wrapper>
      <h1>Interview 5</h1>
      <WrapperButton>
        <Button filter />
        <Button sort />
        <Button theme />
      </WrapperButton>
      <Table data={users} />
    </Wrapper>
  );
}

export default App;
