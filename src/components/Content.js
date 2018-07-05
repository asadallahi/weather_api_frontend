import React from 'react';
import ajax from "../utils/ajax";
import {Link, Route} from "react-router-dom";
import Details from "./Details";

export default class Content extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            current_cities: []
        }
    }

    /*async componentDidMount() {
        //let test = await ajax.get();
        console.log('test', current);
    }*/

    async addCity() {
        console.log("current", this.state.current_cities);

        let city = this.city.value;
        let current_cities = this.state.current_cities;
        let current = await  ajax.getCurrentWeather(city);
        current_cities.push(current);

        this.setState({
            current_cities
        });
        console.log('addCity', current);
    }

    render() {
        let self = this;

        return (
            <div className="content">
                <div className="current_cities_list row">
                    {
                        (this.state.current_cities !== []) ? this.state.current_cities.map((item, index) => {
                            let icon_url = "http://openweathermap.org/img/w/" + item.list[0].weather[0].icon + ".png";
                            return (
                                <div className="card col-sm-4 sha-margin" key={index}>
                                    <div className="card-body">
                                        <h5 className="card-title">{item.city.name}</h5>
                                        <div className="card-text">
                                            {item.list[0].main.temp}
                                        </div>
                                        <Link to={`/details/${item.city.id}`}>
                                            <img src={icon_url}/>
                                        </Link>
                                        <div className="card-link">{item.list[0].weather[0].description}</div>
                                    </div>
                                </div>
                            )
                        }) : null
                    }
                    <div className="card add_city col-sm-4 sha-margin">
                        <div className="card-body">
                            <h5 className="card-title">Add City</h5>

                            <input
                                type="text"
                                className="form-control"
                                id="duration"
                                ref={(el) => self.city = el}
                            />
                            <button
                                type="button"
                                className="btn btn-success"
                                onClick={() => this.addCity()}
                            >add
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}
