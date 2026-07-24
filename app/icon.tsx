import { ImageResponse } from "next/og";

export const size = {
  width: 64,
  height: 64,
};

export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          alignItems: "center",
          background: "#12382f",
          color: "#f7f5ed",
          display: "flex",
          fontFamily: "serif",
          fontSize: 42,
          height: "100%",
          justifyContent: "center",
          width: "100%",
        }}
      >
        N
      </div>
    ),
    size,
  );
}
