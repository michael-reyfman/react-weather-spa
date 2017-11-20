import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Form, FormGroup, ControlLabel, FormControl, Button} from 'react-bootstrap';
import {setNewCity} from "../../redux/actions.js";
import {getWeatherData, showWeather} from "../../redux/actions";
import './CityInputForm.css';

class CityInputField extends Component {
    constructor() {
        super();
        this.state = {
            inputVal: '',
            empty: false
        };
        this.handleClick = this.handleClick.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleKeyPress = this.handleKeyPress.bind(this);
    }
    handleChange(e) {
        this.setState({
            inputVal: e.target.value
        });
    }
    handleKeyPress(e) {
        if(e.key === 'Enter') {
            e.preventDefault();
            this.handleClick();
        }
    }
    handleClick() {
        const inputVal = this.state.inputVal.trim();
        const apiKey = '33d3410c6be273a70817f27a4cadd74c';
        if(inputVal.length === 0) {
            this.setState({
                empty: true
            });
        } else {
            this.props.setNewCity(inputVal);
            this.props.getWeather(inputVal, apiKey);
            this.props.showWeather();
            this.setState({
                inputVal: ''
            });
        }
    }
    render() {
        return(
            <div className="city-input-form">
                <Form inline className="form-child">
                    <FormGroup controlId="city-input" className="input-field">
                        <ControlLabel>Enter a city</ControlLabel>
                        {' '}
                        <FormControl
                            type="text"
                            placeholder="e.g. Kiev"
                            value={this.state.inputVal}
                            onChange={this.handleChange}
                            onKeyPress={this.handleKeyPress}
                        />
                    </FormGroup>
                    {' '}
                    <Button onClick={this.handleClick} className="show-widget-button">
                        Show weather!
                    </Button>
                </Form>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        setNewCity: (city) => dispatch(setNewCity(city)),
        getWeather: (city, apiKey) => dispatch(getWeatherData(city, apiKey)),
        showWeather: () => dispatch(showWeather())
    }
};

export default connect(null, mapDispatchToProps)(CityInputField);