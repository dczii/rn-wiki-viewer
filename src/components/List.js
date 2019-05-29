import React from 'react';
import {StyleSheet, Text, ScrollView } from 'react-native';
import ReactHtmlParser from 'react-html-parser';
import _ from 'lodash';

function List(props) {
    let { data } = props
    let testString = ReactHtmlParser(data.snippet)
    _.remove(testString, (val) => _.isObject(val))
    console.log()
    return(
        <ScrollView style={styles.container} key={props.key}>
          <Text style={styles.title}>{data.title}</Text>
          <Text> {_.join(testString)} </Text>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginVertical: 5,
        width: '100%',
        backgroundColor: '#FFF'
    },
    title: {
        fontWeight: 'bold',
        fontSize: 16
    }
});

export default List;
