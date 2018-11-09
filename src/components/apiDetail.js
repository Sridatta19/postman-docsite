
import React from "react";
import { APIExamples } from './apiExamples'
import { APIInfoTable } from './apiInfoTable'
import { getModuleAPIs, getApiId } from "../utils";

export const APIDetail = ({ api, moduleName }) => {
    const apiUrl =
      api.request.url.raw && api.request.url.raw.replace("{{HTTP-Protocol}}://{{Host-URL}}", "");
    return (
      <div className="api-section" id={getApiId(moduleName, api.name)}>
        <h2>{api.name}</h2>
        {apiUrl && (
          <div className="tile">
            <label>Endpoint</label>
            <span className="endpoint">
              <b style={{ marginRight: "6px" }}>{api.request.method}</b>
              {apiUrl}
            </span>
          </div>
        )}
        <div className="desc" dangerouslySetInnerHTML={{ __html: api.request.description }} />
        {api.request.header &&
          api.request.header.length !== 0 && (
            <APIInfoTable
              api={api}
              collection={api.request.header}
              headerTitle="Headers"
              subHeaderTitle="Field"
            />
          )}
        {api.request.body.mode &&
          api.request.body.mode !== "raw" &&
          api.request.body[api.request.body.mode] && (
            <APIInfoTable
              api={api}
              collection={api.request.body[api.request.body.mode]}
              headerTitle="Inputs"
              subHeaderTitle="Parameter"
            />
          )}
        <APIExamples api={api} />
      </div>
    );
  };