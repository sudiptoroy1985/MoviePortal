import Button from "@material-ui/core/Button";
import Chip from "@material-ui/core/Chip";
import MovieIcon from "@material-ui/icons/Movie";
import { Component } from "react";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

export default class Movies extends Component {
  render() {
    const { movie } = this.props;
    return (
      <div className="item-detail">
        <div className="item-detail-properties">
          <img src={movie.Image} alt="Movie Image" />
          <div className="item-detail-properties-info">
            <Chip variant="outlined" label={movie.Year} />
            <MovieIcon />
          </div>
        </div>
        <div className="item-detail-action">
          <div className="favorite" onClick={() => this.props.onMarkedAsFavorite(movie.Name)}>
            {movie.isfavorite ? 
            (<FavoriteBorderIcon style={{ fontSize: 100 }} />) : 
            (<FavoriteIcon style={{ fontSize: 100 }} />)}
          </div>
        </div>
        <style jsx>{`
          font-size: 0.9em;
          text-align: center;

          .item-detail {
            position: relative;
          }

          .item-detail-properties {
            cursor: pointer;
          }

          .item-detail-properties:hover {
            filter: brightness(40%);
          }

          .item-detail-properties:hover + .item-detail-action {
              display: block;
          }

          .item-detail-action:hover {
              display: block;
          }

          .item-detail-action {
            display: none;
            position: absolute;
            top: 28%;
            left: 22%;
            font-size: 5px;
          }

          .item-detail-properties-info {
              display: flex;
              justify-content: space-between;
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
