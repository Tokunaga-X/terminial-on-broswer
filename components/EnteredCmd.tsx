"use client";

import React from "react";
import ReadOnlyCmdInput from "./ReadOnlyCmdInput";

interface EnteredCmdProps {
  enteredCmd: CmdHistory[];
}

type CmdHistory = {
  cmd: string;
  Component: () => JSX.Element;
  time: string;
};

export default function EnteredCmd({ enteredCmd }: EnteredCmdProps) {
  return (
    <div>
      {enteredCmd.map(({ cmd, Component, time }, index) => {
        return (
          <div key={index}>
            <ReadOnlyCmdInput cmd={cmd} time={time} />
            <div className="mt-3 mb-3">
              <Component />
            </div>
          </div>
        );
      })}
    </div>
  );
}
