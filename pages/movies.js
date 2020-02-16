import Link from "next/link";
import Layout from "../components/layout";
import fetch from "isomorphic-unfetch";
import { Component } from "react";
import Error from "./_error";
import Item from "../components/Item";
import ItemList from "../components/ItemList";
import MovieRepository from '../repository/movieRepository';
import FormControl from '@material-ui/core/FormControl';
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import SearchItem from "../components/searchItem";
import { NoSsr } from "@material-ui/core";

export default class Movies extends Component {

  constructor(props) {
    super(props);
    const { movies, favourites } = this.props;
    this.db = new MovieRepository();
    this.state = {
      movies: movies,
      favourites: favourites
    };
  }

  static getInitialProps = async () => {
    let db = new MovieRepository();
    return { movies: await db.loadMovies(), favourites: await db.loadFavouritesTotal()};
  }

  search = async (searchText) => {
    this.setState({
      movies: await this.db.searchMovies(searchText)
    });
  }

  toggleFavourite = async (movieId) => {
    const { favourites } = this.state;
    let toggledState = await this.db.toggleFavourite(movieId);
    this.updateFavouriteMovieState(movieId, toggledState);
    this.updateTotalFavouritesCountState(favourites, toggledState);
  }

  updateTotalFavouritesCountState = (favourites, toggledState) => {
    this.setState({
      favourites: toggledState ? favourites + 1 : favourites - 1
    });
  }

  updateFavouriteMovieState = (movieId, toggledState) => {
    let toggledMovie = this.state.movies.find(movie => movie.Id === movieId);
    toggledMovie.isFavourite = toggledState;
    this.setState({
      movies: [...this.state.movies]
    });
  }

  render() {
    const { favourites, movies} = this.state;

    return (
      <Layout title="asas" favourites={favourites}>
        <div className="container">
          <div className="pane">
             <SearchItem search={searchText => this.search(searchText)} />
          </div>
          <div className="movie-list">
            <ItemList movies={movies} enableFavourites={true} onMarkedAsFavorite={this.toggleFavourite} />
          </div>
        </div>
        <style jsx>
          {`
            .movie-list {
              display: flex;
              flex-wrap: wrap;
            }
            .container {
              width: 100%;
              margin-left: 15px;
            }
            .pane {
              display: flex;
              justify-content: space-between;
              padding: 10px 25px 10px 10px;
            }
          `}
        </style>
      </Layout>
    );
  }
}
