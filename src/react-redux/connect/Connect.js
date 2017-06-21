import React from 'react';
import PropTypes from 'prop-types';


const connect = (mapStateToProps,mapDispatchToProps) => (Component) => {

  class Connected extends React.Component {

    onStoreOrPropsChange(){
      const {store} = this.context;
      const state = store.getState();
      const stateProps = mapStateToProps(state);
      const dispatchProps = mapDispatchToProps(store.dispatch);
      this.setState({
        ...stateProps,
        ...dispatchProps
      });
    }

    componentWillMount(){
      const {store} = this.context;
      this.onStoreOrPropsChange();
      store.subscribe(() => this.onStoreOrPropsChange());
    }

    render(){
      return <Component {...this.state}/>;
    }
  }

  Connected.contextTypes = {
    store: PropTypes.object
  };

  return Connected;
}

export default connect;
