import React from 'react';
import FreeAgent from '../Components/FreeAgent'

class FreeAgentContainer extends React.Component {

    state = {
        api: []
    }
    
    componentDidMount() {
        fetch("http://localhost:8000/players")
        .then(resp => resp.json())
        .then(data => this.setState( {api: data} ))
    }

    // handleNewPlayer = (playerObj) => {
    //     fetch("http://localhost:8000/players", {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json",
            
    //       },
    //       body: JSON.stringify(playerObj)
    //     })
    //     .then(resp => resp.json())
    //     .then(newPlayer => this.setState({ api: [...this.state.api, newPlayer]}))
    //   }
      
    renderPlayers = () => {
        let filteredArray = this.state.api
        return filteredArray.map(el => <FreeAgent key={el.id} freeagent={el} api={this.state.api} />)
    }

    

    // totalSalary = () => {
    //     let salaryArray = this.state.api.filter(function (el) {
    //         return el.contract_value
    //     })
    //     let grandTotal = []
    //     salaryArray.map(el => grandTotal.push(el.contract_value))
    //     // grandTotal.reduce((a, b) => a + b, 0)
    //     grandTotal.reduce((a, b) => a + b, 0)
    //     console.log(grandTotal.reduce((a, b) => a + b, 0))
    // };
        
    // renderByTeam = () => {
    //     let teamFilteredArray = this.state.api.filter(function (el) {
    //         return el.current_team === "Yankees"          
    //     });
    //       console.log(teamFilteredArray);
    // }

    render() {
        return (
            <div className="team-container">
                {/* <h2 onClick={this.totalSalary}>What is the Salary?</h2> */}
                {/* <h2 onClick={this.renderByTeam}>Where are Yankees?</h2> */}
                {this.renderPlayers()}
                {/* <NewPlayerForm handleNewPlayer={this.handleNewPlayer}/> */}
            </div>
        )
    }
}

export default FreeAgentContainer