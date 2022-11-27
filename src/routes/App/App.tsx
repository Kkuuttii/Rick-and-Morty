import { Routes, Route } from "react-router-dom";
import MainPage from "../MainPage/MainPage";
import Quiz from "../Quiz/Quiz"
import Library from "../Library/Library";
import About from "../About/About";
import MainLayout from "../../components/MainLayout/MainLayout";

function App() {
    return (
        <>
            <Routes>
                <Route element={<MainLayout/>}> 
                    <Route path="/" element={<MainPage/>} />
                    <Route path="/quiz" element={<Quiz />} />
                    <Route path="/library" element={<Library />} />
                    <Route path="/about" element={<About/>} />
                </Route>
                {/* <Route path="/" element={<About />} /> */}
            </Routes>

        </>

    )
}
export default App;