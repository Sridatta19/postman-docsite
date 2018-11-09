import React from "react";
import { getApiId, getModuleAPIs } from "../utils";
import { ModuleDetail } from './moduleDetail'

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

export default SectionContent;
