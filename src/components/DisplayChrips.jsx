import React from 'react';
import {messages} from './CreateChrip';


class DisplayChirps extends React.Component {
   
    render() {
        return (
            <div>
                {messages.map((x, index) => {
                    return (
                        <div className="card border-info mb-3" style={{maxWidth: "30rem", marginTop: '20px', marginLeft: '75px'}}>
                            <div className="card-header">Message# {index + 1}</div>
                            <div className="card-body">
                                <h4 className="card-title">{x.name}</h4>
                                <p className="card-text">{x.message}</p>
                            </div>
                        </div>
                    )
                })}
            </div>
        )
    }
}


export default DisplayChirps;