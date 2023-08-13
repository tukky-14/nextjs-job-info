import Link from 'next/link';

const BackButton = () => {
    return (
        <div className="w-full text-center">
            <Link
                href="/"
                className="inline-flex items-center px-6 py-2 my-8 text-gray-500 bg-gray-100 rounded-md hover:bg-gray-200 hover:text-gray-600"
            >
                戻る
            </Link>
        </div>
    );
};

export default BackButton;
