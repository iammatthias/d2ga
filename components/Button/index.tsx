import router from "next/router";
import { useAudioPlayer } from "react-use-audio-player";
import { button } from "./Button.css";

type Props = {
  enter?: boolean;
  exit?: boolean;
};

export default function Button({ enter, exit }: Props) {
  const { togglePlayPause, stop, play, playing, ready, loading } = useAudioPlayer({
    src: "/sounds/LostWoods.mp3",
    format: "mp3",
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
      <button className={button} onClick={exitHandler}>
        Escape
      </button>
    );

  if (enter)
    return (
      <button className={button} onClick={enterHandler}>
        Enter
      </button>
    );

  if (!ready && !loading) return <div>No audio to play</div>;
  if (loading) return <div>Loading audio</div>;

  return (
    <button className={button} onClick={playHandler}>
      {playing ? "Pause" : "Play"}
    </button>
  );
}
