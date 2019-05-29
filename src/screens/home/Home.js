import React, { useState } from 'react';
import { View, ScrollView, TextInput, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import _ from 'lodash';

import { getData } from '../../redux/action'
import List from '../../components/List'

function Home(props) {
	let [searchField, handleSearchField] = useState(false)
	let [searchValue, handlesearchValue] = useState('')
	let [results, handleresults] = useState([])

	function onSearch(param) {
		let val = searchValue
		handlesearchValue(param)
		props.getData(param)
	}
	
	let searchView = <ScrollView style={styles.listStyle}>
		{_.map(props.searchData.data, (data, idx) => {
			return <List data={data} key={idx} />
		})}
	</ScrollView>

	return(
		<View style={styles.container}>
			<TextInput
				style={styles.inputStyle}
				placeholder='Type to search Wikipedia...'
				value={searchValue}
				onChangeText={e => onSearch(e)}
			/>

			{searchView}
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
	},
	listStyle: {
		width: '100%',
		marginTop: 10,
		backgroundColor: '#AEAEAE',
		paddingVertical: 10,
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