import router from "next/router";
import { useAudioPlayer } from "react-use-audio-player";
import { midi } from "./Midi.css";

export default function Midi() {
  const { togglePlayPause, playing, ready, loading } = useAudioPlayer({
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

  if (!ready && !loading) return <div>No audio to play</div>;
  if (loading) return <div>Loading audio</div>;

  return (
    <button className={midi} onClick={clickHandler}>
      {playing ? "Escape" : "Enter"}
    </button>
  );
}
