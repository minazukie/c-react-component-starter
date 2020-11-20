import React from "react";
import { Card, Form } from "antd";
import DefaultComponent from "./components";
import { hot } from "react-hot-loader/root";

const MainComponent = () => {
    const [form] = Form.useForm<{}>();
    return (
        <Card
            title="Demo"
            style={{
                margin: "20px auto",
                width: 600,
                borderRadius: 4,
                boxShadow: "rgba(91, 100, 118, 0.21) 0px 0px 25px",
            }}
        >
            <DefaultComponent form={form} />
        </Card>
    );
};

export default hot(MainComponent);
