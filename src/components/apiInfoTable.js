
import React from "react";
import ReactJson from "react-json-view";
import { parseStringToJSON } from "../utils";

export const APIInfoTable = ({ api, collection, headerTitle, subHeaderTitle }) => {
    let collectionObj;
    if (typeof collection.map !== "function") {
        collectionObj = parseStringToJSON(collection);
    }
    return (
        <div className="tile">
            <h4>{headerTitle}</h4>
            <table className="api-detail">
                <thead>
                    <tr>
                        <th>{subHeaderTitle}</th>
                        <th>Description</th>
                    </tr>
                </thead>
                <tbody>
                    {typeof collection.map === "function"
                        ? collection.map((listItem, j) => {
                            var search_regexp = new RegExp("Required", "g");
                            var desc = listItem.description
                                ? listItem.description.replace(
                                    search_regexp,
                                    "<span class = 'highlight'>Required</span>"
                                )
                                : listItem.value;
                            return (
                                <tr key={j}>
                                    <td>{listItem.key}</td>
                                    <td dangerouslySetInnerHTML={{ __html: desc }} />
                                </tr>
                            );
                        })
                        : Object.keys(collectionObj).map((key, j) => {
                            return (
                                <tr key={j}>
                                    <td>{key}</td>
                                    <td>
                                        {typeof collectionObj[key] === "string" ? collectionObj[key] : "[object]"}
                                    </td>
                                </tr>
                            );
                        })}
                </tbody>
            </table>
        </div>
    );
};