import React from 'react';

let oldmessages = [
    { name: 'John Snow', message: 'Winter is comming' },
    { name: 'Homer Simpson', message: 'DOE' },
    { name: 'Eric Cartman', message: 'Fuck you Kyle'}
    
];


class CreateChirp extends React.Component{
    constructor(props){
        super(props);

        this.state = {
             name: "",
             message: "",
             list: oldmessages
        }

    }


    handleClick = () => {
        if(this.state.name === "" || this.state.message === ""){
            alert('Please enter your name and message')
        } else {
        let temp = this.state.list;
        let tempname = this.state.name;
        let tempmessage = this.state.message
        temp.push({ 'name': tempname, 'message': tempmessage })
        
        this.setState({
            name: "",
            message: "",
            list: temp
        })
        
        }
    }

    handleNameChange = (e) => {
        this.setState({
            name: e
        })
    }
    handleMessageChange = (e) => {
        this.setState({
            message: e
        })
        
    }


    render() {
        let chirpStyle = {
            maxWidth: '450px',
            marginTop: '100px',
            float: 'left',
            position: 'fixed'
        }
        let displayChrip = {
            width: '50%',
            float: 'right',
            marginTop: '100px'
        }
       
        return(
            <div className='container'>
            <div style={chirpStyle}>
            <div className="form-group">
                <label className="col-form-label col-form-label-lg" htmlFor="inputLarge">Enter something to Chirp</label>
                        <input className="form-control form-control-lg" type="text" placeholder="Enter your name" id="inputname" value={this.state.name} onChange={(e) => this.handleNameChange(e.target.value)} /><br></br>
                        <input className="form-control form-control-lg" type="text" placeholder="Enter Message" id="inputmsg" value={this.state.message} onChange={(e) => this.handleMessageChange(e.target.value)} /><br></br>
                    <button style={{width: '300px '}} className='btn btn-danger' onClick={this.handleClick}>Chirp</button>
            </div>
            </div>
            <div style={displayChrip}>
                {this.state.list.map((x, index) => {
                    return (
                        <div key={index} className="card border-primary mb-3" style={{maxWidth: '40rem'}}>
                            <div className="card-header">{(index + 1) + ". " + " " + x.name }</div>
                            <div className="card-body">
                                <h4 className="card-title">{x.message}</h4>
                                <p className="card-text"></p>
                            </div>
                        </div>
                    )    
                })}

            </div>
            </div>
        )
    }
}



export default CreateChirp;