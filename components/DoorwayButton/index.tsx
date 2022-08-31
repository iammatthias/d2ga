import { useRouter } from "next/router";
import Doorway from "./Doorway";
import { doorwayButton } from "./DoorwayButton.css";

export default function DoorwayButton(page: any) {
  const router = useRouter();
  const handleClick = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    router.push(`/d2ga/${page.page}`);
  };
  return (
    <button className={`${doorwayButton}`} onClick={handleClick}>
      <Doorway />
    </button>
  );
}
