import React, { useState } from "react";
import { Link } from "react-router-dom";
import Cart from "./Cart";
import Navbar from "./Navbar";

export default function Body() {
    const title = "C2001";
    const [image, setImage] = useState({
        imageDisplay: "http://localhost:3000/images/Z-1.webp",
    })
    const [quantity, setQuantity] = useState({
        price: 50,
        qte: 1
    })
    const [count, setCount] = useState(0);
    const [display, setDisplay] = useState(true)
    const stylesOpacity = {
        opacity: 0.5,
    }
    const style = {
        opacity: 1,
    }
    function changePic(e) {
        setImage(changePic => ({
            ...changePic,
            imageDisplay: e.target.src,
        }))
    }
    function sendData(e) {
        setQuantity(formData => ({
            ...formData,
            [e.target.name]: e.target.value
        }))
    }
    function increm() {
        setCount(count + 1)
    }
    function changeDisplay(){
        setDisplay(disp=>!disp)
    }
    return (
        <div>
            <Navbar
                number={count}
                change={changeDisplay}
            />
            <div className={display ? "disp" : ""}>
                <Cart
                    prix={quantity.price}
                    quantity={quantity.qte}
                    image={image.imageDisplay}
                    name={title}
                    change={changeDisplay}
                    number={count}
                />
            </div>
            <div className="container">
                <div className="bg-white mt-5">
                    <div className="row py-4 justify-content-center align-items-center container">
                        <div className="col-md-5 text-center m-3">
                            <img src={image.imageDisplay} className="img-fluid" alt="img-zellige" />
                            <div className="mt-5 text-center">
                                <img
                                    src="images/Z-1.webp"
                                    alt=""
                                    className="img-thumbnail pointer img-target"
                                    onClick={changePic}
                                    style={image.imageDisplay === "http://localhost:3000/images/Z-1.webp" ? style : stylesOpacity}
                                />
                                <img
                                    src="images/Z-2.webp"
                                    alt=""
                                    className="img-thumbnail ms-3 pointer img-target"
                                    onClick={changePic}
                                    style={image.imageDisplay === "http://localhost:3000/images/Z-2.webp" ? style : stylesOpacity}
                                />
                                <img
                                    src="images/2-3.webp"
                                    alt=""
                                    className="img-thumbnail ms-3 pointer img-target"
                                    onClick={changePic}
                                    style={image.imageDisplay === "http://localhost:3000/images/2-3.webp" ? style : stylesOpacity}
                                />
                            </div>
                        </div>
                        <div className="col-md-6 mt-3">
                            <h6 className="text-secondary">
                                Accueil / Interieur / {title}
                            </h6>
                            <h5>
                                <Link to="/" className="text-decoration-none text-dark">Ciment</Link>,
                                <Link to="/" className="text-decoration-none text-dark ms-1">Interieur</Link>
                            </h5>
                            <h3 className="mt-5">{title}</h3>
                            <div className="d-flex favoris">
                                <div className="ms-3">
                                    <i className="fa-regular fa-heart fs-5 text-danger"></i>
                                </div>
                                <div className="me-3">
                                    <strong>
                                        <p className="fs-6 ms-2">Ajouter au favoris</p>
                                    </strong>
                                </div>
                            </div>
                            <hr />
                            <p className="text-justify">
                                Le zellige, zellij, zillij, zillige, الزليج(alzzalij), sous sa forme contemporain, traditionnel ou encore classique est un produit artisanal du Maroc avec un dessin essentiellement géométrique utilisé pour protéger les sols et les murs jusqu'à hauteur d'homme, aussi appelé mosaique marocain.
                                le zellige est en fait, de carreaux de terre cuit de 5x5 à 10x10(cm) décoratifs et taillés à l'aide des marteaux par les zelligeurs.
                            </p>
                            <h6>Prix au mètre carré (m2)</h6>
                            <p>Carreaux ciment traditionnels | handmade tiles</p>
                            <hr />
                            <div className="pointer">
                                <i className="fa-solid fa-palette fs-4 pointer"></i> PERSONNALISER LES COULEURS
                            </div>
                            <hr />
                            <div className="d-flex justify-content-around mt-3 fs-4">
                                <p><strong>Prix: </strong></p>
                                <p><strong>50,00 €</strong></p>
                            </div>
                            <form>
                                <input
                                    type="hidden"
                                    value={quantity.price}
                                    name="price"
                                />
                                <div className="d-flex justify-content-around mt-3 fs-4">
                                    <p><strong>Quantité: </strong></p>
                                    <div className="input-group mb-3 w-25">
                                        <input
                                            type="number"
                                            min={1}
                                            className="form-control"
                                            name="qte"
                                            onChange={sendData}
                                            value={quantity.qte}
                                        />
                                    </div>
                                </div>
                                <div className="d-flex justify-content-around mt-3 fs-4">
                                    <p><strong>Total: </strong></p>
                                    <div className="input-group mb-3 w-25">
                                        <strong>{quantity.price * quantity.qte} €</strong>
                                    </div>
                                </div>
                                <div className="text-center mt-4">
                                    <button
                                        type="button"
                                        className="border-0 bg-danger shadow px-5 py-2 text-decoration-none text-white fs-4"
                                        onClick={increm}
                                    >
                                        &nbsp;Ajouter au panier&nbsp;
                                    </button>
                                </div>
                            </form>
                        </div>
                        <div className="col-md-12 mt-4 px-3">
                            <nav>
                                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                    <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab"
                                        data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home"
                                        aria-selected="true">Description</button>
                                    <button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab"
                                        data-bs-target="#nav-profile" type="button" role="tab"
                                        aria-controls="nav-profile" aria-selected="false">Livraison</button>
                                    <button className="nav-link" id="nav-contact-tab" data-bs-toggle="tab"
                                        data-bs-target="#nav-contact" type="button" role="tab"
                                        aria-controls="nav-contact" aria-selected="false">Avis</button>
                                </div>
                            </nav>
                            <div className="tab-content mt-3 ms-3" id="nav-tabContent">
                                <div className="tab-pane fade show active" id="nav-home" role="tabpanel"
                                    aria-labelledby="nav-home-tab" tabIndex="0">Déscription page</div>
                                <div className="tab-pane fade" id="nav-profile" role="tabpanel"
                                    aria-labelledby="nav-profile-tab" tabIndex="0">Livraison</div>
                                <div className="tab-pane fade" id="nav-contact" role="tabpanel"
                                    aria-labelledby="nav-contact-tab" tabIndex="0">Avis</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}