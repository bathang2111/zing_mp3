import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Redirect, Route, Switch, useHistory } from "react-router-dom";
import Dashboard from "../../compunents/dashboard/dashboard";
import Header from "../../compunents/header/header";
import { Routes } from "../../constants/routers";
import { RightView, View } from "./StyleApp";

function App(props) {
  const history = useHistory();
  const topic=useSelector(state=>state.topic.mainTopic);
  history.push("/");


  const pageControl = (Routes) => {
    let result = null;
    if (Routes.length > 0) {
      result = Routes.map((route) => {
        return (
          <Route
            key={route.path}
            path={route.path}
            exact={route.exact}
            component={route.main}
          />
        );
      });
    }
    return <Switch>{result}</Switch>;
  };

  return (
    <View>
      <Dashboard />
      <RightView background={topic.background_App}>
        <Header />
        {pageControl(Routes)}
      </RightView>
    </View>
  );
}

export default App;
