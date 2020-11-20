import "./index.less";
import React from "react";
import { Button } from "antd";
import { LinkOutlined } from "@ant-design/icons";

interface ComponentProp {
    form: any;
}

const Component: React.FC<ComponentProp> = ({ form }) => {
    return (
        <div>
            <Button type="primary" icon={<LinkOutlined />}>
                Hello
            </Button>
        </div>
    );
};

export default Component;
