import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Home from "./home";
import { getModuleAPIs, getApiId } from "./utils";

class App extends React.Component {
  render() {
    const modules = window.collectionJSON.item;
    return (
      <HashRouter>
        <div>
          <Route exact path="/" render={() => <Home modules={modules} />} />
          {modules.map((module, i) => {
            return (
              <div>
                <Route
                  key={i}
                  path={`/${getApiId(module.name)}`}
                  render={() => <Home selectedModule={module} modules={modules} />}
                />
                {getModuleAPIs(module).map((moduleAPI, j) => {
                    const apiID = getApiId(module.name, moduleAPI.name);
                    return (
                      <Route
                        key={apiID}
                        path={`/${apiID}`}
                        render={() => (
                          <Home selectedModule={module} selectedModuleAPI={apiID} modules={modules} />
                        )}
                      />
                    );
                  })}
              </div>
            );
          })}
        </div>
      </HashRouter>
    );
  }
}

export default App;
