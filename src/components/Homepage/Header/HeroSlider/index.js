import React from "react";
import { Carousel } from "react-bootstrap";

const Index = () => {
  return (
    <Carousel interval={null}>
      <Carousel.Item>
        <video
          autoPlay
          muted
          loop
          className="hero-video"
          src="/Videos/hporx.mp4"
        />
      </Carousel.Item>
      <Carousel.Item>
        <video
          autoPlay
          muted
          loop
          className="hero-video"
          src="/Videos/hporx.mp4"
        />
      </Carousel.Item>
      <Carousel.Item>
        <video
          autoPlay
          muted
          loop
          className="hero-video"
          src="/Videos/hporx.mp4"
        />
      </Carousel.Item>
    </Carousel>
  );
};

export default Index;
