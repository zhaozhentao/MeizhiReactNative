'use strict'

var React = require('react-native');
var{
	View,
	Text,
	StyleSheet,
	Image,
} = React;
var lineWidth = 0.4;

var CardItem = React.createClass({
	render: function(){
		return (
			<View>
				<View style={styles.card}>
					<Image source={{uri: this.props.rowData.url}}
						style={{height: 400}}/>
					<Text style={styles.card_name}>
						{this.props.rowData.who}
					</Text>
				</View>
				<View style={styles.card_bottom_bar}>
					<Text style={[styles.card_item, {textAlign:"center", flex: 2}]}>
						3 热度
					</Text>
					<View style={styles.card_item_border}>
						<Image source={require('image!dashboard_reply_default')}
							style={{height: 15, resizeMode: "contain"}}/>
					</View>
					<Image source={require('image!selection_share_hover') }
						style={styles.card_bottom_img_button}/>
					<View style={styles.card_item_border}>
						<Image source={require('image!dashboard_recommand_off_default')}
							style={{height: 15, resizeMode:"contain"}}/>
					</View>
					<Image source={require('image!dashboard_like_on_default') }
						style={styles.card_bottom_img_button}/>
				</View>
			</View>			
		);		
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
		fontSize: 14,
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
	card_item_border:{
		flex: 1,
		borderLeftWidth:lineWidth, 
		borderRightWidth:lineWidth, 
		alignItems:"center",
		paddingTop:12, 
		paddingBottom: 12,
		borderColor:"#dcdcdc"	
	},
	card_bottom_img_button:{
		resizeMode:"contain", 
		flex: 1, 
		height: 15,
	}
});


module.exports = CardItem;


