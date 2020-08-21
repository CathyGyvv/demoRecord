import React from 'react';

// 按需加载
class Bundle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // short for "module" but that's a keyword in js, so "mod"
      mod: null
    };
  }

  componentWillMount() {
    nprogressUtils.start();
    this.load(this.props);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.load !== this.props.load) {
      this.load(nextProps);
    }
  }

  componentDidMount() {
    nprogressUtils.done();
  }

  //solved problem: Can't perform a React state update on an unmounted component
  componentWillUnmount() {
    this.setState = () => {
      return;
    };
  }

  load(props) {
    this.setState({
      mod: null
    });
    props.load((mod) => {
      this.setState({
        // handle both es imports and cjs
        mod: mod.default ? mod.default : mod
      });
    });
  }

  render() {
    return this.state.mod ? this.props.children(this.state.mod) : null;
  }
}
const createComponent = (component) => () => (
  <Bundle load={component}>{(Component) => (Component ? <Component /> : null)}</Bundle>
);
export default createComponent;
