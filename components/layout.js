import Link from 'next/link';
import Head from 'next/head';
import Router from 'next/router';
import NProgress from 'nprogress';
import { Typography } from '@material-ui/core';
import Badge from "@material-ui/core/Badge";
import Avatar from "@material-ui/core/Avatar";

Router.onRouteChangeStart = () => {
    NProgress.start();
}

Router.onRouteChangeComplete = () => NProgress.done();

Router.onRouteChangeError = () => NProgress.done();

export default({children, title, favourites}) => (
    <div className="root">
        <Head>
            <title>Movies Portal</title>
        </Head>
        <header>
                <Link href="/movies">
                    <span>
                         <Typography>Movies</Typography>
                    </span>
                </Link>
                <Badge badgeContent={favourites} color="primary">
                    <Link href="/favourites">
                        <span>
                            <Typography>Favourites</Typography>
                        </span>
                    </Link>
                </Badge>
        </header>

        {children}

        <footer>&copy; {new Date().getFullYear()}</footer>
        <style jsx>{`
            .root {
                display: flex;
                justify-content: center;
                align-items: center;
                flex-direction: column;
            }

            header {
                width: 101%;
                padding-top: 15px;
                padding-left: 37px;
                display: flex;
                justify-contents: space-evenly;
                background: #ef5ba1;
            }
            
            header a:hover {
                font-weigth: bold;
                color: lightgrey;
            }
            footer {
                padding: 1em;
            }
            h1 {
                color: #fff;
            }
            span{
                padding: 0 7px 10px 5px;
                cursor: pointer;
                color: #fff;
            }
        `}</style>
    </div>
)