// import React, { useEffect, useState, useRef } from "react";
// import renderCmd from "../utils/renderCmd";
// import CmdUserInput from "./CmdUserInput";
// import EnteredCmd from "./EnteredCmd";
// import TodayDate from "./TodayDate";
// import Help from "./commands/Help";
// import Navbar from "./Navbar";
// import Welcome from "./commands/Welcome";

import Navbar from "./Navbar";

export default function TerminalBox() {

	return (
		<div>
			<Navbar />
			<div className="max-w-4xl border-x-2 border-b-2 border-slate-800 rounded-b-md mx-auto text-gray-300 text-xl p-2 overflow-y-auto h-55vh bg-black bg-opacity-75 box">
			</div>
		</div>
	);
}
