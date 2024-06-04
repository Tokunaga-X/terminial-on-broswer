import About from "../commands/About";
import Help from "../commands/Help";
import NotFound from "../commands/NotFound";

type CmdHistory = {
	cmd: string;
	Component: () => JSX.Element;
	time: string;
};


function renderCmd(cmd: string): CmdHistory {
	switch (cmd) {
		case "ls":
			return {
				cmd,
				Component: Help,
				time: "",
			};
	case "about": {
		return {
			cmd,
			Component: About,
			time: "",
		};
	}
	default:
		return {
			cmd,
			Component: NotFound,
			time: "",
		};
	}
}

export default renderCmd;


