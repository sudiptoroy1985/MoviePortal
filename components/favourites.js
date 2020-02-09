import Badge from "@material-ui/core/Badge";
import FavoriteIcon from '@material-ui/icons/Favorite';
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import Link from "next/link";

export default({favourites}) =>  (
    <div>
      <div className="favourites">
        <Link href="/favourites">
              <Badge badgeContent={favourites} color="primary">
                {favourites > 0 ? 
                <FavoriteIcon style={{ fontSize: 35 }} /> : 
                <FavoriteBorderIcon style={{ fontSize: 35 }} />
                  }
              </Badge>
        </Link>
        </div>
        <style jsx>{
          `
            .favourites {
              cursor: pointer;
            }
          `
        }</style>
    </div>
)