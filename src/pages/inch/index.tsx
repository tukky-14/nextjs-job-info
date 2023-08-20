import { useState, useEffect } from 'react';
import axios from 'axios';
import BackButton from '@/components/BackButton';
import Header from '@/components/Header';
import Container from '@/components/Container';

type inchList = {
    inch: string;
    width: string;
    height: string;
    diagonal: string;
};

export default function Inch() {
    const [inchList, setInchList] = useState<inchList[]>([]);

    useEffect(() => {
        (async () => {
            const { data } = await axios.get('/json/inch.json');
            setInchList(data);
        })();
    }, []);

    return (
        <Container>
            <Header title="デバイスサイズ" />
            <div className="max-w-md m-auto flex justify-center items-center font-bold">
                <p className="w-40 text-center">インチ</p>
                <p className="w-40 text-center">幅</p>
                <p className="w-40 text-center">高さ</p>
                <p className="w-40 text-center">対角線</p>
            </div>
            <div className="max-w-md m-auto h-96 overflow-scroll">
                {inchList.map((inch) => (
                    <div
                        className="h-8 flex justify-center items-center text-sm sm:text-base"
                        key={inch.inch}
                    >
                        <p className="w-40 text-center border-b">{inch.inch}</p>
                        <p className="w-40 text-center border-b">{inch.width}</p>
                        <p className="w-40 text-center border-b">{inch.height}</p>
                        <p className="w-40 text-center border-b">{inch.diagonal}</p>
                    </div>
                ))}
            </div>
            <BackButton />
        </Container>
    );
}
