import React from "react";

import Header from "./components/Header";
import AddedFeatures from "./components/AddedFeatures";
import AdditionalFeatures from "./components/AdditionalFeatures";
import Total from "./components/Total";

import { connect } from "react-redux";
import { addFeature, removeFeature } from "./actions/featureAction";

const App = (props) => {
  const removeFeature = (item) => {
    props.removeFeature(item);
  };

  const buyItem = (item) => {
    props.addFeature(item);
  };

  return (
    <div className="boxes">
      <div className="box">
        <Header />
        <AddedFeatures remove={removeFeature} />
      </div>
      <div className="box">
        <AdditionalFeatures buy={buyItem} />
        <Total />
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return { state };
};

export default connect(mapStateToProps, { addFeature, removeFeature })(App);
