import React from "react";
import "./Detail.css";

class Detail extends React.Component {
  componentDidMount() {
    const { location, history } = this.props;
    if (location.state === undefined) {
      history.push("/");
    }
  }

  render() {
    const { location } = this.props;
    console.log(location);
    if (location.state) {
      return (
        <div className="detail__container">
          <div className="detail__movie__data">
            <h2>{location.state.title}</h2>

            <img src={location.state.poster} alt={location.state.title} />

            <h4>{location.state.year}</h4>

            <ul className="detail__genres">
              {location.state.genres.map((genre, id) => (
                <li key={id}>{genre}</li>
              ))}
            </ul>
            <p> {location.state.summary}</p>
          </div>
        </div>
      );
    } else {
      return null;
    }
  }
}

export default Detail;
