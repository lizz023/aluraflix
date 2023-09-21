import React, { Component } from "react";
import Slider from "react-slick";
import styled from "styled-components";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black"}}
      onClick={onClick}
    />
  );
}

const CarruselContainer = styled.div`
  max-width: 1136px;
  margin: 0 auto;
  padding: 25px 65px;
`

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      className: "center",
      centerMode: true,
      infinite: true,
      centerPadding: "100px",
      slidesToShow: 3,
      speed: 500,
      autoplay: true,
      autoplaySpeed: 2000,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SampleNextArrow />,

    };
    return (
      <CarruselContainer>
        <h2> Single Item</h2>
        <Slider {...settings}>
          <div>
            <h3>Hlaa elia abie nei pegro</h3>
          </div>
          <div>
            <h3>Hlaa elia abie nei pegro</h3>
          </div>
          <div>
            <h3>Hlaa elia abie nei pegro
              
            </h3>
          </div>
          <div>
            <h3>Hlaa elia abie nei pegro
              
            </h3>
          </div>
          <div>
            <h3>Hlaa elia abie nei pegro
              
            </h3>
          </div>
          <div>
            <h3>Hlaa elia abie nei pegro
              
            </h3>
          </div>
        </Slider>
      </CarruselContainer>
    );
  }
}