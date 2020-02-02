import Link from "next/link";
import Layout from "../components/layout";
import fetch from "isomorphic-unfetch";
import { Component } from "react";
import Error from './_error';
import Item from "../components/Item";

export default class Series extends Component {
    static async getInitialProps() {
      const res = await fetch("https://api.myjson.com/bins/18q3ry");
      const statusCode = res.status > 200 ? res.status : false;
      const data = await res.json();
      return { series: data, statusCode };
    }
  
    render() {
      const { series, statusCode } = this.props;
      
      if(statusCode){
          return <Error statusCode={statusCode} />
      }
      return (
        <Layout title="Series">
          <div className="series-list">
          {series.map(p => <Item movie={p} key={p.Name}/>)}
          </div>
          <style jsx>{`
            .series-list {
              display: flex;
              text-align: center;
            }


          `}
          </style>
        </Layout>
      );
    }
  }
