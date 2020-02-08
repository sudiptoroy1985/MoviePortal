import Badge from "@material-ui/core/Badge";
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

export default({favourites}) =>  (
    <div>
      <div className="Favourites">
              <Badge badgeContent={favourites} color="primary">
                {favourites > 0 ? 
                <FavoriteIcon style={{ fontSize: 35 }} /> : 
                <FavoriteBorderIcon style={{ fontSize: 35 }} />
                  }
              </Badge>
        </div>
    </div>
)