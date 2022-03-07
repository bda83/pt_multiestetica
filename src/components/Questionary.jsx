import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const Questionary = () => {
    const [recommended, setRecommended] = useState();
    const [formSended, setFormSended] = useState(false);
    const [submitUsed, setSubmitUsed] = useState(false);

    return (
        <>
            <Formik
                initialValues = {{
                    treatment: '',
                    title: '',
                    resume: ''

                }}
                validate = {(valores, submitUsed) => {

                    let errores = {};

                    if (valores.recommend === 'si') {
                        setUserRecommended(true)
                    } else if (valores.recommend === 'no') {
                        setUserRecommended(false)
                    }

                    if (!submitUsed) {
                        if (!valores.treatment) {
                            errores.treatment = 'Selecciona un tratamiento'
                        }
                        if (!valores.title) {
                            errores.title = 'Escribe un título'
                        }
                        if (!valores.resume) {
                            errores.resume = 'Explica tu experiencia'
                        }
                    }

                    return errores;
                }}
                onSubmit = {(valores, {resetForm}) => {
                    if (!submitUsed) {
                        setSubmitUsed(true)
                    }
                    resetForm();
                    alert('Mira en Consola los valores que se envían del formulario');
                    console.log(valores);
                    setFormSended(true);
                }}
            >
                {( {
                    values,
                    errors,
                    touched,
                    submitCount
                }) => (
                    <Form className="form">
                        <div className="form__input-group">
                            <label className="form__label" htmlFor="treatment">¿Qué tratamiento te has realizado?</label>
                            <Field
                                className="form__select"
                                component="select"
                                id="treatment"
                                name="treatment"
                            >
                                <option value=""></option>
                                <option value="lips">Aumento de labios</option>
                                <option value="breasts">Aumento de senos</option>
                                <option value="eyebags">Eliminación de ojeras</option>
                                <option value="moles">Lunares</option>
                                <option value="hair">Tratamiento capilar</option>
                            </Field>
                            <ErrorMessage name="treatment" component={() => (
                                <p className="form__error">{errors.treatment}</p>
                            )} />
                        </div>
                        <div className="form__input-group">
                            <label id="radio-group" className="form__label">¿Recomendarías el tratamiento?</label>
                            <div role="group" aria-labelledby="radio-group" className="form__radio-group">
                                <label className={recommended ? 'form__radio-label btn btn--circle btn--cta' : 'form__radio-label btn btn--circle btn--secondary'}>
                                    <Field 
                                        className="form__radio-wrapper"
                                        type="radio" 
                                        name="recommend" 
                                        value='si' 
                                        onChange={() => setRecommended(true)} 
                                    />
                                        Sí
                                </label>
                                <label className={recommended ? 'form__radio-label btn btn--circle btn--secondary' : 'form__radio-label btn btn--circle btn--cta'}>
                                    <Field 
                                        className="form__radio-wrapper"
                                        type="radio" 
                                        name="recommend" 
                                        value='no' 
                                        onChange={() => setRecommended(false)} 
                                    />
                                        No
                                </label>
                            </div>
                        </div>
                        { recommended && <div className="form__inputs-hiden">
                            <div className="form__input-group">
                                <label className="form__label" htmlFor="title">Título de tu experiencia</label>
                                <Field 
                                    className="form__input"
                                    type="text" 
                                    id="title" 
                                    name="title" 
                                    placeholder="Título resumen de tu experiencia" 
                                />
                                <ErrorMessage name="title" component={() => (
                                    <p className="form__error">{errors.title}</p>
                                )} />
                            </div>
                            <div className="form__input-group">
                                <label className="form__label" htmlFor="resume">Explica todos los detalles</label>
                                <Field 
                                    className="form__textarea"
                                    component="textarea"
                                    rows="7"
                                    id="resume" 
                                    name="resume" 
                                    placeholder="Cuéntanos todos los detalles, porqué decidiste hacerlo, cómo te sentiste antes y después del tratamiento, qué consejos darías a los que lo quieren realizar..." 
                                />
                                <ErrorMessage name="resume" component={() => (
                                    <p className="form__error">{errors.resume}</p>
                                )} />
                            </div>
                        </div>}
                        <button className="btn btn--cta btn--full" type="submit">¡Compartir experiencia!</button>
                        { formSended && <p className="">Formulario enviado</p> }
                    </Form>
                )}
            </Formik>
        </>
    );
}

export default Questionary;