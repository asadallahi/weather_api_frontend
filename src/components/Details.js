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
        let details = this.state.details;
        if (details === null) {
            return (<div>Loading...</div>)
        } else {

            return (
                <div>
                    <h3>{details.city.name}</h3>
                    {
                        details.list.map((item, index) => {
                            let icon_url = "http://openweathermap.org/img/w/" + item.weather[0].icon + ".png";
                            return (
                                <div className="card sha-margin" key={index}>
                                    <div className="card-body">
                                        <div>{item.dt_txt}</div>
                                        <div>
                                            <img src={icon_url}/>
                                        </div>
                                        <div>temp: {item.main.temp}</div>
                                        <div>humidity: {item.main.humidity}</div>
                                    </div>
                                </div>
                            )
                        })
                    }

                </div>
            );
        }
    }
}
