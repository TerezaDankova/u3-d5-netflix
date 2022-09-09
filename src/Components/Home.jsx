import { Component } from "react";
import {Container, Row, Col} from "react-bootstrap";
import Gallery from "./Gallery";


class Home extends Component {
  
  render() {
    return (
      <Container fluid className="p-2 m-0">
        
            <div className="row no-gutters" style={{rowGap: "20px", width: "100%"}}>
                  <div className="col-sm-6 col-md-12 col-lg-8 col-xl-12">
                        <div className="movie-card position-relative">
                        <Gallery style={{fontSize: "20px"}} keyword="Harry Potter" />
                       </div>
                  </div>
            </div>
            <div className="row no-gutters mt-5" style={{rowGap: "20px", width: "100%"}}>
                  <div className="col-sm-6 col-md-12 col-lg-8 col-xl-12">
                        <div className="movie-card position-relative">
                        <Gallery keyword="lord of the rings" />
                       </div>
                  </div>
            </div>
            <div className="row no-gutters mt-5" style={{rowGap: "20px", width: "100%"}}>
                  <div className="col-sm-6 col-md-12 col-lg-8 col-xl-12">
                        <div className="movie-card position-relative">
                        <Gallery keyword="twilight" />
                       </div>
                  </div>
            </div>
       
      </Container>
    );
  }
}

export default Home;