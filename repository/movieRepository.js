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


    loadMovies = async () =>  {
      const moviesRef = await this.movieCollection.get(); 
      const movies = moviesRef.docs.map(p => p.data());
      return movies;
    };

    movieNamePredicate = (name, collectionRef) => collectionRef.where('Name', '==', name)

    loadTotalFavourites = async () => {
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
        return queryResult.docs.map(p => p.data());;
    }


    toggleFavourite = async (movieName) => {
        let movieResult = await this.movieNamePredicate(movieName, this.movieCollection).get();
        let movieDoc = movieResult.docs[0];
        let movieDocResult = movieResult.docs[0].data();
        let toggledValue = !movieDocResult.isFavourite;
        this.movieCollection.doc(movieDoc.id).update({
          isFavourite: toggledValue
        })
        return toggledValue;
    }
}








    
 