import React from "react";
import LeftMenu from "./leftMenu";
import SectionContent from "./sectionContent";
import { getModuleAPIs, getApiId } from "./utils";

class Home extends React.Component {
  constructor(props) {
    super(props);
    const selectedModule = props.selectedModule || props.modules[0];
    const apis = getModuleAPIs(selectedModule);
    const apiName = !apis || apis.length === 0 ? "" : apis[0].name;
    this.state = {
      selectedModule: selectedModule,
      selectedModuleAPI: props.selectedModuleAPI || getApiId(selectedModule.name, apiName)
    };
    this.selectModule = this.selectModule.bind(this);
    this.scrollToAPI = this.scrollToAPI.bind(this);
    this.setChildMenu = this.setChildMenu.bind(this);
  }

  componentDidMount() {
    const itemName = this.props.selectedModuleAPI;
    if (itemName) {
      var element = document.getElementById(itemName);
      if (element) {
        element.scrollIntoView();
        window.scrollBy(0, -60);
      }
    }
  }

  selectModule(selectedModule, selectedModuleAPI) {
    this.setState({ selectedModule, selectedModuleAPI });
    window.scrollTo(0, 0);
  }

  scrollToAPI(selectedModuleAPI) {
    var element = document.getElementById(selectedModuleAPI);
    if (element) {
      element.scrollIntoView();
      window.scrollBy(0, -60);
    }
    this.setState({ selectedModuleAPI });
  }

  setChildMenu(selectedModuleAPI) {
    this.setState({ selectedModuleAPI });
  }

  render() {
    const { selectedModule, selectedModuleAPI } = this.state;
    const { modules } = this.props;
    return (
      <div>
        <header>
          <div className="group">
            <div className="group-item right">
              <h2>Admin Console Documentation</h2>
            </div>
          </div>
        </header>
        <LeftMenu
          scrollToAPI={this.scrollToAPI}
          onSelectModule={this.selectModule}
          selectedModuleAPI={selectedModuleAPI}
          selectedModule={selectedModule}
          modules={modules}
        />
        <SectionContent
          modules={modules}
          selectedModule={selectedModule}
          setChildMenu={this.setChildMenu}
        />
      </div>
    );
  }
}

export default Home;
