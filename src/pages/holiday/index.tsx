import Header from '@/components/Header';
import BackButton from '@/components/BackButton';

export default function Home() {
    return (
        <>
            <div className="bg-white py-6 sm:py-8 lg:py-12">
                <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
                    <Header title="祝日" />
                    <BackButton />
                </div>
            </div>
        </>
    );
}
