import { Button, Image, Space, Table } from 'antd';

const Lap2 = () => {
  const columns = [
    { title: 'ID', dataIndex: 'id' },
    { title: 'Name', dataIndex: 'name' },
    { title: 'Avata', dataIndex: 'avatar', render: (value: String) => <Image src={value} /> },
    {
      title: 'Action',
      render: (_: any, record: any) => (
        <Space>
          <Button type="primary">Edit</Button>
          <Button color="danger">Delete</Button>
        </Space>
      ),
    },
  ];
  const dataSouce = [
    { key: 1, id: 1, name: 'hao', avatar: 'https://i.pravatar.cc/150' },
    { key: 2, id: 2, name: 'hao2', avatar: 'https://i.pravatar.cc/150' },
  ];
  //   bai1
  const StudentsColumns = [
    { title: 'ID', dataIndex: 'id' },
    { title: 'Name', dataIndex: 'name' },
    { title: 'Age   ', dataIndex: 'age' },
    { title: 'Major', dataIndex: 'major' },
  ];
  const dataStudentsSouce = [
    { key: 1, id: 1, name: 'Le Quoc Hao', age: 20, major: 'IT' },
    { key: 2, id: 2, name: 'Le Quoc Hao2', age: 20, major: 'Business' },
    { key: 3, id: 3, name: 'Le Quoc Hao3', age: 20, major: 'Degign' },
    { key: 4, id: 4, name: 'Le Quoc Hao4', age: 20, major: 'Boss' },
  ];
  // bai2
  const ProductColumns = [
    { title: 'ID', dataIndex: 'id' },
    { title: 'Product Name', dataIndex: 'ProductName' },
    { title: 'Price', dataIndex: 'Price' },
    { title: 'Category', dataIndex: 'Category' },
  ];
  const dataProducts = [
    { key: 1, id: 1, ProductName: 'san pham 1', Price: 10000, Category: 'Danh muc 1' },
    { key: 1, id: 2, ProductName: 'san pham 2', Price: 10000, Category: 'Danh muc 2' },
    { key: 1, id: 3, ProductName: 'san pham 3', Price: 10000, Category: 'Danh muc 3' },
    { key: 1, id: 4, ProductName: 'san pham 4', Price: 10000, Category: 'Danh muc 4' },
    { key: 1, id: 5, ProductName: 'san pham 5', Price: 10000, Category: 'Danh muc 5' },
  ];
  //bai 3
  const UserColumns = [
    { title: 'ID', dataIndex: 'id' },
    { title: 'Name', dataIndex: 'Name' },
    { title: 'Email', dataIndex: 'Email' },
    {
      title: 'Status',
      dataIndex: 'Status',
      render: (Status: any) => (
        <span style={{ color: Status === 'Active' ? 'green' : 'red' }}>{Status}</span>
      ),
    },
    {
      title: 'Action',
      dataIndex: 'Action',
      render: (_: any, record: any) => (
        <Space>
          <Button type="primary">Edit</Button>
          <Button color="danger">Delete</Button>
        </Space>
      ),
    },
  ];
  const dataUser = [
    { key: 1, Name: 'Hao', Email: 'lehao123@gmail.com', Status: 'Active' },
    { key: 1, Name: 'Hao2', Email: 'lehao123@gmail.com', Status: 'InActive' },
    { key: 1, Name: 'Hao3', Email: 'lehao123@gmail.com', Status: 'InActive' },
    { key: 1, Name: 'Hao4', Email: 'lehao123@gmail.com', Status: 'Active' },
    { key: 1, Name: 'Hao5', Email: 'lehao123@gmail.com', Status: 'Active' },
  ];
  return (
    <>
      <Table columns={columns} dataSource={dataSouce}></Table>
      <Table columns={StudentsColumns} dataSource={dataStudentsSouce}></Table>
      <Table
        columns={ProductColumns}
        dataSource={dataProducts}
        pagination={{ pageSize: 3 }}
      ></Table>
      <Table columns={UserColumns} dataSource={dataUser}></Table>
    </>
  );
};
export default Lap2;
