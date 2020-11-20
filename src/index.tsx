import React from "react";
import { Card, Form } from "antd";
import ReactDOM from "react-dom";
import App from "./components";

const Main = () => {
    const [form] = Form.useForm<{}>();
    return (
        <Card style={{ margin: "20px auto", width: 600, borderRadius: 4 }}>
            <App form={form} />
        </Card>
    );
};

ReactDOM.render(<Main />, document.getElementById("root"));
