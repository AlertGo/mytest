import React from "react"
import { Button } from 'antd';

export default class Details extends React.Component {
	constructor ({match}){
		super()
		this.hrefs=match
		this.state={
			content:""
		}
	}
	componentDidMount (){
		var arr=this.hrefs.params.id.split("=")
		var str=`id=${arr[1]}`
		fetch("http://localhost:8006/news/newsdetail",{
			method:"post",
			headers:{
                 "Content-type": "application/x-www-form-urlencoded; charset=UTF-8" 
            },
			body:str
		})
		.then((data) => {
			if(data.ok){
				return data.json()
			}
		})
		.then(data => {
			this.setState({
				content:data[0]['content']
			})
		})
		.catch(x => {
			console.log(x)
		})
	}
	gobacks (){
		this.props.history.push("/")
	}
	render(){
		return (
			<div>
				{this.state.content}
				<Button onClick={this.gobacks.bind(this)} id="btns" type="primary" >返回首页</Button>
			</div>
		)
	}
}