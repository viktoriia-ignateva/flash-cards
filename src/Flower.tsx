export default function Flower() {
    // rounded-full translate-x-2/4 translate-y-1/2
    return (
        <div className="flex justify-center items-center h-screen bg-blue-100">
            <div className="relative w-32 h-32 border-2 border-rose-600">
                <div
                    className="absolute w-12 h-12 bg-pink-400 rounded-full origin-top-left rotate-[0deg] top-1/2 left-1/2"></div>
                <div
                    className="absolute w-12 h-12 bg-pink-400 rounded-full origin-top-left rotate-[72deg] top-1/2 left-1/2"></div>
                <div
                    className="absolute w-12 h-12 bg-pink-400 rounded-full origin-top-left rotate-[144deg] top-1/2 left-1/2"></div>
                <div
                    className="absolute w-12 h-12 bg-pink-400 rounded-full origin-top-left rotate-[216deg] top-1/2 left-1/2"></div>
                <div
                    className="absolute w-12 h-12 bg-pink-400 rounded-full origin-top-left rotate-[288deg] top-1/2 left-1/2"></div>
                <div
                    className="absolute w-8 h-8 bg-yellow-400 rounded-full transform translate-x-[-50%] translate-y-[-50%] top-1/2 left-1/2"></div>
            </div>
        </div>
    )
}