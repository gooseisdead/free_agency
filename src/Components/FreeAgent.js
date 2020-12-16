import React from 'react';
import BidForm from '../Components/BidForm'

class FreeAgent extends React.Component {


    render () {
        const { freeagent } = this.props;
        return (
            
            <div className="freeagent">
                <div className="facard">{freeagent.position} {freeagent.name}<br></br>
                    {/* ${freeagent.contract_value} million ({freeagent.contract_length})<br></br> */}
                    <BidForm />
                </div>
            </div>
            
        )
    }
}
    
export default FreeAgent;
