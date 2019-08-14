import React, {Component} from 'react';import {
    HashRouter,
    Route,
    Link,
    Switch,
    NavLink,
} from 'react-router-dom';

class Button extends Component {

    render() {

        return (
            <div className="btn-log">
                <NavLink>Załóż konto</NavLink>
            </div>
        )
    }

}


class Steps extends Component{
render() {

    return (
        <section className="steps">
            <h1>Wystarczą 4 proste kroki</h1>
            <div className="decoration-steps"></div>
            <article className='steps-container'>
                <div className="step-el">
                    <p>Wybierz rzeczy</p>
                    <hr/>
                    <p>ubrania,zabawki,sprzęt i inne</p>

                </div>
                <div className="step-el">
                    <p>Spakuj je</p>
                    <hr/>
                    <p>skorzystaj z worków naśmieci</p>

                </div>
                <div className="step-el">
                    <p>Zdecyduj komu chcesz pomóc</p>
                    <hr/>
                    <p>wybierz zaufane miejsce</p>

                </div>
                <div className="step-el">
                    <p>Zamów kuriera</p>
                    <hr/>
                    <p>kurier przyjedzie w dowolnym terminie</p>

                </div>

            </article>
          <Button/>
        </section>


    )
}


}


export default Steps