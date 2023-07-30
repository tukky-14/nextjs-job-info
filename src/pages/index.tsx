import Header from '@/components/Header';
import Link from 'next/link';
import info from '../img/info.png';

const infoList = [
    {
        title: 'Business Causual',
        href: '/',
        imageSrc: info.src,
    },
    {
        title: 'Business Causual',
        href: '/',
        imageSrc: info.src,
    },
    {
        title: 'Business Causual',
        href: '/',
        imageSrc: info.src,
    },
    {
        title: 'Business Causual',
        href: '/',
        imageSrc: info.src,
    },
    {
        title: 'Business Causual',
        href: '/',
        imageSrc: info.src,
    },
    {
        title: 'Business Causual',
        href: '/',
        imageSrc: info.src,
    },
    {
        title: 'Business Causual',
        href: '/',
        imageSrc: info.src,
    },
    {
        title: 'Business Causual',
        href: '/',
        imageSrc: info.src,
    },
];

export default function Home() {
    return (
        <>
            <div className="bg-white py-6 sm:py-8 lg:py-12">
                <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                    <Header />
                    <div className="grid gap-4 sm:grid-cols-2 md:gap-6 lg:grid-cols-3 xl:grid-cols-4">
                        {infoList.map((info) => (
                            <div key={info.title}>
                                <Link
                                    href={info.href}
                                    className="group relative flex h-60 items-end overflow-hidden rounded-lg bg-gray-100 p-4 shadow-lg"
                                >
                                    <img
                                        src={info.imageSrc}
                                        loading="lazy"
                                        alt="by Austin Wade"
                                        className="absolute inset-0 h-full w-full object-cover object-center transition duration-200 group-hover:scale-110"
                                    />

                                    <div className="relative flex w-full flex-col rounded-lg bg-white p-4 text-center">
                                        <span className="text-lg font-bold text-gray-800 lg:text-xl">
                                            {info.title}
                                        </span>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
