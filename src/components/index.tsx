import "./index.less";
import React from "react";
import { Button, Form } from "antd";
import { LinkOutlined } from "@ant-design/icons";
import { FormInstance } from "antd/lib/form";

interface ComponentProp {
    form: FormInstance<any>;
}

const Component: React.FC<ComponentProp> = ({ form }) => {
    return (
        <Form form={form}>
            <Button type="primary" icon={<LinkOutlined />}>
                Hello
            </Button>
        </Form>
    );
};

export default Component;
