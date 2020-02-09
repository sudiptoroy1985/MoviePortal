import Link from 'next/link';
import Head from 'next/head';
import Router from 'next/router';
import NProgress from 'nprogress';
import { Typography } from '@material-ui/core';
import Badge from "@material-ui/core/Badge";

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
                    <div>
                         <Typography>Movies</Typography>
                    </div>
                </Link>
                <Badge badgeContent={favourites} color="primary">
                    <Link href="/favourites">
                        <div>
                            <Typography>Favourites</Typography>
                        </div>
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
                width: 100%;
                margin-top: 30px;
                display: flex;
                justify-contents: space-evenly;
                border-bottom: 2px solid #ef5ba1;
            }
            
            header a:hover {
                font-weigth: bold;
                color: lightgrey;
            }
            footer {
                padding: 1em;
            }
            h1 {
                color: #ef5ba1;
            }
            div{
                margin: 0 7px 10px 10px;
                cursor: pointer;
            }
        `}</style>
    </div>
)