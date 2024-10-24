import React from "react";

const Hero = () => {
    return (
        <div className="d-flex mt-5">
        <div className="container-fluid py-5">
            <div className="text-bg-success bg-opacity-50 mx-4">
            <h1 className="display-5 fw-bold text-black py-3 px-4">Lugares en el mundo</h1>
            <p className="col-md-12 fs-4 text-black py-3 px-4">El mundo ofrece maravillas: desde las pirámides de Egipto, la Gran Muralla China, hasta las auroras boreales en Noruega. Lugares únicos que reflejan culturas, naturaleza y la historia de la humanidad.</p>
            <button className="btn btn-success opacity-75 btn-lg m-3" type="button">Call to action!</button>
            </div>
        </div>
        </div>
    );
}
    export default Hero;