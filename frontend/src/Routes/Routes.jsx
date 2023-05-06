import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from '../Pages/Home/Home'

function Router() {

    return (
        <section>
            <BrowserRouter>
                <Routes>
                    <Route exact path='/' element={<Home />} ></Route>
                </Routes>
            </BrowserRouter>
        </section>
    )
}

export default Router