import React from "react";
import { useRouter } from "next/router";
import { item } from "@/styles/page.css";

import { layout } from "./Layout.css";

type Props = {
  children?: React.ReactNode;
};

function HomeLayout({ children }: Props) {
  return <main className={item}>{children}</main>;
}

function D2gaLayout({ children }: Props) {
  return <main className={layout}>{children}</main>;
}

function GeneralLayout({ children }: Props) {
  return <main className={item}>{children}</main>;
}

export default function Layout({ children }: Props) {
  const pathname = useRouter().pathname;

  if (pathname === "/") {
    return <HomeLayout>{children}</HomeLayout>;
  } else if (pathname === "/d2ga/END") {
    return <GeneralLayout>{children}</GeneralLayout>;
  } else if (pathname === "/404") {
    return <HomeLayout>{children}</HomeLayout>;
  } else {
    return <D2gaLayout>{children}</D2gaLayout>;
  }
}
