import React from "react";

const Card = () => {
    return (
        
        <div className="card d-flex text-center col-md-1 col-sm-1" style={{width: "18rem"}}>
            <img src="https://image.urlaubspiraten.de/1024/image/upload/v1665741735/mediavault_images/shutterstock_1504345343_stujj1.jpg" className="card-img-top" alt="..."></img>
                <div className="card-body">
                    <h5 className="card-title">Aurora Boreal</h5>
                    <p className="card-text">
                    Las auroras boreales en Noruega iluminan el cielo con espectaculares luces verdes y púrpuras, un fenómeno natural fascinante que atrae a viajeros de todo el mundo.</p>
                    <a href="#" className="btn btn-success opacity-75">Find Out More!</a>
                </div>
        </div>
       
    );
}

export default Card;