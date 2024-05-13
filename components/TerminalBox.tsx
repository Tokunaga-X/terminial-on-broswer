'use client'

import React, { useEffect, useRef, useState } from "react";

import Navbar from "./Navbar";
import TodayDate from "./TodayDate";
import Welcome from "./commands/Welcome";

export default function TerminalBox() {
	const dummyRef = useRef() as React.MutableRefObject<HTMLDivElement>;

	const [enteredCmd, setEnteredCmd] = useState([
		{
			cmd: "",
			Component: Welcome,
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
	
	return (
		<div>
			<Navbar />
			<div className="max-w-4xl border-x-2 border-b-2 border-slate-800 rounded-b-md mx-auto text-gray-300 text-xl p-2 overflow-y-auto h-55vh bg-black bg-opacity-75 box">
			<TodayDate />

			<div ref={dummyRef}></div>
			</div>
		</div>
	);
}
