import Button from "@material-ui/core/Button";
import Chip from "@material-ui/core/Chip";
import MovieIcon from "@material-ui/icons/Movie";
import { Component } from "react";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

export default class Movies extends Component {
  render() {
    const { movie, enableFavourites } = this.props;
    return (
      <div className="item-detail">
        <div className="item-detail-properties">
          <img src={movie.Image} alt="Movie Image" />
          <div className="item-detail-properties-info">
            <Chip variant="outlined" label={movie.Year} />
            <MovieIcon />
          </div>
        </div>
        {enableFavourites ? <div className="item-detail-action">
          <div className="favorite" onClick={() => this.props.onMarkedAsFavorite(movie.Name)}>
            {movie.isFavourite ? 
            <FavoriteIcon style={{ fontSize: 40 }} /> :
            <FavoriteBorderIcon style={{ fontSize: 40 }} />
            }
          </div>
        </div>: <div />}
        <style jsx>{`
          font-size: 0.9em;
          text-align: center;

          .item-detail {
            position: relative;
          }

          .item-detail-properties {
            cursor: pointer;
            margin: 2px;
            transition:all 0.4s ease;
          }

          .item-detail-properties:hover {
            filter: brightness(70%);
            transform: scale(1.05);
          }

          .item-detail-properties:hover + .item-detail-action {
              display: block;
          }

          .item-detail-action:hover {
              display: block;
          }

          .item-detail-action:hover + .item-detail-properties {
            filter: brightness(40%);
          }

          .item-detail-action {
            display: none;
            position: absolute;
            top: 2%;
            left: 70%;
            font-size: 1px;
            background: transparent;
          }

          .item-detail-properties-info {
              display: flex;
              justify-content: space-between;
              padding: 5px;
              background-color: #f9daf4;
              border-radius: 0 0 5px 5px;
          }

          .favorite {
              cursor: pointer;
          }
        }
        `}</style>
      </div>
    );
  }
}
