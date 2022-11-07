import React from "react";

export default function Cart(props) {
    return (
        <div>
            <nav class="sidebar h-100 w-100 position-fixed top-0 end-0 position-relative">
                <div class="sidebar-content position-absolute end-0 h-100">
                    <div class="d-flex align-items-center justify-content-between pt-2 bg-white w-100">
                        <h1 class="ms-3"><i class="fa-solid fa-cart-shopping fs-3"></i> Panier</h1>
                        <span onClick={props.change}><i class="fa-solid fa-xmark fs-4 border border-dark rounded-circle py-1 px-2 me-3 pointer"></i></span>
                    </div>
                    <div class="mt-4 ms-3">
                        {props.number <= 0 ? <h4 className="text-center">Panier est vide</h4> :
                            <div>
                                <div class="d-flex justify-content-around">
                                    <div class="d-flex">
                                        <img src="images/Z-1.webp" alt="" className="img-cart" />
                                        <p class="ms-3">{props.name}</p>
                                    </div>
                                    <div><i class="fa-solid fa-xmark pointer text-danger"></i></div>
                                </div>
                                <div className="d-flex justify-content-around mt-3 fs-4">
                                    <p><strong>Prix: </strong></p>
                                    <p><strong>{props.prix} €</strong></p>
                                </div>
                                <div className="d-flex justify-content-around mt-2 fs-4">
                                    <p><strong>Quantité: </strong></p>
                                    <p><strong>{props.quantity}</strong></p>
                                </div>
                                <div class="mt-5">
                                    <hr class="w-100" />
                                    <div class="d-flex justify-content-around mt-3 fs-4">
                                        <p><strong>Total: </strong></p>
                                        <p><strong><span>{props.quantity * props.prix} €</span></strong></p>
                                    </div>
                                    <div class="text-center mt-2">
                                        <a href="/" class="w-100 bg-white shadow px-5 py-2 text-decoration-none text-dark fs-3">Voir le Panier</a>
                                    </div>
                                    <div class="text-center mt-4">
                                        <button type="submit" className="border-0 bg-danger shadow px-5 py-2 text-decoration-none text-white fs-4">&nbsp;Commander&nbsp;</button>
                                    </div>
                                </div>
                            </div>
                        }
                    </div>
                </div>
            </nav>
        </div>
    )
}