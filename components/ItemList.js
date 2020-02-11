import Item from "./Item";
import { Component } from "react";

export default (props) =>
props.movies.map(p => (
    <Item
      movie={p}
      key={p.Name}
      enableFavourites={props.enableFavourites}
      onMarkedAsFavorite={name => props.onMarkedAsFavorite(name)}
    />
  ));
