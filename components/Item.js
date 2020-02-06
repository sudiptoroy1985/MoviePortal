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
            (<FavoriteIcon style={{ fontSize: 100 }} />) :
            (<FavoriteBorderIcon style={{ fontSize: 100 }} />) 
            }
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
            margin: 1px;
          }

          .item-detail-properties:hover {
            filter: brightness(40%);
          }

          .item-detail-properties:hover + .item-detail-action {
              display: block;
          }

          .item-detail-action:hover {
              display: block;
              transition:all 0.3s ease;
          }

          .item-detail-action {
            display: none;
            position: absolute;
            top: 28%;
            left: 15%;
            font-size: 5px;
          }

          .item-detail-properties-info {
              display: flex;
              justify-content: space-between;
              padding: 5px;
              background-color: #f9daf4;
              border-radius: 0 0 10px 10px;
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
