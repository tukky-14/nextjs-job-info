import { useState, useEffect } from 'react';
import axios from 'axios';
import BackButton from '@/components/BackButton';
import Header from '@/components/Header';
import Container from '@/components/Container';

type Pixels = {
    resolution: string;
    name: string;
    pixels: string;
    usage: string;
};

export default function Pixels() {
    const [pixels, setPixels] = useState<Pixels[]>([]);

    useEffect(() => {
        (async () => {
            const { data } = await axios.get('/json/pixels.json');
            setPixels(data);
        })();
    }, []);

    return (
        <Container>
            <Header title="ディスプレイ解像度" />
            <div className="max-w-md m-auto flex justify-center items-center font-bold">
                <p className="w-40 text-center">解像度</p>
                <p className="w-40 text-center">名称</p>
                <p className="w-40 text-center">画素数(万)</p>
            </div>
            <div className="max-w-md m-auto h-96 overflow-scroll">
                {pixels.map((pixel) => (
                    <div
                        className="h-8 flex justify-center items-center text-sm sm:text-base"
                        key={pixel.name}
                    >
                        <p className="w-40 text-center border-b">{pixel.resolution}</p>
                        <p className="w-40 text-center border-b">{pixel.name}</p>
                        <p className="w-40 text-center border-b">{pixel.pixels}</p>
                    </div>
                ))}
            </div>
            <BackButton />
        </Container>
    );
}
