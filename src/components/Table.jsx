import { useEffect, useState } from 'react';
import { TableMarkup } from '../styles/styles';
import { themes } from '../data/themes';

function Table({ data, theme }) {
  const [themeCurrent, setThemeCurrent] = useState({});

  useEffect(() => {
    const newTheme = themes.find((o) => o.name === theme);
    setThemeCurrent(newTheme);
  }, [theme]);

  return (
    <TableMarkup themeCurrent={themeCurrent}>
      <thead>
        <tr>
          <th>id</th>
          <th>email</th>
          <th>status married</th>
          <th>programing</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, idx) => (
          <tr key={idx}>
            <td>{item.id}</td>
            <td>{item.email}</td>
            <td>{item.isMarried.toString()}</td>
            <td>{item.programmingLanguages.join(', ')}</td>
          </tr>
        ))}
      </tbody>
    </TableMarkup>
  );
}

export default Table;
