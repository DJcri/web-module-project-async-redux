import { useEffect } from "react";
import { fetchData } from "./store";
import { connect } from "react-redux";
import styled from "styled-components";

import covid from "./img/covid.jpg";
import "./App.css";

function App(props) {
  const { fetchData, countryCodeToUse } = props;

  useEffect(() => {
    fetchData(countryCodeToUse);
  }, [fetchData, countryCodeToUse]);

  return (
    <AppComponent className="App">
      <div className="card">
        <h1>{countryCodeToUse.toUpperCase()}</h1>
        <div className="date">{props.Date}</div>
        <div className="deaths">
          <div className="new">New Deaths: {props.NewDeaths}</div>
          <div className="total">
            Total Deaths:{" "}
            <span style={{ color: "red" }}>{props.TotalDeaths}</span>
          </div>
        </div>
      </div>
    </AppComponent>
  );
}

const mapStateToProps = (state) => {
  return {
    countryCodeToUse: state.countryCodeToUse,
    NewDeaths: state.NewDeaths,
    TotalDeaths: state.TotalDeaths,
    Date: state.Date,
  };
};

export default connect(mapStateToProps, { fetchData })(App);

const AppComponent = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url(${covid});
  background-size: 100vw;

  .card {
    width: 300px;
    height: 250px;
    padding: 4rem 1rem;
    background: black;
    color: white;
    border-radius: 1rem;

    h1 {
      margin: 0;
      padding: 0;
      margin-bottom: 2rem;
      font-size: 3rem;
    }

    .deaths {
      margin-top: 2rem;
      font-size: 1.4rem;
      font-weight: bold;
    }

    .deaths .new,
    .deaths .total {
      margin-bottom: 1rem;
    }
  }
`;
