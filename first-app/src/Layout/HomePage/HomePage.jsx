import { useEffect, useState } from "react";
import Card from "../Card/Card";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import axios from 'axios'
import RandomButtonCard from "../Card/RandomButtonCard";
const baseUrl = "https://dummyjson.com/quotes/random"

function HomePage() {

    const [randomQuote, setRandomQuote] = useState("Загрузка...");
    const [randomAuthor, setRandomAuthor] = useState("Загрузка...");

    useEffect(() => {
        axios.get(baseUrl)
            .then(res => {
                setRandomQuote(res.data.quote);
                setRandomAuthor(res.data.author);
            })
    }, [])

    return (
        <div style={{ minHeight: "100vh" }} className="d-flex align-items-center justify-content-center flex-column gap-5">
            <div className="d-flex align-items-center justify-content-center flex-column">
                <h1>Рандомная карточка</h1>
                <Card quote={randomQuote}
                    author={randomAuthor} />
            </div>
            <div className="d-flex align-items-center justify-content-center flex-column">
                <h1>Рандомная карточка с кнопкой обновления</h1>
                <RandomButtonCard />
            </div>
        </div>
    )
}

export default HomePage;