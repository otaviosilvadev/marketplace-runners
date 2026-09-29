import Carousel from 'react-bootstrap/Carousel';

export const CarouselComponent = () => {
    return (
      <div className="container-fluid" style={{marginTop: "70px"}}>
        <div className="row">
          <div className="col">
            <Carousel>
              <Carousel.Item>
                <img
                  className="imgCarousel"
                  src={`${process.env.PUBLIC_URL}/images/image.png`}
                  alt="First slide"
                />
              </Carousel.Item>
            </Carousel>
          </div>
        </div>
      </div>
  );
}