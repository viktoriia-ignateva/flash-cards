export default function FlashCardArea() {
    return (
        <div>
            <div style={{
                backgroundColor: "darkgray",
                width: "300px",
                height: "300px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
            }}>
                Front Card
                <button>Show Back Card</button>
            </div>
            <div style={{
                backgroundColor: "lightblue",
                width: "300px",
                height: "300px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
            }}>
                Back Card
            </div>
            <div style={{display: "flex", justifyContent: "space-between"}}>
                <button>Again</button>
                <button>Hard</button>
                <button>Good</button>
                <button>Easy</button>
            </div>
        </div>
    )
}