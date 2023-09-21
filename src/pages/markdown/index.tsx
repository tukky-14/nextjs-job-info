import { useState, useEffect } from 'react';
import axios from 'axios';
import BackButton from '@/components/BackButton';
import Header from '@/components/Header';
import Container from '@/components/Container';

type markdown = {
    notation: string;
    description: string;
    example: string;
};

export default function Http() {
    const [markdowns, setMarkdowns] = useState<markdown[]>([]);

    useEffect(() => {
        (async () => {
            const { data } = await axios.get('/json/markdown.json');
            setMarkdowns(data);
        })();
    }, []);

    return (
        <Container>
            <Header title="マークダウン記法" />
            <div className="max-w-lg m-auto">
                <div className="flex items-center font-bold">
                    <div className="w-20 sm:w-60 ml-2 text-center sm:text-left">説明</div>
                    <div className="flex-1 ml-2 text-center sm:text-left">記法例</div>
                </div>
                <div className="h-96 overflow-scroll">
                    {markdowns.map((markdown) => (
                        <div
                            key={markdown.notation}
                            className="flex items-center justify-between border-b border-gray-200 py-4 text-sm sm:text-base"
                        >
                            <div className="flex items-center">
                                <div className="w-20 sm:w-60 ml-2">{markdown.description}</div>
                                <div className="flex-1 ml-2">{markdown.example}</div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <BackButton />
        </Container>
    );
}
