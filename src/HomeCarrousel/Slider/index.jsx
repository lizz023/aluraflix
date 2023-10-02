import React from "react";
import Slider from "react-slick";
import styled from "styled-components";
import VideoCard from "../VideoCard";


function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "block", background: "black" }}
      onClick={onClick}
    />
  );
}

const CarruselContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  max-width: 1136px;
  margin: 0 auto;
  padding: 25px 65px;
`

const TitleContainer = styled.h2`
  background-color: blue;
  display: inline;
`


const SlideRemote = (props) => {

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

  const { colorPrimario, colorSecundario, titulo } = props.datos

  const color = {
    backgroundColor: colorPrimario
  }

  const borderCard = {
    border: colorSecundario
  }

  console.log("ghoks");

  // const slidesAmount = props.videoCards > 1 ? Math.min(3, props.videoCards - 1) : 1;

  return (
    <div id="mycarousel">
      <CarruselContainer>
        <div>
          <TitleContainer style={color}>
            {titulo}
          </TitleContainer>
        </div>


        <Slider {...settings} > {/* slidesToShow={slidesAmount} */}
          <div>
            <div style={{ margin: '0 8px' }}>
              <VideoCard />
            </div>
          </div>

          <div>
            <div style={{ margin: '0 8px' }}>
              <VideoCard />
            </div>
          </div>

          <div>
            <div style={{ margin: '0 8px' }}>
              <VideoCard />
            </div>
          </div>

          <div>
            <div style={{ margin: '0 8px' }}>
              <VideoCard />
            </div>
          </div> 

          <div>
            <div style={{ margin: '0 8px' }}>
              <VideoCard />
            </div>
          </div>
        </Slider>
      </CarruselContainer>
    </div>
  )

}


export default SlideRemote;