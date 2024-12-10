import {useState} from "react";

export default function FlashCardArea() {
    const [showBackCard, setShowBackCard] = useState(false)
    const [showingCardId, setShowingCardId] = useState(1)
    const wordsData = [
        {
            id: 1,
            de: "Apfel",
            en: "Apple"
        },
        {
            id: 2,
            de: "Gurke",
            en: "Cucumber"
        }
    ]

    function showWord(id: number, language: 'en' | 'de'): string {
        const word = wordsData.filter((word) => word.id === id)[0]
        return word[language]
    }

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
                {showWord(showingCardId, "de")}
                <button onClick={() => setShowBackCard(true)}>Show Back Card</button>
            </div>
            {showBackCard && <div style={{
                backgroundColor: "lightblue",
                width: "300px",
                height: "300px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center"
            }}>
                {showWord(showingCardId, "en")}
            </div>}
            <div style={{display: "flex", justifyContent: "space-between"}}>
                <button onClick={() => {
                    setShowBackCard(false)
                    setShowingCardId(showingCardId + 1)
                }}>Next
                </button>
            </div>
        </div>
    )
}