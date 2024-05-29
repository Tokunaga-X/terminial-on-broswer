"use client";

import React, { useEffect, useRef, useState } from "react";

import CmdUserInput from "./CmdUserInput";
import EnteredCmd from "./EnteredCmd";
import Help from "./commands/Help";
import Navbar from "./Navbar";
import TodayDate from "./TodayDate";
import Welcome from "./commands/Welcome";
import renderCmd from "./utils/renderCmd";

export default function TerminalBox() {
  const dummyRef = useRef() as React.MutableRefObject<HTMLDivElement>;

  const [enteredCmd, setEnteredCmd] = useState([
    {
      cmd: "",
      Component: Welcome,
      time: new Date().toLocaleTimeString(),
    },
    {
      cmd: "ls",
      Component: Help,
      time: new Date().toLocaleTimeString(),
    },
  ]);

  useEffect(() => {
    dummyRef.current.scrollIntoView({ behavior: "auto" });
  }, [enteredCmd]);

  useEffect(() => {
    document.body.addEventListener("keydown", handleKeyEvent);
  }, []);

  const handleKeyEvent = (e: KeyboardEvent) => {
    if (e.ctrlKey && e.key.toLocaleLowerCase() === "l") {
      setEnteredCmd([]);
    }
  };

  const handleSubmit = (cmd: string) => {
    console.log("🚀 ~ handleSubmit ~ cmd:", cmd);
    setEnteredCmd((currentCmd) => [
      ...currentCmd,
      { ...renderCmd(cmd), time: new Date().toLocaleTimeString() },
    ]);
  };

  return (
    <div>
      <Navbar />
      <div className="max-w-4xl border-x-2 border-b-2 border-slate-800 rounded-b-md mx-auto text-gray-300 text-xl p-2 overflow-y-auto h-55vh bg-black bg-opacity-75 box">
        <TodayDate />
        <EnteredCmd enteredCmd={enteredCmd} />
        <CmdUserInput onSubmit={handleSubmit} />
        <div ref={dummyRef}></div>
      </div>
    </div>
  );
}
