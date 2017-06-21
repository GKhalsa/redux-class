import expect from 'expect';
import {createStore} from 'redux';
import React, {Component} from 'react';
import TestUtils from 'react-dom/test-utils';
import Provider from './Provider';
import PropTypes from 'prop-types';

describe('Provider', () => {

  const createChild = () => {
        class Child extends Component {
          render() {
            return <div />
          }
        }

        Child.contextTypes = {
          store: PropTypes.object.isRequired
        }
        return Child;
    };
    const Child = createChild();

    it('should enforce a single child', () => {
      const store = createStore(() => ({}));

      // Ignore propTypes warnings
      const propTypes = Provider.propTypes;
      Provider.propTypes = {};

      try {
        expect(() => TestUtils.renderIntoDocument(
          <Provider store={store}>
            <div />
          </Provider>
        )).toNotThrow()

        expect(() => TestUtils.renderIntoDocument(
          <Provider store={store}>
          </Provider>
        )).toThrow(/a single React element child/)

        expect(() => TestUtils.renderIntoDocument(
          <Provider store={store}>
            <div />
            <div />
          </Provider>
        )).toThrow(/a single React element child/)
      } finally {
        Provider.propTypes = propTypes
      }
    })


  it('should add the store to the child context', () => {
      const store = createStore(() => ({}));

      const spy = expect.spyOn(console, 'error');
      const tree = TestUtils.renderIntoDocument(
        <Provider store={store}>
          <Child />
        </Provider>
      )
      spy.destroy();
      expect(spy.calls.length).toBe(0);

      const child = TestUtils.findRenderedComponentWithType(tree, Child);
      expect(child.context.store).toBe(store);
    })

});
