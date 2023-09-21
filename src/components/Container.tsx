type Children = {
    children: React.ReactNode;
};

const Container = (props: Children) => {
    const { children } = props;
    return (
        <div className="bg-white py-4">
            <div className="mx-auto max-w-screen-lg pb-6 px-4 md:px-8 text-gray-600">
                {children}
            </div>
        </div>
    );
};

export default Container;
