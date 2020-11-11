import React, { FC, useState } from 'react';
import { Input  } from 'antd';

const { Search } = Input;

const Main: FC = () => {
  const [cities, setCities] = useState<any>([]);

  const onSearch = value => setCities(prev => [...prev, value]);

  return (
    <div>
      <Search placeholder="input search text" onSearch={onSearch} enterButton />
      <ul>
        {cities.map(item => <li key={item}>{item}</li>)}
      </ul>
    </div>
  )
}

export default Main;
