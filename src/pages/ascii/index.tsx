import { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '@/components/Header';
import BackButton from '@/components/BackButton';

interface AsciiCode {
    string: string;
    decimal: string;
    hexadecimal: string;
}

export default function Ascii() {
    const [asciiCodes, setAsciiCodes] = useState<AsciiCode[]>([]);

    /**
     * 初期処理
     */
    useEffect(() => {
        (async () => {
            // 祝日取得
            const { data } = await axios.get<AsciiCode[]>('/ascii.json');
            setAsciiCodes(data);
        })();
    }, []);

    return (
        <>
            <div className="bg-white py-6 sm:py-8 lg:py-12">
                <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                    <Header title="アスキーコード" />
                    <table className="table-auto m-auto mb-5">
                        <thead>
                            <tr>
                                <th className="py-1">文字</th>
                                <th className="py-1">10進数</th>
                                <th className="py-1">16進数</th>
                            </tr>
                        </thead>
                        <tbody>
                            {asciiCodes.map((asciiCode) => (
                                <tr key={asciiCode.decimal}>
                                    <td className="w-40 text-center px-4 py-1 border-b">
                                        {asciiCode.string}
                                    </td>
                                    <td className="w-40 text-center px-4 py-1 border-b">
                                        {asciiCode.decimal}
                                    </td>
                                    <td className="w-40 text-center px-4 py-1 border-b">
                                        {asciiCode.hexadecimal}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <BackButton />
                </div>
            </div>
        </>
    );
}
