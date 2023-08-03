import Header from '@/components/Header';
import BackButton from '@/components/BackButton';
import { use, useEffect, useState } from 'react';
import axios from 'axios';

export default function Holiday() {
    const [holidays, setHolidays] = useState({});

    useEffect(() => {
        (async () => {
            const { data } = await axios.get('https://holidays-jp.github.io/api/v1/date.json');
            console.log('data:', data);
        })();
    });

    return (
        <>
            <div className="bg-white py-6 sm:py-8 lg:py-12">
                <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                    <Header title="祝日" />
                    <BackButton />
                </div>
            </div>
        </>
    );
}
