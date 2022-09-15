const MyApp = () => {
    const [show, setShow] = React.useState(true);
    return (
        <>
            {
                show ? <h1>Hello, world!</h1> : <div>bye</div>
            }
            <button onClick={() => setShow(!show)}>ㅇㅇ</button>
        </>
    );
}