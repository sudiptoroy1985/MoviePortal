import firebase from 'firebase/app';
import firestore from 'firebase/firestore';
import movieDbConfig from './movieDbConfig';


export default class MovieRepository {

    constructor() {
        const store = !firebase.apps.length ? 
                firebase.initializeApp(movieDbConfig).firestore(): 
                firebase.app().firestore();
        this.movieCollection = store.collection('movies');
    }

    isFavouritePredicate = (collectionRef) => collectionRef.where('isFavourite', '==', true);

    movieNamePredicate = (name, collectionRef) => collectionRef.where('Name', '==', name);

    yearPredicate = (year, collectionRef) => collectionRef.where('Year', '==', year);

    getCollectionData = collection => collection.docs.map(p => p.data());

    loadMovies = async () =>  {
      const moviesRef = await this.movieCollection.get(); 
      return this.getCollectionData(moviesRef);
    };

    loadFavouriteMovies = async () => {
      const moviesRef = await this.isFavouritePredicate(this.movieCollection).get();
      return this.getCollectionData(moviesRef);
    }

    loadFavouritesTotal = async () => {
       const moviesRef = await this.movieCollection.get();
       const favourites = moviesRef.docs.map(doc => doc.data().isFavourite);
       return favourites.reduce((accumulator, item) => accumulator + item,  0);
    }

    searchMovies = async (searchText) => {
        let query = this.movieCollection;
        if(searchText){
          query = this.movieNamePredicate(searchText, query);
        }
        let queryResult = await query.get();
        return this.getCollectionData(queryResult);
    }


    toggleFavourite = async (movieName) => {
        let movieCollection = await this.movieNamePredicate(movieName, this.movieCollection).get();
        let movieDocument = movieCollection.docs[0];
        let toggledValue = !movieDocument.data().isFavourite;
        this.movieCollection.doc(movieDocument.id).update({
          isFavourite: toggledValue
        })
        return toggledValue;
    }
}








    
 