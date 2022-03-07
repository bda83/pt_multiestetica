import React from 'react';
import Avatar from '../assets/images/avatar4.png';
import GalImg1 from '../assets/images/gallery2.png';
import GalImg2 from '../assets/images/gallery1.png';
import DoctorLogo from '../assets/images/doctor.png';
import Questionary from './Questionary';

export function Experience() {
    return (
        <main className="experience">
            <div className="experience__user user">
                <img className="user__avatar" src={Avatar} alt="user" />
                <div className="user__info">
                    <p className="user__nick">vebris</p>
                    <p className="user__detail">Barcelona (Ciudad) · 8 sep 2019</p>
                </div>
            </div>
            <h2 className="experience__title">
                Muy orgullosa de mi nuevo abdomen
            </h2>
            <div className="experience__resum">
                <span className="experience__resum--color">Vale la pena</span>
                <span className="experience__resum--bw">Precio aproximado: 8500€</span>
            </div>
            <div className="experience__gallery">
                <img src={GalImg1} alt="imagen 1" />
                <img src={GalImg2} alt="imagen 2" />
                <img src={GalImg1} alt="imagen 3" />
                <img src={GalImg2} alt="imagen 4" />
                <img src={GalImg1} alt="imagen 5" />
                <img src={GalImg2} alt="imagen 6" />
            </div>
            <div className="experience__doctor doctor">
                <h4 className="doctor__title">Sobre el doctor</h4>
                <div className="doctor__branding">
                    <img className="doctor__logo" src={DoctorLogo} alt="Dorsia Clínica Estética" />
                    <div className="doctor__details">
                        <h2 className="doctor__name">Dorsia Clínica Estética</h2>
                        <p className="doctor__location">81 sedes en Madrid, Lleida, Tarragona...</p>
                    </div>
                </div>
                <button className="doctor__contact btn btn--cta" data-message="Contactar al doctor">Contactar al doctor</button>
            </div>
            <div className="experience__rating rating">
                <span className="rating__title">
                    Valoración:
                </span>
                <span className="rating__stars">
                    *****
                </span>
            </div>
            <p className="experience__text">Es un excelente cirujano que se merece con creces la buena fama que tiene, pero para estas cosas no hay que escatimar! El post operatorio ha sido un poco difícil. Aún no me adapto a caminar sin sentir molestia y opresión, pero supongo que es cuestión de tiempo.</p>    

            <aside className="experience__form">
                <h4 className="experience__title-form">Cuéntanos tu experiencia</h4>
                <Questionary />
            </aside>
        </main>
    );
}