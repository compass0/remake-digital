import React from 'react'
import { post } from 'axios';
// import { get } from 'axios';

class EnterStatement extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            statement: ''
        }
        this.handleFormSubmit = this.handleFormSubmit.bind(this)
        this.handleValueChange = this.handleValueChange.bind(this)
        this.enterStatement = this.enterStatement.bind(this)
    }

    handleFormSubmit(e){
        e.preventDefault()
        this.enterStatement()
        .then((response)=>{
            console.log(response.data);
        })
        // this.setState({
        //     statement: ''
        // })

        window.location.reload();
    }

    handleValueChange(e){
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }

    enterStatement(){
        // const url = '/api/test';
        
        // return get('/api/test?stmt='+this.state.statement)
        // return get('/user?ID=12345')
        // return (get(url, {
        //     params: {
        //         stmt: (this.state.statement)
        //     }
        // }))
        const url = '/api/fonts';
        // const params = new URLSearchParams();
        // params.append('statement', 'testingtesting')
        // const formData = new FormData();
        // formData.append('statement', 'ssss')
        // formData.append('name', 'testtest')
        const config = {
            headers: {
                'content-type': 'multipart/form-data'
                // 'content-type': 'URLSearchParams/statement'
            }
        }
        console.log("react 부분")
        console.log(this.state.statement)
        console.log({statement: this.state.statement})
        return post(url, {statement: this.state.statement})
    }

    render(){
        return(
            <form onSubmit = {this.handleFormSubmit}>
                <h1>문구 입력</h1>
                문구: <input type="text" name="statement" value={this.state.statement} onChange={this.handleValueChange} />
                <button type="submit">입력</button>
            </form>
        )
    }
}

export default EnterStatement