import Layout from "../components/layout";
import ItemList from "../components/ItemList";
import MovieRepository from "../repository/movieRepository";
import { Component } from "react";

export default class Favourites extends Component {

  static getInitialProps = async () => {
    let db = new MovieRepository();
    return { favouriteMovies: await db.loadFavouriteMovies() };
  };

  render = () => {
    const { favouriteMovies } = this.props;

    return (
      <div>
        <Layout title="erre">
        <div className="container">
          <div className="favourite-movie-list">
            <ItemList movies={favouriteMovies} />
          </div>
        </div>
        </Layout>
        <style jsx>
          {`
            .favourite-movie-list {
              display: flex;
              flex-wrap: wrap;
              margin: 20px;
            }
            .container {
              width: 100%;
            }
          `}
        </style>
      </div>
    );
  };
}
