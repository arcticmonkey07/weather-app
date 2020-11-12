import React, { FC } from 'react';
import { Table, Badge, Menu, Dropdown, Space } from 'antd';
import { DownOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from 'react-redux';

const menu = (
  <Menu>
    <Menu.Item>Action 1</Menu.Item>
    <Menu.Item>Action 2</Menu.Item>
  </Menu>
);

const Forecast: FC = () => {
  const cities = useSelector((state: any) => state.cities);

  const expandedRowRender = () => {
    const columns = [
      { title: 'Date', dataIndex: 'date', key: 'date' },
      { title: 'Name', dataIndex: 'name', key: 'name' },
      { title: 'Status', key: 'state', dataIndex: 'status' },
      { title: 'Upgrade Status', dataIndex: 'upgradeNum', key: 'upgradeNum' },
    ];

    const data = [];
    for (let i = 0; i < 1; ++i) {
      data.push({
        key: i,
        date: '2014-12-24 23:12:00',
        name: 'This is production name',
        upgradeNum: 'Upgraded: 56',
        status: 'asdf'
      });
    }
    return <Table columns={columns} dataSource={data} pagination={false} />;
  };

  const columns = [
    { title: 'City', dataIndex: 'city', key: 'city' },
  ];

  const data = [];
  for (let i = 0; i < cities.length; ++i) {
    data.push({
      key: i,
      city: cities[i].cityName,
    });
  }

  return (
    <Table
      className="components-table-demo-nested"
      columns={columns}
      expandable={{ expandedRowRender }}
      dataSource={data}
    />
  );
};

export default Forecast;
