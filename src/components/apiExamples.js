
import React from "react";
import { getRequestJSON } from "../utils";
import { JSONView } from './jsonView'

export const APIExamples = ({ api }) => {
    if (!api.response || api.response.length === 0) {
      return <p className="note">No Examples Found</p>;
    }
    return api.response.map((resp, index) => {
      let requestBody = api.request.body;
      try {
        requestBody = resp.originalRequest.body;
      } catch (err) {
        console.log("EXAMPLE REQUEST ERROR", resp.originalRequest);
      }
      const requestJSON = getRequestJSON(requestBody);
      return (
        <div key={index} className="response-item">
          <p className="note">
            Example {index + 1}: {resp.name}
          </p>
          <p className="api-subheader">Request:</p>
          <JSONView src={requestJSON} apiName={api.name} />
          <p className="api-subheader">Response:</p>
          <JSONView src={resp.body} apiName={api.name} />
        </div>
      );
    });
  };