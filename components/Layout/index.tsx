import React from "react";
import { useRouter } from "next/router";
import { item } from "@/styles/page.css";
import AudioButton from "@/components/AudioButton";

import { layout, container, subGrid } from "./Layout.css";

type Props = {
  children?: React.ReactNode;
};

function D2gaLayout({ children }: Props) {
  return (
    <main className={container}>
      <div className={item}>
        <AudioButton />
        <AudioButton exit />
      </div>
      <div className={subGrid}>{children}</div>
    </main>
  );
}

function GeneralLayout({ children }: Props) {
  return <main className={item}>{children}</main>;
}

export default function Layout({ children }: Props) {
  const router = useRouter();
  const pathname = router.asPath;

  if (pathname === "/" || pathname === "/404") {
    return <GeneralLayout>{children}</GeneralLayout>;
  } else {
    return <D2gaLayout>{children}</D2gaLayout>;
  }
}
