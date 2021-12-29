import React, { createContext } from "react";
import { Table, Tag, Radio, Space } from "antd";
import { useContext } from "react";
import { UserState } from "./model";
import Draw from "./Draw";





const UserTable = () => {
  const { data, visible, setVisible } = useContext(UserState);

  const columns = [
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "LastName",
      dataIndex: "lastName",
      key: "lastName",
    },
    {
      title: "Mobile",
      dataIndex: "mobile",
      key: "mobile",
    },
    {
      title: "Tags",
      key: "tags",
      dataIndex: "tags",
      render(status, record) {
        const color = status === "Active" ? "green" : "orange";
        return {
          children: <Tag color={color}>{status}</Tag>,
        };
      },
    },
    {
      title: "Department",
      dataIndex: "department",
      key: "mobile",
    },
  ];

  return (
    <>
      <Table columns={columns} dataSource={data} pagination={3} />
      <Draw />
    </>
  );
};

export default UserTable;
