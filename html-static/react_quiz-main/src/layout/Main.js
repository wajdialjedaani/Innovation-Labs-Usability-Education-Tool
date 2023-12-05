const Main = (props) => {
    return (
        <>
            <header className="p-3 d-flex justify-content-center main-header">
                <h1 className="text-white">Quiz</h1>
            </header>{" "}
            {props.children}
        </>
    );
};

export default Main;
