import { FC } from "react";
import { LiveCursorProps } from "@/types/type";
import { Cursor } from "./Cursor";
import { COLORS } from "@/constants";

export const LiveCursors: FC<LiveCursorProps> = ({ others }) => {
  return others.map(({ presence, connectionId }) => {
    if (!presence?.cursor) return;

    return (
      <Cursor
        key={connectionId}
        color={COLORS[Number(connectionId) % COLORS.length]}
        x={presence.cursor.x}
        y={presence.cursor.y}
        message={presence.message}
      />
    );
  });
};
