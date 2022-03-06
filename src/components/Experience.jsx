import React from 'react';
import Avatar from '../assets/images/avatar4.png';

export function Experience() {
    return (
        <>
            <main>
                <div className="user">
                    <img className="user__avatar" src={Avatar} alt="" />
                    <div>
                        <p className="user__nick">vebris</p>
                        <p className="user__info">Barcelona (Ciudad) · 8 sep 2019</p>
                    </div>
                </div>
                <h2>
                    Estoy muy orgullosa de mi nuevo abdomen
                </h2>
                <div>
                    <span>Vale la pena</span>
                    <span>Precio aproximado: 8500€</span>
                </div>
                <div>
                    galería
                </div>
                <div>
                    <h4>Sobre el doctor</h4>
                    <div>
                        logo
                        <div>
                            <h7>Dorsia Clínica Estética</h7>
                            <p>81 sedes en Madrid, Lleida, Tarragona...</p>
                        </div>
                    </div>
                    <button data-message="Contactar al doctor">Contactar al doctor</button>
                </div>
                <div>
                    Valoración
                </div>
                <p>Es un excelente cirujano que se merece con creces la buena fama que tiene, pero para estas cosas no hay que escatimar! El post operatorio ha sido un poco difícil. Aún no me adapto a caminar sin sentir molestia y opresión, pero supongo que es cuestión de tiempo.</p>    
            </main>

            <aside>
                <h4>Cuéntanos tu experiencia</h4>
                <form></form>
            </aside>
        </>
    );
}