import Header from '@/components/Header';
import BackButton from '@/components/BackButton';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { API_ENDPOINT } from '@/consts/api';
import Container from '@/components/Container';
import { MaterialSymbolsContentCopyOutline } from '@/components/MaterialSymbolsContentCopyOutline';

export default function Holiday() {
    const [years, setYears] = useState<string[]>([]);
    const [holidays, setHolidays] = useState([{ date: '', name: '' }]);
    const [selectHolidays, setSelectHolidays] = useState([{ date: '', name: '' }]);

    useEffect(() => {
        (async () => {
            // 祝日取得
            const { data } = await axios.get(API_ENDPOINT.HOLIDAYS_JP);
            const holidays: any = Object.entries(data).map(([date, name]) => ({
                date: date.replace(/-/g, '/'),
                name,
            }));
            setHolidays(holidays);

            // 重複を削除した年を取得
            const years = holidays.map((holiday: any) => holiday.date.slice(0, 4));
            const uniqueYears = Array.from(new Set(years)) as string[];
            setYears(uniqueYears);

            // 祝日初期表示
            setSelectHolidays(
                holidays.filter((holiday: any) => holiday.date.slice(0, 4) === uniqueYears[0])
            );
        })();
    }, []);

    /**
     * 年クリックイベント
     * @param e
     */
    const handleYearClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        const year = e.currentTarget.textContent;
        setSelectHolidays(holidays.filter((holiday: any) => holiday.date.slice(0, 4) === year));
    };

    return (
        <Container>
            <Header title="祝日" />
            <div className="m-auto w-full sm:w-2/3 text-sm font-medium text-center">
                <ul className="flex justify-center flex-wrap mb-2">
                    {years.map((year) => (
                        <li className="mr-2" key={year}>
                            <button
                                className="inline-block p-2 border-b-2 border-transparent rounded-t-lg hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300"
                                onClick={handleYearClick}
                            >
                                {year}
                            </button>
                        </li>
                    ))}
                </ul>
                <table className="table-auto m-auto relative">
                    <MaterialSymbolsContentCopyOutline className="absolute -top-5 right-0 text-xl text-blue-600 hover:text-blue-400" />
                    <thead>
                        <tr>
                            <th className="py-1 border-b border-gray-800">日付</th>
                            <th className="py-1 border-b border-gray-800">名称</th>
                        </tr>
                    </thead>
                    <tbody>
                        {selectHolidays.map((holiday: any) => (
                            <tr key={holiday.date}>
                                <td className="w-40 text-center px-4 py-1 border-b">
                                    {holiday.date}
                                </td>
                                <td className="w-60 text-center px-4 py-1 border-b">
                                    {holiday.name}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <BackButton />
        </Container>
    );
}
