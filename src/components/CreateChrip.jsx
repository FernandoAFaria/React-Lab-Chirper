import React from 'react';

export let messages = [
    { name: 'John Snow', message: 'Winter is comming' },
    { name: 'Homer Simpson', message: 'DOE' },
    
];


class CreateChirp extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            loaded: false,
        }

    }
        
    render() {
        let chirpStyle = {
            width: '350px',
            margin: '100px',
            float: 'left',
            marginRight: '200px'
        }
            
        return(
            <div style={chirpStyle}>
            <div className="form-group">
                <label className="col-form-label col-form-label-lg" htmlFor="inputLarge">Enter something to Chirp</label>
                    <input className="form-control form-control-lg" type="text" placeholder="Enter your name" id="inputname" /><br></br>
                <input className="form-control form-control-lg" type="text" placeholder="Enter Message" id="inputmsg" /><br></br>
                    <button className='btn btn-success'>Chirp</button>
            </div>
            </div>
        )
    }
}



export default CreateChirp;