import Header from '@/components/Header';
import BackButton from '@/components/BackButton';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { API_ENDPOINT } from '@/consts/api';
import Container from '@/components/Container';

type OsType = {
    version: string;
    name?: string;
    release: string;
    addFunction: string;
};

const osList = ['WindowsOS', 'MacOS', 'iOS', 'AndroidOS'];

export default function Os() {
    const [selectOs, setselectOs] = useState<string | undefined>('WindowsOS');
    const [osData, setOsData] = useState<OsType[]>([
        { version: '', name: '', release: '', addFunction: '' },
    ]);

    useEffect(() => {
        (async () => {
            const {
                data,
            }: { data: Record<string, { name: string; release: string; addFunction: string }> } =
                await axios.get(`/${selectOs?.toLowerCase()}.json`);
            const osData: OsType[] = Object.entries(data).map(([version, data]) => ({
                version,
                name: data.name,
                release: data.release,
                addFunction: data.addFunction,
            }));
            setOsData(osData);
        })();
    }, [selectOs]);

    /**
     * OSクリックイベント
     * @param e
     */
    const handleOsClick = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        const os = e.currentTarget.textContent?.toLowerCase();
        setselectOs(os);
    };

    return (
        <Container>
            <Header title="OSバージョン" />
            <div className="m-auto w-full sm:w-2/3 text-sm font-medium text-center">
                <ul className="flex justify-center flex-wrap mb-2">
                    {osList.map((os) => (
                        <li className="mr-2" key={os}>
                            <button
                                className="inline-block p-2 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                                onClick={handleOsClick}
                            >
                                {os}
                            </button>
                        </li>
                    ))}
                </ul>
                <div className="flex justify-center font-bold">
                    <p className="w-20 py-1">バージョン</p>
                    {selectOs === 'macos' && <p className="w-40 py-1">名称</p>}
                    <p className="w-40 py-1">リリース</p>
                    <p className="w-60 py-1">追加機能</p>
                </div>
                <div className="overflow-scroll h-96">
                    <table className="table-auto m-auto">
                        <tbody className="text-xs sm:text-baseoverflow-scroll h-96">
                            {osData.map((os: any) => (
                                <tr key={os.version}>
                                    <td className="w-20 text-center px-4 py-1 border-b">
                                        {os.version}
                                    </td>
                                    {selectOs === 'macos' && (
                                        <td className="w-40 text-center px-4 py-1 border-b">
                                            {os.name}
                                        </td>
                                    )}
                                    <td className="w-40 text-center px-4 py-1 border-b">
                                        {os.release}
                                    </td>
                                    <td className="w-60 text-center px-4 py-1 border-b">
                                        {os.addFunction}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
            <BackButton />
        </Container>
    );
}
