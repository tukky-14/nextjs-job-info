import Header from '@/components/Header';
import Container from '@/components/Container';
import Link from 'next/link';
import holiday from '../img/holiday.png';
import ascii from '../img/ascii.png';
import http from '../img/http.png';
import pixels from '../img/pixels.png';
import inch from '../img/inch.png';
import os from '../img/os.png';
import ad from '../img/ad.png';
import markdown from '../img/markdown.png';
import license from '../img/license.png';
import encoding from '../img/encoding.png';

const infoList = [
    {
        title: '祝日',
        href: '/holiday',
        imageSrc: holiday.src,
    },
    {
        title: 'アスキーコード',
        href: '/ascii',
        imageSrc: ascii.src,
    },
    {
        title: 'HTTPステータスコード',
        href: '/http',
        imageSrc: http.src,
    },
    {
        title: 'ディスプレイ解像度',
        href: '/pixels',
        imageSrc: pixels.src,
    },
    {
        title: 'デバイスサイズ',
        href: '/inch',
        imageSrc: inch.src,
    },
    {
        title: 'OSバージョン',
        href: '/os',
        imageSrc: os.src,
    },
    {
        title: '西暦和暦',
        href: '/ad',
        imageSrc: ad.src,
    },
    {
        title: 'マークダウン記法',
        href: '/markdown',
        imageSrc: markdown.src,
    },
    {
        title: 'ライセンス',
        href: '/license',
        imageSrc: license.src,
    },
    {
        title: '文字エンコーディング',
        href: '/encoding',
        imageSrc: encoding.src,
    },
];

export default function Home() {
    return (
        <Container>
            <Header title="仕事でよく使うやつ" />
            <div className="px-6 grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3">
                {infoList.map((info) => (
                    <div key={info.title}>
                        <Link
                            href={info.href}
                            className="group relative flex h-60 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg"
                        >
                            <img
                                src={info.imageSrc}
                                alt="by Austin Wade"
                                className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                            />
                            <div className="relative flex w-full flex-col rounded-lg bg-white p-4 text-center">
                                <span className="text-lg font-bold text-gray-600 lg:text-xl">
                                    {info.title}
                                </span>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </Container>
    );
}
