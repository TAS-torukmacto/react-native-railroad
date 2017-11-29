import React, { Component } from 'react';
import { View, Animated, Dimensions } from 'react-native';
import PropTypes from 'prop-types';

export const RailRoad = (props) => {
    const { max_index, index, color } = props;
    const width = (Dimensions.get('window').width / max_index) - 12;

    let rail_styles = [];
    for (let i = 0; i < max_index; i++) {
        const backgroundColor = color ? index > i ? color : '#c2c2a3' : index > i ? '#e6e600' : '#c2c2a3';

        rail_styles.push({
            alignSelf: 'center',
            borderRadius: 1,
            height: 4,
            marginRight: 2,
            backgroundColor,
            width: width
        });
    }

    return (
        <View style={styles.railroad} >
            {
                rail_styles.map((style, i) => {
                    return (
                        <Animated.View key={i} style={style} />
                    )
                })
            }
        </View>
    )
}

RailRoad.propTypes = {
    max_index: PropTypes.number.isRequired,
    index: PropTypes.number.isRequired,
    color: PropTypes.string
};

const styles = {
    railroad: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 10
    }
};
