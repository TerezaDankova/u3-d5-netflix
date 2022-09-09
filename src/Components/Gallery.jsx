import { Component } from "react";
import {Image,} from "react-bootstrap"

class Gallery extends Component {
      state = {    
            isLoading: true,
            isError: false,
            movies: []
      };

      fetchMovies = async () => {
            fetch(`http://www.omdbapi.com/?apikey=8a241491&s=${this.props.keyword}`, {
               method: "GET"
            })
            .then(response => response.json())
            .then(results => {
                  if (results.Response === "True") {
                        this.setState({ isError: false, movies: results.Search })
                  } else {
                        this.setState({ isError: true })
                  }
            })
            .finally(() => {
                  this.setState({ isLoading: false })
            })
      }

      componentDidMount = () => {
            this.fetchMovies()
      }

      render() {
            return (
                  <div>
                        <div>
                              {this.state.isLoading && (
                                    <div>Loading</div>
                              )}
                              {this.state.isError && (
                                    <div>Error</div>
                              )}
                               {this.state.movies.map((movie,index) => (
                               <Image key={index} className="img-fluid pad" style={{width: "280px", height: "150px" }}src={movie.Poster} fluid />
                              ))} 
                        </div>
                  </div>
            )
      }
}

export default Gallery

