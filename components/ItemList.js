import Item from "../components/Item";
import { Component } from "react";

export default class ItemList extends Component {

    render() {
        const { movies, enableFavourites } = this.props;

        return (
            movies.map(p => <Item 
                movie={p} 
                key={p.Name} 
                enableFavourites={enableFavourites}
                onMarkedAsFavorite={name => this.props.onMarkedAsFavorite(name)}/>)
        )
        
    }

    
}
