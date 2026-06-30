import { Toaster } from 'react-hot-toast';
import { Layout } from 'antd';
import { Form, Input, Button } from 'antd';
import { Table } from 'antd';
import { Modal } from 'antd';
import { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Lap1 from './lap/lap1';
function App() {
  const { Header, Content, Footer, Sider } = Layout;
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
      <nav>
        <Link to="/">Home</Link> |<Link to="/lap1">Lap1</Link>
      </nav>

      <Routes>
        <Route path="/lap1" element={<Lap1></Lap1>} />
      </Routes>

      <nav className="bg-blue-600 text-white shadow">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="#" className="text-xl font-semibold">
            <strong>WEB2091 App</strong>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="#" className="hover:text-gray-200">
              Trang chủ
            </Link>
            <Link to="/list" className="hover:text-gray-200">
              Danh sách
            </Link>
            <Link to="/add" className="hover:text-gray-200">
              Thêm mới
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <Link to="#" className="hover:text-gray-200">
              Đăng nhập
            </Link>
            <Link to="#" className="hover:text-gray-200">
              Đăng ký
            </Link>
          </div>
        </div>
      </nav>

      {/* MAIN CONTENT */}
      <div className="max-w-6xl mx-auto mt-10 px-4 text-center">
        <h1 className="text-4xl font-bold mb-4">Chào mừng đến với WEB2091</h1>
        <Button>Login</Button>
        <Button type="primary">Login</Button>
        <Button type="text">text</Button>
        <Button type="link">Link</Button>
        <Layout>
          <Header style={{ color: 'white' }}>Header</Header>
          <Content style={{ padding: 20 }}>Content</Content>
          <Footer>Footer</Footer>
        </Layout>
        <Form onFinish={onFinish}>
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
              Login
            </Button>
          </Form.Item>
        </Form>
        <Table columns={columns} dataSource={data} />
        <>
          <Button onClick={() => setOpen(true)}>Open</Button>

          <Modal open={open} onCancel={() => setOpen(false)} onOk={() => setOpen(false)}>
            Nội dung modal
          </Modal>
        </>
      </div>
      <Toaster />
    </>
  );
}

export default App;
