import React from "react";
import { Card, Form } from "antd";
import DefaultComponent from "./components";
import { hot } from "react-hot-loader/root";

const MainComponent = () => {
    const [form] = Form.useForm<{}>();
    return (
        <Card style={{ margin: "20px auto", width: 600, borderRadius: 4 }}>
            <DefaultComponent form={form} />
        </Card>
    );
};

export default hot(MainComponent);
