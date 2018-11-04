import React from "react";
import { Link } from "react-router-dom";
import { getModuleAPIs, getApiId } from "./utils";

class LeftMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchTerm: ""
    };
    this.onTextChange = this.onTextChange.bind(this);
  }

  onTextChange(evt) {
    this.setState({ searchTerm: evt.target.value });
  }

  shouldComponentUpdate(nextProps, nextState) {
    return (
      this.props.selectedModuleAPI !== nextProps.selectedModuleAPI ||
      this.state.searchTerm !== nextState.searchTerm
    );
  }

  componentDidMount() {
    const sidebar = document.getElementById("sidebar");
    const subMenu = document.getElementById("submenu_" + getApiId(this.props.selectedModule.name));
    if (subMenu) {
      sidebar.scrollTop = subMenu.offsetTop - 65;
    }
  }

  render() {
    const { modules, scrollToAPI, selectedModule, onSelectModule, selectedModuleAPI } = this.props;
    const { searchTerm } = this.state;
    const filteredModules = modules.filter(m => {
      const moduleAPIs = getModuleAPIs(m);
      const filteredAPIs = moduleAPIs.filter(
        api => api.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1
      );
      return (
        m.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1 || filteredAPIs.length !== 0
      );
    });
    return (
      <div id="sidebar">
        <div className="sidebar-search">
          <input
            type="text"
            placeholder="Search APIs"
            value={searchTerm}
            onChange={this.onTextChange}
          />
        </div>
        <ul className="menu">
          {filteredModules.map(module => (
            <MenuItem
              module={module}
              searchTerm={searchTerm}
              key={module.name}
              selectedModuleAPI={selectedModuleAPI}
              selectedModule={selectedModule}
              scrollToAPI={scrollToAPI}
              onSelectModule={onSelectModule}
            />
          ))}
          <li style={{ marginBottom: "36px" }} />
        </ul>
      </div>
    );
  }
}

const MenuItem = ({
  module,
  selectedModule,
  searchTerm,
  selectedModuleAPI,
  onSelectModule,
  scrollToAPI
}) => {
  let liClass = "parent0";
  if (selectedModule.name === module.name) {
    liClass += " active";
  }
  const moduleAPIs = getModuleAPIs(module).filter(
    api => api.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1
  );
  const onSelect = () => {
    const apiName = !moduleAPIs || moduleAPIs.length === 0 ? "" : moduleAPIs[0].name;
    onSelectModule(module, apiName);
  };
  const displayName = searchTerm
    ? "<b class='red'>" + module.name.replace(new RegExp(searchTerm, "gi"), function(str) {
        return "<span class='yellow'>" + str + "</span>";
      }) + "</b>"
    : module.name;
  const menuId = "submenu_" + getApiId(module.name);
  return (
    <li className={liClass} id={menuId}>
      <Link id="home" to={getApiId(module.name)} href="javascript:;" onClick={onSelect}>
        <div dangerouslySetInnerHTML={{ __html: displayName }} />
      </Link>
      {(selectedModule.name === module.name || searchTerm) && (
        <ul className="submenu">
          {moduleAPIs.map(moduleAPI => {
            const apiID = getApiId(module.name, moduleAPI.name);
            const onClick = () => scrollToAPI(apiID);
            let childClass = selectedModuleAPI === apiID ? "active" : "";
            const apiDisplayName = searchTerm
              ? moduleAPI.name.replace(new RegExp(searchTerm, "gi"), function(str) {
                  return "<span class='yellow'>" + str + "</span>";
                })
              : moduleAPI.name;
            return (
              <li key={apiID} to={apiID} className={childClass}>
                <Link id="child" to={apiID} href="javascript:;" onClick={onClick}>
                  <div dangerouslySetInnerHTML={{ __html: apiDisplayName }} />
                </Link>
              </li>
            );
          })}
        </ul>
      )}
    </li>
  );
};

export default LeftMenu;
