import React from 'react';
import ajax from "../utils/ajax";

export default class Details extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            details: null
        }
    }

    async componentDidMount() {
        const {id} = this.props.match.params;
        let details = await ajax.getDetails(id);

        this.setState({details});
        console.log('details', details);
    }

    render() {
        if (this.state.details === null) {
            return (<div>Loading...</div>)
        } else {
            let icon_url = "http://openweathermap.org/img/w/" + this.state.details.weather[0].icon + ".png";

            return (
                <div>
                    <h3>{this.state.details.name}</h3>
                    <div>
                        <img src={icon_url}/>
                    </div>
                    <div>temp: {this.state.details.main.temp}</div>
                    <div>humidity: {this.state.details.main.humidity}</div>
                </div>
            );
        }
    }
}
