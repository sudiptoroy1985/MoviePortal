import Link from "next/link";
import Layout from "../components/layout";
import fetch from "isomorphic-unfetch";
import { Component } from "react";
import Error from "./_error";
import Item from "../components/Item";
import ItemList from "../components/ItemList";
import FormControl from '@material-ui/core/FormControl';
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import Badge from "@material-ui/core/Badge";
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";


export default class Movies extends Component {
  static async getInitialProps() {
    const res = await fetch("https://api.myjson.com/bins/1bqcdq");
    const statusCode = res.status > 200 ? res.status : false;
    const data = await res.json();
    data.forEach(movie => movie.isfavorite = true);
    return { movies: data, statusCode };
  }

  constructor(props) {
    super(props);
    const { movies, statusCode } = this.props;
    this.state = {
      movies: movies,
      filteredMovies: movies,
      statusCode: statusCode,
      favourites: 0
    };
  }

  handleSearch = searchText =>
    this.setState({
      filteredMovies: this.state.movies.filter(movie =>
        movie.Name.toLowerCase().startsWith(searchText.toLowerCase())
      )
    });

  handleMarkAsFavourite = movieName => {
     const movie = this.state.filteredMovies.find(movie => movie.Name === movieName);
     if(movie){
       movie.isfavorite = !movie.isfavorite; 
       if(movie.isfavorite){
        this.setState({ favourites: this.state.favourites - 1})
       }else{
         this.setState({ favourites: this.state.favourites + 1})
       }
     }
  }

  render() {
    const { favourites, statusCode, filteredMovies} = this.state;

    if (statusCode) {
      return <Error statusCode={statusCode} />;
    }
    return (
      <Layout title="Movies">
        <div className="container">
          <div className="search-pane">
          <FormControl>
              <Input
                placeholder="Search movies"
                onChange={e => this.handleSearch(e.target.value)} 
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
            <ItemList movies={filteredMovies} onMarkedAsFavorite={this.handleMarkAsFavourite}/>
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
