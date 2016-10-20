// InputButton.js

import React, { Component } from 'react';
import {
    View,
    Text,
    TouchableHighlight
} from 'react-native';

import Style from '../css/style';

export default class InputButton extends Component {
    
    render() {
        return (
            // <View style={Style.inputButton}>
            //     <Text style={Style.inputButtonText}>{this.props.value}</Text>
            // </View>

            <TouchableHighlight style={Style.inputButton}
                                underlayColor="#193441"
                                onPress={this.props.onPress}>
                <Text style={Style.inputButtonText}>{this.props.value}</Text>
            </TouchableHighlight>
        )
    }
    
}