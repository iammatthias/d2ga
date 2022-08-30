import router from "next/router";
import { useAudioPlayer } from "react-use-audio-player";
import { midi } from "./Midi.css";

type Props = {
  enter?: boolean;
  exit?: boolean;
};

export default function Midi({ enter, exit }: Props) {
  const { togglePlayPause, pause, play, playing, ready, loading } = useAudioPlayer({
    src: "sounds/LostWoods.mp3",
    format: "mp3",
    loop: true,
    autoplay: false,
    onend: () => console.log("sound has ended!"),
  });

  const clickHandler = () => {
    if (playing) {
      togglePlayPause();
      router.replace({
        pathname: "/",
      });
    } else {
      togglePlayPause();
      router.replace({
        pathname: "./d2ga/1",
      });
    }
  };

  const exitHandler = () => {
    pause();
    router.replace({
      pathname: "/",
    });
  };

  const enterHandler = () => {
    play();
    router.replace({
      pathname: "/",
    });
  };

  if (exit)
    return (
      <button className={midi} onClick={exitHandler}>
        Escape
      </button>
    );

  if (enter)
    return (
      <button className={midi} onClick={enterHandler}>
        Enter
      </button>
    );

  if (!ready && !loading) return <div>No audio to play</div>;
  if (loading) return <div>Loading audio</div>;

  return (
    <button className={midi} onClick={clickHandler}>
      {playing ? "Pause" : "Play"}
    </button>
  );
}
