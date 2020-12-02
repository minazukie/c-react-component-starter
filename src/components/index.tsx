import "./index.css";
import "./index.less";
import React from "react";
import { Button, Form } from "antd";
import { LinkOutlined } from "@ant-design/icons";
import { FormInstance } from "antd/lib/form";

interface ComponentProp {
    form: FormInstance;
    initialValues?: any;
    metadata?: any;
    onFinish: (value: any) => void;
    onFinishFailed?: (err: any) => void;
    configPackages?: any[];
}

const Component: React.FC<ComponentProp> = ({ form, initialValues, onFinish, onFinishFailed }) => {
    return (
        <Form initialValues={initialValues} form={form} onFinish={onFinish} onFinishFailed={onFinishFailed}>
            <Button type="primary" icon={<LinkOutlined />}>
                Hello
            </Button>
        </Form>
    );
};

export default Component;
