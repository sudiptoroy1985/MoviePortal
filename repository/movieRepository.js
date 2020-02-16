import firebase from "firebase/app";
import firestore from "firebase/firestore";
import movieDbConfig from "./movieDbConfig";

export default class MovieRepository {
  constructor() {
    const store = !firebase.apps.length
      ? firebase.initializeApp(movieDbConfig).firestore()
      : firebase.app().firestore();
    this.movieCollection = store.collection("movies");
  }

  isFavouritePredicate = collectionRef => collectionRef.where("isFavourite", "==", true);

  movieNamePredicate = (name, collectionRef) => collectionRef.where("Name", "==", name);

  movieIdPredicate = (id, collectionRef) => collectionRef.where("Id", "==", id);

  getCollectionData = collection =>  collection.docs.map(p => p.data());

  loadMovies = async () => this.getCollectionData(await this.movieCollection.get());

  loadFavouriteMovies = async () => this.getCollectionData(await this.isFavouritePredicate(this.movieCollection).get());

  loadFavouritesTotal = async () => (await this.loadFavouriteMovies()).length;

  searchMovies = async movieName => this.getCollectionData(
    await this.movieNamePredicate(movieName, this.movieCollection).get()
  );

  toggleFavourite = async movieId => {
    let movieDocument = (await this.movieIdPredicate(movieId, this.movieCollection).get()).docs[0];
    let toggledValue = !movieDocument.data().isFavourite;
    this.movieCollection.doc(movieDocument.id).update({
      isFavourite: toggledValue
    });
    return toggledValue;
  };
}
