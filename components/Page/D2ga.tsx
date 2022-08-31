import DoorwayButton from "@/components/DoorwayButton";
import { item, item1a, item1b, item1c, item2a, item2b, item2c, item3a, item3b, item3c } from "@/styles/page.css";

type Props = {
  room: number;
  top: number;
  left: number;
  right: number;
  bottom: number;
};

export default function D2ga({ room, top, left, right, bottom }: Props) {
  return (
    <>
      {/* 1a */}
      <div className={`${item} ${item1a}`} />
      {/* 1b */}
      <div className={`${item} ${item1b}`}>
        <DoorwayButton page={top} />
      </div>
      {/* 1c */}
      <div className={`${item} ${item1c}`} />
      {/* 2a */}
      <div className={`${item} ${item2a}`}>
        <DoorwayButton page={left} />
      </div>
      {/* 2b */}
      <div className={`${item} ${item2b}`}>Room: {room}</div>
      {/* 2c */}
      <div className={`${item} ${item2c}`}>
        <DoorwayButton page={right} />
      </div>
      {/* 3a */}
      <div className={`${item} ${item3a}`} />
      {/* 3b */}
      <div className={`${item} ${item3b}`}>
        <DoorwayButton page={bottom} />
      </div>
      {/* 3c */}
      <div className={`${item} ${item3c}`} />
    </>
  );
}
