import React from "react";

export const DateDisplay = ({ date }: { date: Date }) => {
  return (
    <span className="text-xs">
      Posted on {new Date(date).toLocaleDateString()}
    </span>
  );
};
