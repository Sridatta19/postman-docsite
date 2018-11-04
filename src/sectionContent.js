import React from "react";
import ReactJson from "react-json-view";
import { parseStringToJSON, getRequestJSON, getApiId, getModuleAPIs } from "./utils";
import { Module } from "module";

class SectionContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sectionOffsets: []
    };
    this.calculateOffsets = this.calculateOffsets.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
    this.calculateOffsets(this.props);
  }

  shouldComponentUpdate(nextProps) {
    return this.props.selectedModule.name !== nextProps.selectedModule.name;
  }

  componentWillReceiveProps(nextProps) {
    this.calculateOffsets(nextProps);
  }

  calculateOffsets(props) {
    const { modules } = this.props;
    const sectionOffsets = modules
      .filter(module => module.name === this.props.selectedModule.name)
      .reduce((acc, module) => {
        const moduleAPIs = getModuleAPIs(module);
        const apiIds = moduleAPIs.map(api => api.name).map(name => getApiId(module.name, name));
        const apiOffsets = apiIds.map(sectionId => {
          const element = document.getElementById(sectionId);
          return {
            name: sectionId,
            moduleName: module.name,
            offset: element && element.offsetTop
          };
        });
        return acc.concat(apiOffsets);
      }, []);
    this.setState({ sectionOffsets });
  }

  handleScroll() {
    const { setChildMenu } = this.props;
    const { sectionOffsets } = this.state;
    sectionOffsets.forEach((offsetObj, index) => {
      if (
        (index !== sectionOffsets.length - 1 &&
          window.scrollY >= offsetObj.offset - 65 &&
          window.scrollY < sectionOffsets[index + 1].offset) ||
        (index === sectionOffsets.length - 1 && window.scrollY >= offsetObj.offset - 65)
      ) {
        setChildMenu(offsetObj.name);
      }
    });
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
  }

  render() {
    return this.props.modules
      .filter(module => module.name === this.props.selectedModule.name)
      .map(module => <ModuleDetail key={module.name} module={module} />);
  }
}

const ModuleDetail = ({ module }) => {
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

const APIDetail = ({ api, moduleName }) => {
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

const APIExamples = ({ api }) => {
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

const APIInfoTable = ({ api, collection, headerTitle, subHeaderTitle }) => {
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

const JSONView = ({ src, apiName }) => (
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

export default SectionContent;
