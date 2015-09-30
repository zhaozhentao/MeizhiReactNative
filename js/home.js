'use strict'

var React = require('react-native');
var CardItem = require('./card');
var{
	ListView,
	StyleSheet,
} = React;

var Home = React.createClass({
	getInitialState: function(){
		var ds = new ListView.DataSource({
			rowHasChanged: (r1, r2) => r1 != r2,
			sectionHeaderChanged: (s1, s2) => s1 !== s2,
		});
		return {
			dataSource: ds,
		};
	},
	componentWillMount: function(){
		this.fetchData('http://gank.avosapps.com/api/data/福利/20/1');
	},
	render: function(){
		return (
			<ListView
				dataSource={this.state.dataSource}
				renderRow={this.renderRow}
				style={{backgroundColor: "#dcdcdc"}}>

			</ListView>
		);
	}, 
	fetchData: function(url){
		fetch(url)
			.then((response)=>response.json())
			.catch((error)=>{
			})
			.then((repsonseData)=>{
				var ds = this.state.dataSource.cloneWithRows(repsonseData.results);
				this.setState({
					dataSource: ds
				});
			})
			.catch((error)=>{
				console.log(error);
			});
	},
	renderRow: function(rowData: string, 
		sectionID: number, rowID: number){
		return (
			<CardItem rowData={rowData}/>
		)
	}
});

module.exports = Home;


