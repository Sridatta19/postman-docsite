
import React from "react";
import { APIDetail } from './apiDetail'
import { getModuleAPIs, getApiId } from "../utils";

export const ModuleDetail = ({ module }) => {
    const moduleAPIs = getModuleAPIs(module);
    if (moduleAPIs.length === 0) {
      return (
        <div className="content">
          <div className="data">
            <span>No API documented</span>
          </div>
        </div>
      );
    }
    return (
      <div className="content">
        <div className="header-content">
          <div className="title">
            <h1>{module.name}</h1>
            <div>{module.description}</div>
          </div>
        </div>
        {moduleAPIs.map(api => (
          <APIDetail moduleName={module.name} key={getApiId(module.name, api.name)} api={api} />
        ))}
      </div>
    );
  };