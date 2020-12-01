import React from "react";
import { Button, Card, ConfigProvider, Form, Space } from "antd";
import { hot } from "react-hot-loader/root";
import DefaultComponent from "./components";

const MainComponent = () => {
    const [form] = Form.useForm<{}>();
    return (
        <ConfigProvider autoInsertSpaceInButton={false}>
            <Card
                headStyle={{ padding: 0 }}
                title={
                    <div style={{ display: "flex", alignContent: "center", padding: "0 20px" }}>
                        <div style={{ marginTop: 3 }}>Demo</div>
                        <div style={{ flex: 1 }} />
                        <Space>
                            <Button>关闭</Button>
                            <Button
                                type="primary"
                                onClick={() => {
                                    form.submit();
                                }}
                            >
                                保存
                            </Button>
                        </Space>
                    </div>
                }
                style={{
                    margin: "20px auto",
                    width: 800,
                    borderRadius: 4,
                    boxShadow: "rgba(91, 100, 118, 0.21) 0px 0px 25px",
                }}
            >
                <DefaultComponent
                    form={form}
                    onFinish={(value) => {
                        console.log(value);
                    }}
                />
            </Card>
        </ConfigProvider>
    );
};

export default hot(MainComponent);
