import React, { useState } from "react";
import { Drawer, Form, Button, Col, Row, Input, Select, message, Upload } from "antd";
import { UploadOutlined, PlusCircleOutlined, MinusCircleOutlined } from '@ant-design/icons';

const { Option } = Select;

const AddPackageDrawer = ({ visible, onClose }) => {

    const [items, setItems] = useState([{ item: "", quantity: "" }]);

    const addItem = () => {
        setItems([...items, { item: "", quantity: "" }]);
    };

    const removeItem = (index) => {
        const newItems = items.filter((_, i) => i !== index);
        setItems(newItems);
    };

    const handleInputChange = (index, field, value) => {
        const newItems = [...items];
        newItems[index][field] = value;
        setItems(newItems);
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

    const handleFinish = (values) => {
        console.log('Form Values:', values);
        console.log('Items:', items);
    };

    return (
        <Drawer
            title={
                <div className="drawer-title text-center text-white py-2" style={{ backgroundColor: "rgb(1 98 205)" }}>
                    Incoming Package
                </div>
            }
            width={900}
            onClose={onClose}
            visible={visible}
            bodyStyle={{ paddingBottom: 80, backgroundColor: '#01150c' }}
        >
            <Form layout="vertical" hideRequiredMark className="packages-form" onFinish={handleFinish}>
                <Row gutter={16}>
                    <Col span={12}>
                        <Form.Item
                            name="vendor"
                            label={<span className="text-white">Vendor Name</span>}
                            rules={[{ required: true, message: 'Please enter Vendor Name' }]}
                        >
                            <Input className="bg-transparent border input-border text-white" placeholder="Please enter Vendor Name" />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            name="warehouse"
                            label={<span className="text-white">Warehouse</span>}
                            rules={[{ required: true, message: 'Please select warehouse' }]}
                        >
                            <Select bordered={false} className="bg-transparent border input-border select-input text-white h-[42px]">
                                <Option value="ware">Select Warehouse</Option>
                            </Select>
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col span={12}>
                        <Form.Item
                            name="tracking"
                            label={<span className="text-white">Tracking Number</span>}
                            rules={[{ required: true, message: 'Please enter Tracking Number' }]}
                        >
                            <Input className="bg-transparent border input-border text-white" placeholder="Please enter Tracking Number" />
                        </Form.Item>
                    </Col>
                    <Col span={12}>
                        <Form.Item
                            name="tracking-link"
                            label={<span className="text-white">Tracking Link</span>}
                            rules={[{ required: true, message: 'Please enter Tracking Link' }]}
                        >
                            <Input className="bg-transparent border input-border text-white" placeholder="Please enter Tracking Link" />
                        </Form.Item>
                    </Col>
                </Row>
                <Row gutter={16}>
                    <Col span={24}>
                        <Form.Item
                            name="upload"
                            label={<span className="text-white">Upload Invoice</span>}
                            rules={[{ required: true, message: 'Please choose file' }]}
                        >
                            <Upload {...props}>
                                <Button className="w-[850px] bg-transparent border input-border text-white rounded-none mb-2" icon={<UploadOutlined />}>Click to Upload</Button>
                            </Upload>
                            <span className="text-note text-sm mt-2">Files only in JPG, JPEG, or PNG format up to 2 MB size limits are allowed to upload.</span>
                        </Form.Item>
                    </Col>
                </Row>
                {items.map((item, index) => (
                    <Row gutter={16} key={index} className="mb-4">
                        <Col span={16}>
                            <Form.Item
                                label={<span className="text-white">Item Name</span>}
                                key={`item-${index}`}
                                rules={[{ required: true, message: 'Please enter Item Name' }]}
                            >
                                <Input
                                    value={item.item}
                                    onChange={(e) => handleInputChange(index, "item", e.target.value)}
                                    className="bg-transparent border input-border text-white"
                                    placeholder="Please enter Item Name"
                                />
                            </Form.Item>
                        </Col>
                        <Col span={6}>
                            <Form.Item
                                label={<span className="text-white">Quantity</span>}
                                key={`quantity-${index}`}
                                rules={[{ required: true, message: 'Please enter Quantity' }]}
                            >
                                <Input
                                    value={item.quantity}
                                    onChange={(e) => handleInputChange(index, "quantity", e.target.value)}
                                    className="bg-transparent border input-border text-white"
                                    placeholder="Please enter Quantity"
                                />
                            </Form.Item>
                        </Col>
                        <Col span={2} className="flex items-center justify-center mt-1">
                            {index === items.length - 1 ? (
                                <Button
                                    className="w-[40px] h-[40px] bg-white rounded-none"
                                    onClick={addItem}
                                >
                                    <PlusCircleOutlined style={{ fontSize: '24px' , marginLeft: '-7px' }} />
                                </Button>
                            ) : (
                                <Button
                                    className="w-[40px] h-[40px] bg-white rounded-none"
                                    onClick={() => removeItem(index)}
                                >
                                    <MinusCircleOutlined style={{ fontSize: '24px', marginLeft: '-7px' }} />
                                </Button>
                            )}
                        </Col>
                    </Row>
                ))}
                <Row gutter={16}>
                    <Col span={24}>
                        <Form.Item>
                            <Button className="mr-3 border-0 text-white button-submit" htmlType="submit">
                                Submit
                            </Button>
                            <Button type="default" className="border-0 text-white button-clear" onClick={onClose}>
                                Clear
                            </Button>
                        </Form.Item>
                    </Col>
                </Row>
            </Form>
        </Drawer>
    );
};

export default AddPackageDrawer;
