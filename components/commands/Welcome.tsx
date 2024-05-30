import React from "react";

export default function Welcome() {
  return (
    <div className="flex flex-col gap-2">
      <h1 className="font-fascinate text-6xl font-bold uppercase text-red-400 text-center">
        Welcome
      </h1>
      <p className="text-gray-400 text-center">Don't know what to do?</p>
      <p className="text-gray-400 text-center">try command like ls, pwd...</p>
      <p className="text-sm text-gray-600 text-center">
        copyright by... no one
      </p>
    </div>
  );
}
