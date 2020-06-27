import React from "react";
import { Menu } from "antd";
import { UserOutlined, PlusOutlined } from "@ant-design/icons";

import Link from "../../components/link";
import { Route } from "../../constants/routes";

interface LayoutMenuProps {
  items: {
    Icon: React.FC;
    link: string;
    title: string;
  }[];
}

function LayoutMenu({ items = [] }: LayoutMenuProps) {
  // const { pathname } = useRouter();

  // // Extracts the first url chunk: /users/manage/userId -> users
  // const [selectedKey] = pathname.substring(1).split('/');

  return (
    <Menu theme="dark" mode="inline">
      {items.map(({ Icon, link, title }) => (
        <Menu.Item key={link} icon={<Icon />}>
          <Link to={link}>{title}</Link>
        </Menu.Item>
      ))}
      {/* <Menu.Item onClick={() => Auth.signOut()}>Sign out</Menu.Item> */}
    </Menu>
  );
}

export default () =>
  LayoutMenu({
    items: [
      {
        Icon: UserOutlined,
        link: Route.ABOUT,
        title: "About"
      },
      {
        Icon: PlusOutlined,
        link: Route.RESOURCES,
        title: "Resources"
      }
    ]
  });
