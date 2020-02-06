import Link from "next/link";
import Layout from "../components/layout";
import fetch from "isomorphic-unfetch";
import { Component } from "react";
import Error from "./_error";
import Item from "../components/Item";
import ItemList from "../components/ItemList";
import db from '../db/loader';
import FormControl from '@material-ui/core/FormControl';
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Badge from "@material-ui/core/Badge";
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

export default class Movies extends Component {
  constructor(props) {
    super(props);
    const { movies } = this.props;
    this.state = {
      movies: movies,
      filteredMovies: movies,
      favourites: 0
    };
  }

  static getInitialProps = async () => {
    const moviesRef = await db.collection('movies').get();
    const movies = moviesRef.docs.map(p => p.data());
    return { movies: movies };
  }

  search = async (searchText) => {
    let query = db.collection('movies');
    if(searchText){
       query = query.where('Name', '==', searchText);
    }
    let queryResult = await query.get();
    let searchedMovies = queryResult.docs.map(p => p.data());
    this.setState({
      filteredMovies: searchedMovies
    });
  }

  toggleFavourite = async (movieName) => {
     const { favourites } = this.state;
     const movie = this.state.filteredMovies.find(movie => movie.Name === movieName);
     movie.isfavorite = !movie.isfavorite; 
      this.setState({
       favourites: movie.isfavorite ? favourites + 1 : favourites - 1
     });
  }

  render() {
    const { favourites, filteredMovies} = this.state;

    return (
      <Layout title="Movies">
        <div className="container">
          <div className="search-pane">
          <FormControl>
              <Input
                placeholder="Search movies"
                onChange={e => this.search(e.target.value)} 
              />
          </FormControl>
          <div className="Favourites">
          <Badge badgeContent={favourites} color="primary">
             {favourites > 0 ? 
             <FavoriteIcon style={{ fontSize: 35 }} /> : 
             <FavoriteBorderIcon style={{ fontSize: 35 }} />
              }
          </Badge>
          </div>
          </div>
          <div className="movie-list">
            <ItemList movies={filteredMovies} onMarkedAsFavorite={this.toggleFavourite}/>
          </div>
        </div>
        <style jsx>
          {`
            .movie-list {
              display: flex;

              flex-wrap: wrap;
            }

            .search-pane {
              display: flex;
              justify-content: space-between;
              margin: 20px;
            }

            .container {
              width: 100%;
              margin-left: 15px;
            }
          `}
        </style>
      </Layout>
    );
  }
}
