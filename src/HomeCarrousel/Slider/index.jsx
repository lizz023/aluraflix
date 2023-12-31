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
  padding: 25px 47px;

  @media (min-width: 768px){
    padding: 25px 65px;
  }
`

const TitleContainer = styled.h2`
  background-color: #6BD1FF;
  border-radius: 3px;
  display: inline;
  font-size: 12px;
  padding: 10px;
  

  @media (min-width: 768px){
    font-size: 17px;
  }
`


const SlideRemote = (props) => {

  const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: "20px",
    slidesToShow: 3,
    speed: 500,
    // autoplay: true,
    autoplaySpeed: 2000,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SampleNextArrow />,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
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