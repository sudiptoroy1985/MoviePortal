import Link from 'next/link';
import Head from 'next/head';
import Router from 'next/router';

export default({children, title}) => (
    <div className="root">
        <Head>
            <title>Movies Portal</title>
        </Head>
        <header>
                <Link href="/movies">
                    <a>Movies</a>
                </Link>
                <input type="text" />
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
                display: flex;
                justify-content: space-evenly;
                padding: 1em;
                font-size: 1.2rem;
                background: #ef5ba1;
            }
            header a {
                color: #fff;
                text-decoration: none;
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
        `}</style>
    </div>
)