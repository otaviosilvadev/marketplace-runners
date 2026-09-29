import Carousel from 'react-bootstrap/Carousel';

export const CarouselComponent = () => {
    return (
      <div className="container-fluid" style={{marginTop: "80px"}}>
        <div className="row">
          <div className="col">
            <Carousel>
              <Carousel.Item>
                <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/aquarelapresentesepapelaria/"><img
                  className="imgCarousel"
                  src={`${process.env.PUBLIC_URL}/images/image.png`}
                  alt="First slide"
                /></a>
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>
  );
}