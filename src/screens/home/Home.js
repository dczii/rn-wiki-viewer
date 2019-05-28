import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';
import { connect } from 'react-redux';

import { getData } from '../../redux/action'

function Home(props) {
	let [searchField, handleSearchField] = useState(false)
	let [searchValue, handlesearchValue] = useState('')
	let [results, handleresults] = useState([])

	function onSearch(param) {
		let val = searchValue
		handlesearchValue(param)
		props.getData(param)
  }

	console.log(props.searchData.data)
	return(
		<View style={styles.container}>
			<TextInput
				style={styles.inputStyle}
				placeholder='Type to search Wikipedia...'
				value={searchValue}
				onChangeText={e => onSearch(e)}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		alignItems: 'center',
		paddingVertical: 10
	},
	inputStyle: {
		width: '70%',
		alignItems: 'center',
		borderBottomWidth: 1,
		fontSize: 16,
		borderBottomColor: 'rgba(0,0,0,0.2)',
		padding: 10
	}
})
 
const mapStateToProps = store => {
	return {
		searchData: store.globalReducer,
	};
};

const mapActionToProps = {
	getData
};
export default connect(mapStateToProps,mapActionToProps)(Home);