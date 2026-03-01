function Card({ quote, author, onRefresh, withDelay }) {
    return (
        <div className="card" style={{ width: "18rem" }}>
            <div className="card-header">
                Quote
            </div>
            <div className="card-body">
                <figure>
                    <blockquote className="blockquote">
                        <p>{quote}</p>
                    </blockquote>
                    <figcaption className="blockquote-footer">
                        {author}
                    </figcaption>
                </figure>

                {onRefresh && <div className="d-flex justify-content-center">
                    <button onClick={onRefresh} type="button" className="btn btn-primary">Refresh</button>
                </div>}

            </div>
        </div>
    )
}

export default Card;