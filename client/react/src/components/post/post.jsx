
const post = ({ fil,title, author, time, pos, url }) => {
    if (pos === 0) {
        return (
            <>
                <div className="card w-75 h-30 text-end bg-dark mx-5 my-5 d-flex flex-row">
                    <div class="card-img-wrap img"><img class="card-img-top h-100" src={url} alt="Card image cap" /></div>
                    <div className="card-body">
                        <h5 className="card-title text-white heading">{title}</h5>
                        <p className="card-text text-white-50 text-end mb-0">- {author}</p>
                        <p className="card-text text-white-50 text-end fw-bolder mb-5">{time}</p>
                        <a href="#" class="btn btn-info">Read More</a>
                    </div>
                </div>
            </>
        )
    }
    else {

        return (
            <>
                <div className="card w-25 h-50 text-center bg-dark mx-5 my-5" id="card">
                    <div class="card-img-wrap"><img class="card-img-top" src={url} alt="Card image cap" /></div>
                    <div className="card-body">
                        <h5 className="card-title text-white heading">{title}</h5>
                        <p className="card-text text-white-50 text-end mb-0">- {author}</p>
                        <p className="card-text text-white-50 text-end fw-bolder mb-5">{time}</p>
                        <a href="#" class="btn btn-info">Read More</a>
                    </div>
                </div>
            </>
        );
    }
}

export default post
