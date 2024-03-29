import { CursorSVG } from "@/components/CursorSVG";
import { FC } from "react";

interface CursorProps {
  color: string;
  x: number;
  y: number;
  message: string;
}

export const Cursor: FC<CursorProps> = ({ color, x, y, message }) => {
  return (
    <div
      className='pointer-events-none absolute left-0 top-0'
      style={{
        transform: `translateX(${x}px) translateY(${y}px)`,
      }}
    >
      <CursorSVG color={color} />
    </div>
  );
};
