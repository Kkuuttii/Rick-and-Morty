import { Routes, Route } from "react-router-dom";
import Header from "../../components/Header/Header";
import MainPage from "../MainPage/MainPage";

function App() {
    return (
        <>
            <Header/>
            <MainPage/>
            <Routes>
                {/* <Route path="/" element={<Albom />} />
                <Route path="/" element={<Test />} />
                <Route path="/" element={<About />} /> */}
            </Routes>

        </>

    )
}
export default App;