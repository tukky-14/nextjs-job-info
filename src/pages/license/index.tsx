import { useState, useEffect } from 'react';
import axios from 'axios';
import BackButton from '@/components/BackButton';
import Header from '@/components/Header';
import Container from '@/components/Container';

type licenseList = {
    name: string;
    overview: string;
    conditions: string;
    usage: string;
};

export default function License() {
    const [licenseList, setLicenseList] = useState<licenseList[]>([]);

    useEffect(() => {
        (async () => {
            const { data } = await axios.get('/json/license.json');
            setLicenseList(data);
        })();
    }, []);

    return (
        <Container>
            <Header title="システムのライセンス" />
            <div className="m-auto flex font-bold">
                <p className="w-24 sm:w-96 border-b border-gray-800">ライセンス名</p>
                <p className="pl-2 flex-1 border-b border-gray-800">概要</p>
                {/* <p className="border-b border-gray-800">条件</p> */}
                {/* <p className="border-b border-gray-800">使用用途</p> */}
            </div>
            <div className="m-auto h-96 overflow-scroll">
                {licenseList.map((license) => (
                    <div className="h-20 flex text-sm sm:text-base" key={license.name}>
                        <p className="w-24 sm:w-96 border-b">{license.name}</p>
                        <p className="pl-2 flex-1 border-b">{license.overview}</p>
                        {/* <p className="border-b">{license.conditions}</p> */}
                        {/* <p className="border-b">{license.usage}</p> */}
                    </div>
                ))}
            </div>
            <BackButton />
        </Container>
    );
}
