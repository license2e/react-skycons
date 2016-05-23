'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactDom = require('react-dom');

var _reactDom2 = _interopRequireDefault(_reactDom);

var Skycons = require('skycons')(window);

var ReactSkycons = _react2['default'].createClass({
  displayName: 'ReactSkycons',

  propTypes: {
    color: _react2['default'].PropTypes.string,
    autoplay: _react2['default'].PropTypes.bool,
    icon: _react2['default'].PropTypes.oneOf(['CLEAR_DAY', 'CLEAR_NIGHT', 'PARTLY_CLOUDY_DAY', 'PARTLY_CLOUDY_NIGHT', 'CLOUDY', 'RAIN', 'SLEET', 'SNOW', 'WIND', 'FOG'])
  },

  getDefaultProps: function getDefaultProps() {
    return {
      color: null,
      autoplay: true
    };
  },

  getInitialState: function getInitialState() {
    return {
      skycons: new Skycons({ 'color': this.props.color })
    };
  },

  componentDidMount: function componentDidMount() {
    this.state.skycons.add(_reactDom2['default'].findDOMNode(this), Skycons[this.props.icon]);
    if (this.props.autoplay) {
      this.state.skycons.play();
    }
  },

  componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
    this.state.skycons.set(_reactDom2['default'].findDOMNode(this), Skycons[nextProps.icon]);
  },

  componentWillUnmount: function componentWillUnmount() {
    this.state.skycons.pause();
    this.state.skycons.remove(_reactDom2['default'].findDOMNode(this));
  },

  play: function play() {
    this.state.skycons.play();
  },

  pause: function pause() {
    this.state.skycons.pause();
  },

  render: function render() {
    var props = {};
    for (var prop in this.props) {
      props[prop] = this.props[prop];
    }
    delete props.autoplay;
    return _react2['default'].createElement('canvas', props);
  }
});

exports['default'] = ReactSkycons;
module.exports = exports['default'];
