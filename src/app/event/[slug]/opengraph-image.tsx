import { ImageResponse } from "next/og";

// Image metadata
export const alt = "EventoCity";
export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default async function Image({ params }: { params: { slug: string } }) {
  return new ImageResponse(
    (
      <section>
        <h1>{params.slug}</h1>
        <p>EventoCity - Browse events around you</p>
      </section>
    )
  );
}
