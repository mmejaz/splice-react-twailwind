import React, { useState } from "react";
import { Card, Col, Row, Tabs, Form, Input, Select, Button, message, Upload } from "antd";
import {
    SettingOutlined,
    UserOutlined,
    LockOutlined,
    UploadOutlined,
    CameraFilled
} from "@ant-design/icons";

const { Option } = Select;

const Index = () => {
  const [activeKey, setActiveKey] = useState("1");

  const onChange = (key) => {
      setActiveKey(key);
      console.log(key);
  };

  const props = {
    name: 'file',
    action: 'https://660d2bd96ddfa2943b33731c.mockapi.io/api/upload',
    headers: {
      authorization: 'authorization-text',
    },
    onChange(info) {
      if (info.file.status !== 'uploading') {
        console.log(info.file, info.fileList);
      }
      if (info.file.status === 'done') {
        message.success(`${info.file.name} file uploaded successfully`);
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`);
      }
    },
  };

    return (
        <>
            <Row gutter={[16, 16]} className="flex justify-start mt-5">
                <Col xs={24} sm={24} md={24} lg={24}>
                    <h3 className="mb-1 ml-2 text-lg">Profile</h3>
                </Col>
            </Row>

            <Row gutter={[16, 16]} className="flex justify-start mt-5">
                <Col xs={24} sm={12} md={24} lg={24} className="ml-2">
                    <Tabs defaultActiveKey="1" onChange={onChange}>
                        <Tabs.TabPane
                            tab={
                                <span>
                                    <UserOutlined /> Profile
                                </span>
                            }
                            key="1"
                        />
                        <Tabs.TabPane
                            tab={
                                <span>
                                    <SettingOutlined /> Account Settings
                                </span>
                            }
                            key="2"
                        />
                        <Tabs.TabPane
                            tab={
                                <span>
                                    <LockOutlined /> Password
                                </span>
                            }
                            key="3"
                        />
                        <Tabs.TabPane
                            tab={
                                <span>
                                    <UserOutlined /> Role
                                </span>
                            }
                            key="4"
                        />
                        <Tabs.TabPane
                            tab={
                                <span>
                                    <SettingOutlined /> Settings
                                </span>
                            }
                            key="5"
                        />
                    </Tabs>
                </Col>
            </Row>

            <Row gutter={[16, 16]} className="flex justify-start mt-5">
                <Col xs={24} sm={24} md={24} lg={24} className="ml-2">
                    {activeKey === "1" && (
                        <Row gutter={16}>
                          <Col xs={24} sm={24} md={24} lg={6} className="profile-card">
                            <Card
                                actions={[
                                  <div className="bg-sp-dark text-white pb-2">
                                    <h3 className="flex justify-center pt-2">Emily Davis</h3>
                                    <h5 className="flex justify-center" style={{marginTop: "-20px"}}>Admin</h5>
                                  </div>
                                ]}
                            >
                              <div className="flex justify-center">
                                <img src="../.../../img/thumb-6.jpg" className="w-[100px] h-[100px] rounded-full mb-3 mt-3" />
                              </div>
                              <div className="flex justify-center" style={{marginTop: "-30px"}}>
                              <CameraFilled className="w-[50] h-[50] bg-black text-white p-2 rounded-full" />
                              </div>
                            </Card>
                          </Col>
                          <Col xs={24} sm={24} md={24} lg={18}>
                            <Card>
                                <Row gutter={16} className="mt-4 mb-2">
                                  <Col span={12}>
                                      <div className="font-semibold mb-2">Username</div>
                                      <Input className="rounded" placeholder="Emily Davis" />
                                  </Col>
                                  <Col span={12}>
                                      <div className="font-semibold mb-2">Email Address</div>
                                      <Input className="rounded" placeholder="Emili_davis@gmail.com" />
                                  </Col>
                                </Row>
                                <Row gutter={16} className="mt-5 mb-1">
                                  <Col span={12}>
                                      <div className="font-semibold mb-2">Phone No.</div>
                                      <Input className="rounded" placeholder="(920 765-7576)" />
                                  </Col>
                                  <Col span={12}>
                                      <div className="font-semibold mb-2">Account Type</div>
                                      <Input className="rounded" placeholder="Admin" />
                                  </Col>
                                </Row>
                            </Card>
                          </Col>
                        </Row>
                    )}
                    {activeKey === "2" && (
                        <Row gutter={16}>
                          <Col xs={24} sm={24} md={24} lg={24} className="general-card">
                            <Card
                              bordered={false}
                              title="General Settings"
                              className="h-[360px]"
                            >
                              <Row gutter={16}>
                                <Col span={6}>
                                    <div className="font-semibold mb-2">Company Logo</div>
                                    <Input className="rounded" placeholder="Splice logo.jpeg" />
                                </Col>
                                <Col span={6}>
                                    <div className="font-semibold mb-2">Contact Email</div>
                                    <Input className="rounded" placeholder="support@gmail.com" />
                                </Col>
                                <Col span={6}>
                                    <div className="font-semibold mb-2">Phone No.</div>
                                    <Input className="rounded" placeholder="+1 (904) 783-3283" />
                                </Col>
                                <Col span={6}>
                                    <div className="font-semibold mb-2">Whatsapp No.</div>
                                    <Input className="rounded" placeholder="+1 (904) 783-3283" />
                                </Col>
                              </Row>
                              <Row gutter={16} className="mt-5">
                                <Col span={12}>
                                      <div className="font-semibold mb-2">Business Hours</div>
                                      <Input className="rounded" placeholder="Business hours: Mon to Fri 9:00 Am - 6:00 Pm US EST" />
                                  </Col>
                              </Row>
                            </Card>
                          </Col>
                        </Row>
                    )}
                    {activeKey === "3" && (
                        <Form layout="vertical">
                            <Form.Item label="Current Password" name="currentPassword">
                                <Input.Password placeholder="Enter current password" />
                            </Form.Item>
                            <Form.Item label="New Password" name="newPassword">
                                <Input.Password placeholder="Enter new password" />
                            </Form.Item>
                            <Form.Item label="Confirm Password" name="confirmPassword">
                                <Input.Password placeholder="Confirm new password" />
                            </Form.Item>
                            <Form.Item>
                                <Button type="primary">Change Password</Button>
                            </Form.Item>
                        </Form>
                    )}
                    {activeKey === "4" && (
                        <div>
                            <p>Manage your role and permissions here.</p>
                        </div>
                    )}
                    {activeKey === "5" && (
                        <div>
                            <p>General application settings.</p>
                        </div>
                    )}
                </Col>
            </Row>
        </>
    );
};

export default Index;
