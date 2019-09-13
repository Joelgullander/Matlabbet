const Container = ({ children }) => {
    return (
        <div className="c-container">
            {children}
            <style jsx>{`
                .c-container {
                    max-width: 1200px;
                    margin: 0 auto;
                    flex: 1;
                }
            `}</style>
        </div>
    )
}

export default Container;