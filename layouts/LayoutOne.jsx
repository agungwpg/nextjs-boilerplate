
export default function LayoutOne({children}) {
    return (
        <div>
            {children}
            <style jsx>{`
                background-color: #444;
                padding: 0;
                margin: 0;
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                height: 100vh;
                width: 100%;
            `}</style>
        </div>
    )
}
