import { useState, useEffect } from "react";

export default function ExerciseSeven() {
  const [mouseTrack, setMouseTrack] = useState({ x: null, y: null });
  const handleMove = (e) => {
    setMouseTrack({
      x: e.pageX,
      y: e.pageY,
    });
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMove);
    return () => {
      window.removeEventListener("mousemove", handleMove);
    };
  }, []);

  return (
    <div className="">
      <p>width X :{mouseTrack.x}</p>
      <p>height Y :{mouseTrack.y}</p>
    </div>
  );
}
