import { Wrapper, WrapperButton } from './styles/styles';
import Button from './components/Button';
import Table from './components/Table';
import { users } from './data/users';
import { useState } from 'react';

function App() {
  const [selectTheme, setSelectTheme] = useState('');

  return (
    <Wrapper>
      <h1>Interview 5</h1>
      <WrapperButton>
        <Button type="filter" />
        <Button type="sort" />
        <Button type="theme" setTheme={setSelectTheme} theme={selectTheme} />
      </WrapperButton>
      <Table data={users} theme={selectTheme} />
    </Wrapper>
  );
}

export default App;
