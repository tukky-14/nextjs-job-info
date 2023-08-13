import { useState, useEffect } from 'react';
import axios from 'axios';
import BackButton from '@/components/BackButton';
import Header from '@/components/Header';
import Container from '@/components/Container';

type HttpCode = {
    code: number;
    message: string;
};

export default function Http() {
    const [httpCodes, setHttpCodes] = useState<HttpCode[]>([]);

    useEffect(() => {
        (async () => {
            const { data } = await axios.get('/http.json');
            setHttpCodes(data);
        })();
    }, []);

    return (
        <Container>
            <Header title="HTTPステータスコード" />
            <div className="flex items-center font-bold">
                <div className="w-16 text-center">コード</div>
                <div className="ml-2">説明</div>
            </div>
            {httpCodes.map((httpCode) => (
                <div
                    key={httpCode.code}
                    className="flex items-center justify-between border-b border-gray-200 py-4 text-sm sm:text-base"
                >
                    <div className="flex items-center">
                        <div className="w-16 text-center font-medium">{httpCode.code}</div>
                        <div className="flex-1 ml-2">{httpCode.message}</div>
                    </div>
                </div>
            ))}
            <BackButton />
        </Container>
    );
}
