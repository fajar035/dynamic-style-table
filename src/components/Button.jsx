import { useState } from 'react';
import { BtnFilter, BtnSort, BtnTheme } from '../styles/styles';

function Button({ filter, sort, theme }) {
  const [isOpenFilter, setIsOpenFilter] = useState(false);
  const [isOpenSort, setIsOpenSort] = useState(false);
  const [isOpenTheme, setIsOpenTheme] = useState(false);

  if (filter)
    return (
      <BtnFilter
        isOpenFilter={isOpenFilter}
        onClick={() => setIsOpenFilter(!isOpenFilter)}>
        Filter
        <div>
          <p>Filter</p>
        </div>
      </BtnFilter>
    );
  if (sort)
    return (
      <BtnSort
        isOpenSort={isOpenSort}
        onClick={() => setIsOpenSort(!isOpenSort)}>
        Sort
        <div>
          <p>ID</p>
          <p>EMAIL</p>
        </div>
      </BtnSort>
    );
  if (theme)
    return (
      <BtnTheme
        isOpenTheme={isOpenTheme}
        onClick={() => setIsOpenTheme(!isOpenTheme)}>
        Theme
        <div>
          <p onClick={() => alert('tema terang')}>Light</p>
          <p>Dark</p>
        </div>
      </BtnTheme>
    );
}

export default Button;
