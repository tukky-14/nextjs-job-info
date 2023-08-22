import { useState, useEffect } from 'react';
import axios from 'axios';
import BackButton from '@/components/BackButton';
import Header from '@/components/Header';
import Container from '@/components/Container';

type AdList = {
    ad: number;
    jc: string;
};

export default function Ad() {
    const [adList, setAdList] = useState<AdList[]>([]);

    useEffect(() => {
        (async () => {
            const { data } = await axios.get('/json/ad.json');
            setAdList(data);
        })();
    }, []);

    return (
        <Container>
            <Header title="西暦和暦" />
            <div className="w-80 m-auto">
                <div className="flex items-center font-bold">
                    <div className="w-40 text-center">西暦</div>
                    <div className="w-40 text-center">和暦</div>
                </div>
                <div className="h-96 overflow-scroll">
                    {adList.map((ad) => (
                        <div
                            key={ad.ad}
                            className="flex items-center justify-between border-b border-gray-200 py-4 text-sm sm:text-base"
                        >
                            <div className="flex items-center">
                                <div className="w-40 text-center font-medium">{ad.ad}</div>
                                <div className="w-40 text-center font-medium">{ad.jc}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <BackButton />
        </Container>
    );
}
