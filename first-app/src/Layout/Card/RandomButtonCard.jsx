import Card from "./Card";
import { useEffect, useState } from "react";
import axios from 'axios'

let baseUrl = "https://dummyjson.com/quotes/random"

function RandomButtonCard() {
    const [randomQuote, setRandomQuote] = useState("Загрузка...");
    const [randomAuthor, setRandomAuthor] = useState("Загрузка...");

    useEffect(() => {
        axios.get(baseUrl)
            .then(res => {
                setRandomQuote(res.data.quote);
                setRandomAuthor(res.data.author);
            })
    }, [])

    function onRefresh() {
        setRandomQuote("Загрузка...");
        setRandomAuthor("Загрузка...");

        axios.get(baseUrl)
            .then(res => {
                setRandomQuote(res.data.quote);
                setRandomAuthor(res.data.author);
            })
    }

    return (
        <Card quote={randomQuote}
            author={randomAuthor}
            onRefresh={onRefresh} />
    )
}

export default RandomButtonCard;