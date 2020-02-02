import Link from "next/link";
import Layout from "../components/layout";
import fetch from "isomorphic-unfetch";
import { Component } from "react";
import Error from './_error';
import Item from "../components/Item";

export default class Movies extends Component {
    static async getInitialProps() {
      const res = await fetch("https://api.myjson.com/bins/1bqcdq");
      const statusCode = res.status > 200 ? res.status : false;
      const data = await res.json();
      return { movies: data, statusCode };
    }
  
    render() {
      const { movies, statusCode } = this.props;
      
      if(statusCode){
          return <Error statusCode={statusCode} />
      }
      return (
        <Layout title="Movies">
          <div className="movie-list">
          {movies.map(p => <Item movie={p} key={p.Name}/>)}
          </div>
          <style jsx>{`
            .movie-list {
              display: flex;
            }
          `}
          </style>
        </Layout>
      );
    }
  }



