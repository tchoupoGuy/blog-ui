import React, { useMemo } from "react";
import { Card, Avatar } from "antd";
// import {
//   EditOutlined,
//   EllipsisOutlined,
//   SettingOutlined
// } from "@ant-design/icons";

import { useAuthFlow } from "../../modules/authentication/use-auth-flow";
// import Title from "../../components/typography/title";
import SignInForm from "../../modules/authentication/components/sign-in";
import NewPasswordForm from "../../modules/authentication/components/new-password";
import { AuthStatus } from "../../modules/authentication/types";

export default function Authentication() {
  const { authStatus, handleNewPasswordChange, handleSignIn } = useAuthFlow();

  const AuthComponent = useMemo(() => {
    switch (authStatus) {
      case AuthStatus.NO_AUTH:
        return <SignInForm onSubmit={handleSignIn} />;
      case AuthStatus.NEEDS_PASSWORD_CHANGE:
        return <NewPasswordForm onSubmit={handleNewPasswordChange} />;
    }
  }, [authStatus, handleNewPasswordChange, handleSignIn]);
  const { Meta } = Card;

  return (
    <React.Fragment>

      <Card
        style={{ width: "50%", margin: "15% 25%" }}
        // cover={
        //   <img
        //     alt="example"
        //     src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
        //   />
        // }
        // actions={[
        //   <SettingOutlined key="setting" />,
        //   <EditOutlined key="edit" />,
        //   <EllipsisOutlined key="ellipsis" />
        // ]}
      >
        <Meta
          avatar={
            <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
          }
          title="GUY BLOG"
          description="This is the description"
        />
        <Card.Grid hoverable={false} style={{ width: "50%", margin: "0 25%" }}>
          {AuthComponent}
        </Card.Grid>
      </Card>
  
      {/* <div className="flex flex-col h-screen justify-center items-center">
        <Title level={2}>GUY BLOG</Title>
      <div className="w-11/12 max-w-sm">{AuthComponent}</div>
      </div> */}
    </React.Fragment>
  );
}
