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
                    <a>Movies Rental</a>
                </Link>
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
                background: #ef5ba1;
                padding-left: 40%;
            }
            header a {
                color: #000;
                opacity: 0.5;
                text-decoration: none;
                margin: 20px;
                font-size: 1.5em;
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