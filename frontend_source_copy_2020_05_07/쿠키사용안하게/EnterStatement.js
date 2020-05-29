// import { get } from 'axios';
// import { withRouter } from 'react-router-dom'

// /* ### global variable ### */
// const MAX_CURRENT_USERS = 100;
// var user_num = 0;

import React, { Component } from 'react';
import { post } from 'axios';
// import Font from '../Font'
import '../App.css';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import CircularProgress from '@material-ui/core/CircularProgress';
import { withStyles } from '@material-ui/core/styles';

import Button from '@material-ui/core/Button';

const styles = theme => ({
  root: {
    width: "100%",
    marginTop: theme.spacing.unit * 3,
    overflowX: "auto"
  },
  table: {
    minWidth: 1080
  },
  progress: {
    margin: theme.spacing.unit * 2 
  },
});


class EnterStatement extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            fonts:'',
            completed: 0,
            statement: '',
            selectFontLang: '',
        }
        this.handleFormSubmit = this.handleFormSubmit.bind(this)
        this.handleValueChange = this.handleValueChange.bind(this)
        this.enterStatement = this.enterStatement.bind(this)
    }

    // componentDidMount(){
    //     this.timer = setInterval(this.progress, 20);
    //     this.callApi()
    //       .then(res => this.setState({fonts: res}))
    //       .catch(err => console.log(err));
    // }

    // callApi = async() => {
    //     const response = await fetch('/api/fonts');
    //     // console.log(response)
    //     // if(response == "null")
    //     //   alert("[python shell error] 다시 시도해주세요 ")
    //     const body = await response.json();
    //     return body;
    //   }
    
    progress = () => {
        const { completed } = this.state;
        this.setState({ completed: completed >= 100 ? 0 : completed + 1 });
    };
    
    deleteItem(i) {
        const { fonts } = this.state;
        fonts.splice(i, 1);
        this.setState({ fonts });
    }

    handleFormSubmit(e){
        e.preventDefault()
        this.timer = setInterval(this.progress, 20);
        this.enterStatement()
        .then((res)=>{
            console.log(res)
            this.setState({fonts: res.data})
        })
        .catch(err => console.log(err));
        // this.setState({
        //     statement: ''
        // })

        // window.location.reload();
        // user_num = (user_num + 1) % (MAX_CURRENT_USERS+1);
        // this.props.history.push('/' + user_num.toString());
        // this.props.history.push('/font-test');
        // window.location.reload();
        
    }

    handleValueChange(e){
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }

    enterStatement(){
        // // const url = '/api/test';
        
        // // return get('/api/test?stmt='+this.state.statement)
        // // return get('/user?ID=12345')
        // // return (get(url, {
        // //     params: {
        // //         stmt: (this.state.statement)
        // //     }
        // // }))
        // const url = '/api/fonts';
        // // const params = new URLSearchParams();
        // // params.append('statement', 'testingtesting')
        // // const formData = new FormData();
        // // formData.append('statement', 'ssss')
        // // formData.append('name', 'testtest')
        // const config = {
        //     headers: {
        //         'content-type': 'multipart/form-data'
        //         // 'content-type': 'URLSearchParams/statement'
        //     }
        // }
        
        const url = '/api/fonts';
        // const formData = new FormData();
        // // console.log(formData)
        // formData.append('statement', this.state.statement);
        // formData.append('lang', this.state.selectFontLang);

        // // console.log(this.state.fontFile)
        // for (var key of formData.keys()) {

        //     console.log(key);
            
        // }   
          
        // for (var value of formData.values()) {
        
        //     console.log(value);
        
        // }
        // console.log(formData)
        console.log("실행")
        return post(url, {'statement' : this.state.statement, 'lang' : this.state.selectFontLang})

        
        // console.log("react 부분")
        // console.log(this.state.statement)
        // console.log({statement: this.state.statement})
        // return post(url, {statement: this.state.statement})
    }

    render(){
        const {classes} = this.props;
        return (
        <div>
            <form onSubmit = {this.handleFormSubmit}>
                <h1>문구 입력</h1>
                문구 &nbsp; : &nbsp; <input type="text" name="statement" value={this.state.statement} onChange={this.handleValueChange} /> &nbsp;
                <br/> <br/>
                <label>
                    폰트 언어 &nbsp; : &nbsp;&nbsp;
                    <select name = "selectFontLang" value={this.state.selectFontLang} onChange={this.handleValueChange}>
                        <option value="" selected disabled hidden> 선택해주세요. </option>
                        <option value="KOR">korean</option>
                        <option value="ENG">english</option>
                    </select>
                </label>
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
                <button type="submit"> 렌더링 </button> 
            </form>

            <Paper className={classes.root}>
            <Table className={classes.table}>
                <TableHead>
                <TableRow>
                    <TableCell>폰트 이름</TableCell>
                    <TableCell>입력 문구</TableCell>
                    <TableCell>렌더링 결과</TableCell>
                    <TableCell> </TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {this.state.fonts ? this.state.fonts.map((c,i)=>{
                return (<TableRow>
                    {/* <Font key={c.name} name={c.name} statement={c.statement} renderimage={c.renderimage} /> */}
                    <TableCell>{c.name}</TableCell>
                    <TableCell >{c.statement}</TableCell>
                    <TableCell><img src={c.renderimage} alt="result"/></TableCell>
                    <TableCell>
                    <Button
                        onClick={this.deleteItem.bind(this, i)}
                        color="secondary"
                    >
                        Delete
                    </Button>
                    </TableCell>
                </TableRow>)
                }) :
                <TableRow>
                    <TableCell colSpan="6" align="center">
                    <CircularProgress className={classes.progress} variant="determinate" value={this.state.completed} color="secondary"/>
                    </TableCell>  
                </TableRow>
                }

                </TableBody>
            </Table>
            </Paper>  
        </div>
        );
        // return(
            
        //     <form onSubmit = {this.handleFormSubmit}>
        //         <h1>문구 입력</h1>
        //         문구 &nbsp; : &nbsp; <input type="text" name="statement" value={this.state.statement} onChange={this.handleValueChange} /> &nbsp;
        //         <br/> <br/>
        //         <label>
        //             폰트 언어 &nbsp; : &nbsp;&nbsp;
        //             <select name = "selectFontLang" value={this.state.selectFontLang} onChange={this.handleValueChange}>
        //                 <option value="" selected disabled hidden> 선택해주세요. </option>
        //                 <option value="KOR">korean</option>
        //                 <option value="ENG">english</option>
        //             </select>
        //         </label>
        //         &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
        //         &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; 
        //         <button type="submit"> 렌더링 </button> 
        //     </form>
        // )
    }
}

export default withStyles(styles)(EnterStatement);
// export default EnterStatement;
// export default withRouter(EnterStatement);