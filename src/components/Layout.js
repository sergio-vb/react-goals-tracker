import React from "react";
import { connect } from "react-redux";
import { setUserName } from "../actions/userActions"

function mapStateToProps(store) {
    return {
    	name: store.name
    }
}
class Layout extends React.Component{

	/*fetchTweets(){
		this.props.dispatch(setUserName("Holland"));
	}*/

	componentWillMount(){
		this.props.dispatch(setUserName("Kell Maresh"));
	}
	render(){

		const { name } = this.props;

		/*if (!tweets.length){
			return <button onClick={this.fetchTweets.bind(this)}>Load</button>
		}*/

		return (
			<div>
				Name: {name}
			</div>
		);
	}
}

export default connect(mapStateToProps)(Layout);