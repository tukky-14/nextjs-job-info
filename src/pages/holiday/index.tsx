import Header from '@/components/Header';
import BackButton from '@/components/BackButton';
import { use, useEffect, useState } from 'react';
import axios from 'axios';

export default function Holiday() {
    const [holidays, setHolidays] = useState([{ date: '', name: '' }]);

    useEffect(() => {
        (async () => {
            const { data } = await axios.get('https://holidays-jp.github.io/api/v1/date.json');
            const result: any = Object.entries(data).map(([date, name]) => ({
                date: date.replace(/-/g, '/'),
                name,
            }));
            setHolidays(result);
        })();
    }, []);

    return (
        <>
            <div className="bg-white py-6 sm:py-8 lg:py-12">
                <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                    <Header title="祝日" />
                    <table className="table-auto m-auto my-5">
                        <thead>
                            <tr>
                                <th className="bg-gray-200 py-1">日付</th>
                                <th className="bg-gray-200 py-1">名称</th>
                            </tr>
                        </thead>
                        <tbody>
                            {holidays.map((holiday: any) => (
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
                    <BackButton />
                </div>
            </div>
        </>
    );
}
