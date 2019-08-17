import React, {Component} from 'react';


class Fundations extends Component {

    state = {
        funds: [
            {
                name: `Fundacja "Dbam o zdrowie"`,
                goal: 'Pomoc osobom znajdującym się w trudnej sytuacji',
                items: 'ubrania, jedzenie, sprzęt AGD, meble, zabawki'
            },
            {
                name: `Fundacja "Dla dzieci"`,
                goal: 'Pomoc dzieciom z ubogich rodzin',
                items: 'ubrania, meble, zabawki'
            },
            {
                name: `Fundacja "Bez domu"`,
                goal: 'Pomoc osobom bezdomnym',
                items: 'ubrania, jedzenie, ciepłe koce'
            },
            {
                name: `Fundacja "Dla psów"`,
                goal: 'Pomoc bezdomnym psom',
                items: 'jedzenie, koce, zabawki'
            },
            {
                name: `Fundacja "Dla sierot"`,
                goal: 'Pomoc osieroconym dzieciom',
                items: 'ubrania, jedzenie, zabawki, meble, sprzęt AGD'
            },
            {
                name: `Fundacja "Dla samotnych matek`,
                goal: 'Pomoc samotnym matkom',
                items: 'ubrania, meble, zabawki, sprzęt AGD, gry'
            },
            {
                name: `Fundacja "Dla chorych"`,
                goal: 'Pomoc osobom chorym',
                items: 'ubrania, koce, meble'
            },
            {
                name: `Fundacja "Dla dzieci"`,
                goal: 'Pomoc dzieciom z ubogich rodzin',
                items: 'ubrania, meble, zabawki'
            },
        ],
        currentPage: 1,
        orgPerPage: 3,
        orgSelect: 'fund'


    };

    onClickFund = (e) => {
        this.setState({
            orgSelect: e.target.key

        })

    };

    handleClick = (event) =>{
        this.setState({
            currentPage: Number(event.target.id)
        });
    };

    render() {
        const {funds, currentPage, orgPerPage} = this.state;

        // Logic for displaying todos
        const indexOfLastTodo = currentPage * orgPerPage;
        const indexOfFirstTodo = indexOfLastTodo - orgPerPage;
        const currentTodos = funds.slice(indexOfFirstTodo, indexOfLastTodo);

        const renderTodos = currentTodos.map((org, index) => {
            return (
                    <li className={'org-el'} key={index}>
                        <div>
                            <h3>{org.name}</h3>
                            <p>Cel i misja: {org.goal}</p>
                        </div>
                        <p>{org.items}</p>
                    </li>

            );
        });

        // Logic for displaying page numbers
        const pageNumbers = [];
        for (let i = 1; i <= Math.ceil(funds.length / orgPerPage); i++) {
            pageNumbers.push(i);
        }

        const renderPageNumbers = pageNumbers.map(number => {
            return (
                <li
                    key={number}
                    id={number}
                    onClick={this.handleClick}
                >
                    {number}
                </li>
            );
        });




        return (
            <section className='fundation-list'>
                <h1>Komu Pomagamy?</h1>
                <div className="decoration"></div>
                <ul className="select-fundation">
                    <li onClick={this.onClickFund} key={'fund'}>Fundacjom</li>
                    <li onClick={this.onClickFund} key={'org'}>Organizacom pozarządowym</li>
                    <li onClick={this.onClickFund} key={'local'}>Lokalnym zbiórkom</li>
                </ul>
                <p>W nadzej bazie znajdziesz listę zwerifikowanych Fundacji, z którymi współpracujemy. Możesz sprawdzić
                    czym się zajmują, komu pomagają i czego potrzebują</p>
                <ul className='org-list'>
                    {renderTodos}
                </ul>
                <ul id="page-numbers">
                    {renderPageNumbers}
                </ul>


            </section>
        )

    }

}

export default Fundations