
import React from "react";
import ReactJson from "react-json-view";
import { parseStringToJSON } from "../utils";

export const JSONView = ({ src, apiName }) => (
    <ReactJson
        name={false}
        collapsed={1}
        enableClipboard
        displayDataTypes={false}
        displayObjectSize={false}
        style={{
            fontFamily: "Noto Serif, sans-serif",
            fontSize: "14px"
        }}
        src={parseStringToJSON(src, apiName)}
    />
);