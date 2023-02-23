import { useState } from 'react';
import { themes } from '../data/themes';
import { BtnFilter, BtnSort, BtnTheme } from '../styles/styles';

function Button({ type, theme, setTheme }) {
  const [isOpenFilter, setIsOpenFilter] = useState(false);
  const [isOpenSort, setIsOpenSort] = useState(false);
  const [isOpenTheme, setIsOpenTheme] = useState(false);

  if (type === 'filter')
    return (
      <BtnFilter
        isOpenFilter={isOpenFilter}
        onClick={() => setIsOpenFilter(!isOpenFilter)}>
        Filter
        <div>
          <form
            onChange={(e) => {
              console.log(e.target.value);
            }}>
            <input name="filter" type="radio" id="email" value="email" />
            <label htmlFor="email">Email</label>
            <input name="filter" type="radio" id="program" value="program" />
            <label htmlFor="program">Program</label>
          </form>
        </div>
      </BtnFilter>
    );
  if (type === 'sort')
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
  if (type === 'theme')
    return (
      <BtnTheme
        isOpenTheme={isOpenTheme}
        onClick={() => setIsOpenTheme(!isOpenTheme)}>
        Theme
        <div>
          {themes.map((theme, idx) => (
            <p key={idx} onClick={() => setTheme(theme.name)}>
              {theme.name}
            </p>
          ))}
        </div>
      </BtnTheme>
    );
}

export default Button;
