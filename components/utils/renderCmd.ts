import Help from "../commands/Help";
import NotFound from "../commands/NotFound";

type CmdHistory = {
	cmd: string;
	Component: () => JSX.Element;
	time: string;
};


function renderCmd(cmd: string): CmdHistory {
	console.log("🚀 ~ renderCmd ~ cmd:", cmd)
	switch (cmd) {
		case "ls":
			return {
				cmd,
				Component: Help,
				time: "",
			};
		default:
			return {
				cmd,
				Component: NotFound,
				time: "",
			};
	}
}

export default renderCmd;


