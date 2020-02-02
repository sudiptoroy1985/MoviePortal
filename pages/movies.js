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

export default class Movies extends Component {
  static async getInitialProps() {
    const res = await fetch("https://api.myjson.com/bins/1bqcdq");
    const statusCode = res.status > 200 ? res.status : false;
    const data = await res.json();
    return { movies: data, statusCode };
  }

  constructor(props) {
    super(props);
    const { movies, statusCode } = this.props;
    this.state = {
      movies: movies,
      filteredMovies: movies,
      statusCode: statusCode
    };
  }

  handleSearch = searchText =>
    this.setState({
      filteredMovies: this.state.movies.filter(movie =>
        movie.Name.toLowerCase().startsWith(searchText.toLowerCase())
      )
    });

  // handleYearChange = year => {
  //   this.setState({
  //     filteredMovies: year !== 'All' ? this.state.movies.filter(movie =>
  //       movie.Year == year) : this.state.movies
  //   })
  // }

  render() {
    if (this.state.statusCode) {
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
          {/* <FormControl>
              <InputLabel id="demo-simple-select-helper-label">Movie year</InputLabel>
              <Select
                native
                id="year-selection"
                onChange={e => this.handleYearChange(e.target.value)}
                value={'All'}
              >
                <option value={'All'}>All</option>
                <option value={2016}>2016</option>
                <option value={2017}>2017</option>
                <option value={2018}>2018</option>
                <option value={2019}>2019</option>
                <option value={2020}>2020</option>
                <option value={2021}>2021</option>
              </Select>
            </FormControl> } */}
          </div>
          <div className="movie-list">
            <ItemList movies={this.state.filteredMovies} />
          </div>
        </div>
        <style jsx>
          {`
            .movie-list {
              display: flex;
            }

            .search-pane {
              display: flex;
              margin: 15px;
            }

            .container {
              width: 70%;
            }

           input {
              margin-right: 10px;
            }
          `}
        </style>
      </Layout>
    );
  }
}
