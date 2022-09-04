import { useRouter } from "next/router";
import Midi from "@/components/AudioButton";
import DoorwayButton from "@/components/DoorwayButton";
import { item, item1a, item1b, item1c, item2a, item2b, item2c, item3a, item3b, item3c } from "@/styles/page.css";

type Props = {
  room: number;
  children?: React.ReactNode;
};

export default function End({ room }: Props) {
  return (
    <>
      {/* 1a */}
      <div className={`${item} ${item1a}`} />
      {/* 1b */}
      <div className={`${item} ${item1b}`} />
      {/* 1c */}
      <div className={`${item} ${item1c}`} />
      {/* 2a */}
      <div className={`${item} ${item2a}`} />
      {/* 2b */}
      <div className={`${item} ${item2b}`}>Room: {room}</div>
      {/* 2c */}
      <div className={`${item} ${item2c}`} />
      {/* 3a */}
      <div className={`${item} ${item3a}`} />
      {/* 3b */}
      <div className={`${item} ${item3b}`} />
      {/* 3c */}
      <div className={`${item} ${item3c}`} />
    </>
  );
}
