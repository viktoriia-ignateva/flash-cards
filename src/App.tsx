import './App.css'
import Header from "./Header.tsx";
import FlashCardArea from "./FlashCardArea.tsx";

function App() {
  return (
      <div style={{display:"flex", flexDirection:"column", alignItems:"center"}}>
          <Header></Header>
          <FlashCardArea></FlashCardArea>
      </div>
  )
}

export default App
