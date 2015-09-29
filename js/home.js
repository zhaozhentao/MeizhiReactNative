'use strict'

var React = require('react-native');

var{
	View,
	Text,
	ListView,
	StyleSheet,
	Image,
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
		this.fetchData('http://gank.avosapps.com/api/data/福利/10/1');
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
			<View>
				<View style={styles.card}>
					<Image source={{uri: rowData.url}}
						style={{height: 300}}/>
					<Text style={styles.card_name}>
						{rowData.who}
					</Text>
				</View>
				<View style={styles.card_bottom_bar}>
					<Text style={[styles.card_item, {textAlign:"center", marginTop:10, marginBottom: 10, flex: 2}]}>
						3 热度
					</Text>
					<Image source={require('image!dashboard_reply_default') }
						style={{resizeMode:"contain", flex: 1, height: 30}}/>
					<Image source={require('image!selection_share_hover') }
						style={{resizeMode:"contain", flex: 1, height: 30}}/>
					<Image source={require('image!dashboard_recommand_off_default') }
						style={{resizeMode:"contain", flex: 1, height: 30}}/>
					<Image source={require('image!dashboard_like_on_default') }
						style={{resizeMode:"contain", flex: 1, height: 30}}/>																				
				</View>
			</View>
		)
	}
});

var styles = StyleSheet.create({
	card: {
	    backgroundColor: 'white',
	    marginLeft: 10,
	    marginRight: 10,
	    marginTop: 8, 
	    borderColor: '#dddddd',
	    borderLeftWidth: 0.5,
	    borderTopWidth: 0.5,
	    borderRightWidth: 0.5,
	    borderTopLeftRadius: 2,
	    borderTopRightRadius: 2,
	},
	card_name: {
		fontSize: 18,
		margin: 10,
	},
	card_bottom_bar: {
		flexDirection: "row",
		alignItems: "center",
		marginLeft: 10, marginRight: 10, marginBottom: 8,
		backgroundColor: '#f3f3f3',
		borderColor: '#dcdcdc',
		borderWidth: 0.4,
	},
	card_item:{
		fontSize: 16,
		flex: 1,
	    borderWidth: 1,
	    borderColor: '#dd0000',
	    borderBottomLeftRadius: 2, 
	    borderBottomRightRadius: 2,
	},
});

module.exports = Home;


