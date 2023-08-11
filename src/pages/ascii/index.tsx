import { useEffect, useState } from 'react';
import axios from 'axios';
import Header from '@/components/Header';
import BackButton from '@/components/BackButton';
import Container from '@/components/Container';

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
        <Container>
            <Header title="アスキーコード" />
            <table className="table-auto m-auto mb-5">
                <div className="flex text-center font-bold">
                    <p className="w-20 sm:w-40 py-1">文字</p>
                    <p className="w-20 sm:w-40 py-1">10進数</p>
                    <p className="w-20 sm:w-40 py-1">16進数</p>
                </div>
                <div className="h-96 overflow-scroll">
                    <tbody>
                        {asciiCodes.map((asciiCode) => (
                            <tr key={asciiCode.decimal}>
                                <td className="w-20 sm:w-40 text-center px-4 py-1 border-b">
                                    {asciiCode.string}
                                </td>
                                <td className="w-20 sm:w-40 text-center px-4 py-1 border-b">
                                    {asciiCode.decimal}
                                </td>
                                <td className="w-20 sm:w-40 text-center px-4 py-1 border-b">
                                    {asciiCode.hexadecimal}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </div>
            </table>
            <BackButton />
        </Container>
    );
}
