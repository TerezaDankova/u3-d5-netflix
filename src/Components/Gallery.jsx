// import { Component } from "react";
// import {Container, Row, Col} from "react-bootstrap"
// import SingleMovie from './SingleMovie'

// class Gallery extends Component {
//       state = {    
//             isLoading: true,
//             isError: false,
//             movies: []
//       };

//       fetchMovies = async () => {
//             fetch(`http://www.omdbapi.com/?apikey=8a241491&s=${this.props.query}`, {
//                method: "GET"
//             })
//             .then(response => response.json())
//             .then(data => {
//                   if (data.Response === "True") {
//                         this.setState({ isError: false, movies: data.Search })
//                   } else {
//                         this.setState({ isError: true })
//                   }
//             })
//             .finally(() => {
//                   this.setState({ isLoading: false })
//             })
//       }

//       componentDidMount = () => {
//             this.fetchMovies()
//       }

//       render() {
//             return (
                  
//                         <Container>
//                               {this.state.isLoading && (
//                                     <div>Loading</div>
//                               )}
//                               {this.state.isError && (
//                                     <div>Error</div>
//                               )}
//                                {/* {this.state.movies.map((movie,index) => (
//                               //  <Image key={index} className="img-fluid pad" style={{width: "280px", height: "250px" }}src={movie.Poster} fluid /> */}
//                               <Row className="justify-content-center mt-3">
//                               {this.state.movies.map(movie => {
//                                   return (
//                                       <Col key={movie.imdbID} xs={6} md={4} lg={3} className="text-center">
//                                           <SingleMovie  movie={movie} />
//                                       </Col>
          
          
//                                   )
//                               })}
//                              </Row>
//                         </Container>
                              
//             )
//       }
// }

// export default Gallery

import React, { Component } from 'react'
import SingleMovie from './SingleMovie'
import { Container, Col, Row } from 'react-bootstrap'
import { SpinnerDotted } from "spinners-react"

export default class Gallery extends Component {
    state = {
        movies: [],
        isLoading: true,
    }
    componentDidMount = () => {
        this.fetchGalleryOneMovies()
    }
    fetchGalleryOneMovies = async () => {
        try {
            const url = `http://www.omdbapi.com/?apikey=8a241491&s=${this.props.query}`
            const response = await fetch(url)
            const data = await response.json()
            console.log(data)
            this.setState({
                movies: data.Search,
                isLoading: false,
            })
        }
        catch (err) {
            console.log(err)
        }
    }
    render() {
        return (

            <Container>
                {this.state.isLoading && (
            <SpinnerDotted size={68} thickness={172} speed={133} color="rgba(61, 172, 57, 1)" />
          )}
                <Row className="justify-content-center mt-3">
                    {this.state.movies.map(movie => {
                        return (

                            <Col key={movie.imdbID} xs={6} md={4} lg={3} className="text-center">
                                <SingleMovie  movie={movie} />
                            </Col>


                        )
                    })}
                </Row>
            </Container>

        )
    }
}

