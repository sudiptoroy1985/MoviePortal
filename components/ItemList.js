import Item from "./Item";
import { Component } from "react";

export default (props) =>
props.movies.map(p => (
    <Item
      movie={p}
      key={p.Id}
      enableFavourites={props.enableFavourites}
      onMarkedAsFavorite={id => props.onMarkedAsFavorite(id)}
    />
  ));
