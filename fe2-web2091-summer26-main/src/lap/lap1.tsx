import { Toaster } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { Layout } from 'antd';
import { Form, Input, Button } from 'antd';
import { Table } from 'antd';
import { Modal } from 'antd';
import { useState } from 'react';
import Lap2 from './lap2';
const lap1 = () => {
  const { Header, Content, Sider } = Layout;
  const onFinish = (values: any) => {
    console.log(values);
  };
  const columns = [
    { title: 'Name', dataIndex: 'name' },
    { title: 'Email', dataIndex: 'email' },
    { title: 'Role', dataIndex: 'role' },
  ];

  const data = [
    { key: 1, name: 'John', email: 'lehao123@gmail.com', role: 'admin' },
    { key: 2, name: 'Anna', email: 'lehao123@gmail.com', role: 'user' },
  ];
  const [open, setOpen] = useState(false);
  return (
    <>
      <Layout>
        <Header style={{ color: 'white' }}>Header</Header>
        <Layout>
          <Sider width={220} style={{ color: 'white' }}>
            Sidebar
          </Sider>
          <Content style={{ padding: 20 }}>Content</Content>
        </Layout>
      </Layout>

      <Form onFinish={onFinish}>
        <label htmlFor="">Nhập Name</label>
        <Form.Item name="name" rules={[{ required: true, message: 'Nhập email' }]}>
          <Input placeholder="name" />
        </Form.Item>
        <label htmlFor="">Nhập email</label>
        <Form.Item name="email" rules={[{ required: true, message: 'Nhập email' }]}>
          <Input placeholder="Email" />
        </Form.Item>
        <label htmlFor="">Nhập password</label>
        <Form.Item name="password" rules={[{ required: true, message: 'Nhập password' }]}>
          <Input placeholder="Password" />
        </Form.Item>

        <Form.Item>
          <Button htmlType="submit" type="primary">
            Register
          </Button>
        </Form.Item>
      </Form>

      <Table columns={columns} dataSource={data} />

      <>
        <Button onClick={() => setOpen(true)}>AddUser</Button>

        <Modal open={open} onCancel={() => setOpen(false)} onOk={() => setOpen(false)}>
          <Form onFinish={onFinish}>
            <label htmlFor="">Name</label>
            <Form.Item name="name" rules={[{ required: true, message: 'Nhập email' }]}>
              <Input placeholder="name" />
            </Form.Item>
            <label htmlFor="">Age</label>
            <Form.Item name="Age" rules={[{ required: true, message: 'Nhập tuoi' }]}>
              <Input placeholder="Age" />
            </Form.Item>
            <label htmlFor="">Email</label>
            <Form.Item name="Email" rules={[{ required: true, message: 'Nhập email' }]}>
              <Input placeholder="Email" />
            </Form.Item>

            <Form.Item>
              <Button htmlType="submit" type="primary">
                Save
              </Button>
            </Form.Item>
          </Form>
        </Modal>
        <Lap2></Lap2>
      </>
    </>
  );
};
export default lap1;
