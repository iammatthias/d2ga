import router from "next/router";
import { useAudioPlayer } from "react-use-audio-player";
import { audioButton } from "./AudioButton.css";

// import LostWoods from "@/public/sounds/LostWoods.mp3";

type Props = {
  enter?: boolean;
  exit?: boolean;
};

export default function AudioButton({ enter, exit }: Props) {
  const { togglePlayPause, stop, play, playing, ready, loading, error } = useAudioPlayer({
    src: "sounds/LostWoods.mp3",
    format: ["mp3"],
    html5: true,
    loop: true,
    autoplay: false,
    onend: () => console.log("sound has ended!"),
  });

  const playHandler = () => {
    if (playing) {
      togglePlayPause();
    } else {
      togglePlayPause();
    }
  };

  const exitHandler = () => {
    stop();
    router.replace({
      pathname: "/",
    });
  };

  const enterHandler = () => {
    play();
    router.replace({
      pathname: "./d2ga/1",
    });
  };

  if (exit)
    return (
      <button className={audioButton} onClick={exitHandler}>
        Escape
      </button>
    );

  if (enter)
    return (
      <button className={audioButton} onClick={enterHandler}>
        Enter
      </button>
    );

  if (error) {
    console.log(error);
  }

  if (!ready && !loading) return <div>No audio to play</div>;
  if (loading) return <div>Loading audio</div>;

  return (
    <button className={audioButton} onClick={playHandler}>
      {playing ? "Pause" : "Play"}
    </button>
  );
}
