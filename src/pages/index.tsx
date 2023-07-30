import Head from 'next/head';
import { Inter } from '@next/font/google';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
    return (
        <>
            <Head>
                <title>Job Info</title>
                <meta name="description" content="主に開発の仕事で使える情報をまとめました。" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
        </>
    );
}
