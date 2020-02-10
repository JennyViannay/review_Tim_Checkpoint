import React from "react";
import Photo4 from '../assets/img/oldCircus4.jpg'
import Photo5 from '../assets/img/oldCircus3.jpg'
import Photo6 from '../assets/img/oldCircus2.jpg'


import './Home.css'

const Home = () => {
    return (
        <div>

            {/* <!-- Projects Section --> */}

            <section id="projects" className="projects-section bg-light">
                <div className="container">

                    {/* <!-- Featured Project Row --> */}
                    <div className="row align-items-center no-gutters mb-4 mb-lg-5">
                        <div className="col-xl-8 col-lg-7">
                            <img className="img-fluid mb-3 mb-lg-0 mt-5 imgPhoto4" src={Photo4} alt="" />
                        </div>
                        <div className="col-xl-4 col-lg-5">
                            <div className="featured-text text-center text-lg-left">
                                <h4>Equipe</h4>
                                <p className="text-black-50 mb-0 text-justify">Créé en Angleterre en 1854 par les frères George et William Wildy, des spécialistes de l'art équestre, le cirque Pinder foule le sol français pour la première fois en 1868 pour une série de représentations.</p>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Project One Row --> */}
                    <div className="row justify-content-center no-gutters mb-5 mb-lg-0">
                        <div className="col-lg-6">
                            <img className="img-fluid imgPhoto4" src={Photo5} alt="" />
                        </div>
                        <div className="col-lg-6">
                            <div className="bg-black text-center h-100 project">
                                <div className="d-flex h-100">
                                    <div className="project-text w-100 my-auto text-center text-lg-left">
                                        <h4 className="ml-4 text-black">Animaux</h4>
                                        <p className=" ml-4 mb-0 text-black-50 text-justify">En dehors des spectacles, les éléphants bénéficient d’un parc arboré en banlieue parisienne. Le Wild Circus a pris soin d’offrir à̀ ses éléphants un grand parc de repos, offrant tout le confort nécéssaire à leur bien-être.</p>
                                        <hr className="d-none d-lg-block mb-0 ml-0" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <!-- Project Two Row --> */}
                    <div className="row justify-content-center no-gutters">
                        <div className="col-lg-6">
                            <img className="img-fluid imgPhoto4 mb-4" src={Photo6} alt="" />
                        </div>
                        <div className="col-lg-6 order-lg-first">
                            <div className="bg-black text-center h-100 project">
                                <div className="d-flex h-100">
                                    <div className="project-text w-100 my-auto text-center text-lg-right">
                                        <h4 className="mr-4 text-black">Show</h4>
                                        <p className="mr-4 mb-0 text-black-50 text-justify">Un excelent show avec des animaux en tout genre. La mise en scène au sein du Wild Circus toussa toussa…</p>
                                        <hr className="d-none d-lg-block mb-0 mr-0" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>

            {/* footer */}
            <section className="contact-section bg-dark">
                <div className="container">

                    <div className="row">

                        <div className="col-md-4 mb-3 mb-md-0 mt-4">
                            <div className="card py-4 h-100">
                                <div className="card-body text-center">
                                    <i className="fas fa-map-marked-alt text-primary mb-2"></i>
                                    <h4 className="text-uppercase m-0">Address</h4>
                                    <hr className="my-4" />
                                    <div className="small text-black-50">17 rue du WildCircus, France</div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 mb-3 mb-md-0 mt-4">
                            <div className="card py-4 h-100">
                                <div className="card-body text-center">
                                    <i className="fas fa-envelope text-primary mb-2"></i>
                                    <h4 className="text-uppercase m-0">Email</h4>
                                    <hr className="my-4" />
                                    <div className="small text-black-50">
                                        <a href="...">contact@wildcircus.com</a>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-4 mb-3 mb-md-0 mt-4">
                            <div className="card py-4 h-100">
                                <div className="card-body text-center">
                                    <i className="fas fa-mobile-alt text-primary mb-2"></i>
                                    <h4 className="text-uppercase m-0">Téléphone</h4>
                                    <hr className="my-4" />
                                    <div className="small text-black-50">+1 (555) 902-8832</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="social d-flex justify-content-center">
                        <a href="..." className="mx-2">
                            <i className="fab fa-twitter"></i>
                        </a>
                        <a href="..." className="mx-2">
                            <i className="fab fa-facebook-f"></i>
                        </a>
                        <a href="..." className="mx-2">
                            <i className="fab fa-github"></i>
                        </a>
                    </div>

                </div>
            </section>


        </div>
    )
}

export default Home;