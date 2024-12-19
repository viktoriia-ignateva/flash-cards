import {useEffect, useState} from "react";

export default function FlashCardArea() {
    const [showBackCard, setShowBackCard] = useState(false)
    const [showingCardId, setShowingCardId] = useState(1)
    const [words, setWords] = useState([])

    useEffect(() => {
        (async function getWords() {
            const url = "http://localhost:3000/words";

            try {
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error(`Response status: ${response.status}`);
                }

                const words = await response.json();
                setWords(words)
                console.log(words);
            } catch (error) {
                console.error(error.message);
            }
        })()
    }, [])

    function showWord(id: number, language: 'en' | 'de'): string {
        if (words.length > 0) {
            const word = words.filter((word) => word.id === id)[0]
            return word[language]
        } else {
            return "Loading..."
        }
    }

    return (
        <>
            <div
                className="relative flex flex-col h-80 w-80 mt-24 items-center bg-sky-200 border border-slate-400 rounded-lg">
                <div className="pt-8">{showWord(showingCardId, "de")}</div>
                {!showBackCard &&
                    <button className="absolute -bottom-4 px-4 py-2 bg-cyan-300 border border-slate-400 rounded-lg"
                            onClick={() => setShowBackCard(true)}> Show Answer
                    </button>}
                {showBackCard &&
                    <div
                        className="absolute bottom-0 pt-4 flex h-40 w-full justify-center bg-sky-500 border border-slate-400 rounded-lg">
                        {showWord(showingCardId, "en")}
                    </div>}
            </div>
            {showBackCard && <button className="px-4 py-2 mt-4 bg-cyan-300 border border-slate-400 rounded-lg"
                                     onClick={() => {
                                         setShowBackCard(false)
                                         setShowingCardId(showingCardId + 1)
                                     }}>Next
            </button>}
        </>
    )
}