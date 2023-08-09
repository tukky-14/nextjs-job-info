type Children = {
    children: React.ReactNode;
};

const Container = (props: Children) => {
    const { children } = props;
    return (
        <div className="bg-white py-4">
            <div className="mx-auto max-w-screen-2xl px-4 md:px-8">{children}</div>
        </div>
    );
};

export default Container;
