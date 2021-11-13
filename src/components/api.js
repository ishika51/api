import React, { useState, useEffect } from 'react';
import { Table, Tag, Space, Pagination } from 'antd';
// import "./css/style.css";
const Tempapp = () => {
  const [data, setData] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);
  useEffect(() => {
    const fetchApi = async () => {
      const url = `https://reqres.in/api/users?page=${pageNumber}`;
      const response = await fetch(url);
      const resJson = await response.json();
      setData(resJson.data);
    }
    fetchApi();
  }, [pageNumber])

  const columns = [
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'First Name',
      dataIndex: 'first_name',
      key: 'first_name',
    },
    {
      title: 'Last Name',
      dataIndex: 'last_name',
      key: 'last_name',
    },
  ]

  return (
    <>
      <div>
        <Table columns={columns} dataSource={data} />
        <Pagination pageSize={6} defaultCurrent={1} total={12} onChange={() => {
          pageNumber === 1 ? setPageNumber(2) : setPageNumber(1) 
        }} />
      </div>
    </>
  )
}

export default Tempapp
