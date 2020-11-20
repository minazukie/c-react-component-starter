import "./index.less";
import React from "react";
import { Button } from "antd";

interface ComponentProp {
    form: any;
}

const Component: React.FC<ComponentProp> = ({ form }) => {
    return (
        <div>
            <Button type="primary">Hello</Button>
        </div>
    );
};

export default Component;
