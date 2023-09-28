import { useState, useEffect } from 'react';
import axios from 'axios';
import BackButton from '@/components/BackButton';
import Header from '@/components/Header';
import Container from '@/components/Container';

type HttpCode = {
    encoding: string;
    description: string;
};

export default function Encoding() {
    const [httpCodes, setHttpCodes] = useState<HttpCode[]>([]);

    useEffect(() => {
        (async () => {
            const { data } = await axios.get('/json/encoding.json');
            setHttpCodes(data);
        })();
    }, []);

    return (
        <Container>
            <Header title="文字エンコーディング" />
            <div className="pb-1 flex items-center font-bold border-b border-gray-800">
                <div className="w-40 sm:w-60">文字エンコーディング</div>
                <div className="flex-1 ml-2 w-full sm:text-left">説明</div>
            </div>
            <div className="h-96 overflow-scroll">
                {httpCodes.map((httpCode) => (
                    <div
                        key={httpCode.encoding}
                        className="flex items-center justify-between border-b border-gray-200 py-4 text-sm sm:text-base"
                    >
                        <div className="flex items-center">
                            <div className="w-40 sm:w-60 font-medium">{httpCode.encoding}</div>
                            <div className="flex-1 ml-2">{httpCode.description}</div>
                        </div>
                    </div>
                ))}
            </div>
            <BackButton />
        </Container>
    );
}
