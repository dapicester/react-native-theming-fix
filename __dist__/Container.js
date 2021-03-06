Object.defineProperty(exports,"__esModule",{value:true});var _extends=Object.assign||function(target){for(var i=1;i<arguments.length;i++){var source=arguments[i];for(var key in source){if(Object.prototype.hasOwnProperty.call(source,key)){target[key]=source[key];}}}return target;};var _jsxFileName='src/Container.js';var _createClass=function(){function defineProperties(target,props){for(var i=0;i<props.length;i++){var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if("value"in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);}}return function(Constructor,protoProps,staticProps){if(protoProps)defineProperties(Constructor.prototype,protoProps);if(staticProps)defineProperties(Constructor,staticProps);return Constructor;};}();





var _react=require('react');var _react2=_interopRequireDefault(_react);
var _propTypes=require('prop-types');var _propTypes2=_interopRequireDefault(_propTypes);
var _reactNative=require('react-native');

var _Theme=require('./Theme');
var _ThemedStyle=require('./ThemedStyle');var _ThemedStyle2=_interopRequireDefault(_ThemedStyle);function _interopRequireDefault(obj){return obj&&obj.__esModule?obj:{default:obj};}function _objectWithoutProperties(obj,keys){var target={};for(var i in obj){if(keys.indexOf(i)>=0)continue;if(!Object.prototype.hasOwnProperty.call(obj,i))continue;target[i]=obj[i];}return target;}function _classCallCheck(instance,Constructor){if(!(instance instanceof Constructor)){throw new TypeError("Cannot call a class as a function");}}function _possibleConstructorReturn(self,call){if(!self){throw new ReferenceError("this hasn't been initialised - super() hasn't been called");}return call&&(typeof call==="object"||typeof call==="function")?call:self;}function _inherits(subClass,superClass){if(typeof superClass!=="function"&&superClass!==null){throw new TypeError("Super expression must either be null or a function, not "+typeof superClass);}subClass.prototype=Object.create(superClass&&superClass.prototype,{constructor:{value:subClass,enumerable:false,writable:true,configurable:true}});if(superClass)Object.setPrototypeOf?Object.setPrototypeOf(subClass,superClass):subClass.__proto__=superClass;}

var stylePropType=_propTypes2.default.oneOfType([
_propTypes2.default.number,
_propTypes2.default.instanceOf(_ThemedStyle2.default),
_propTypes2.default.object,
_propTypes2.default.arrayOf(_propTypes2.default.oneOfType([
_propTypes2.default.number,
_propTypes2.default.instanceOf(_ThemedStyle2.default),
_propTypes2.default.object]))]);var



Container=function(_Component){_inherits(Container,_Component);
















function Container(props){_classCallCheck(this,Container);var _this=_possibleConstructorReturn(this,(Container.__proto__||Object.getPrototypeOf(Container)).call(this,
props));

var theme=(0,_Theme.getCurrentTheme)();
_this.state={
theme:theme,
image:theme.getProp(props.image)};return _this;

}_createClass(Container,[{key:'UNSAFE_componentWillMount',value:function UNSAFE_componentWillMount()

{
this.unregister=(0,_Theme.registerComponent)(this);
}},{key:'UNSAFE_componentWillReceiveProps',value:function UNSAFE_componentWillReceiveProps(

nextProps){var _state=
this.state,theme=_state.theme,image=_state.image;

var newImage=theme.getProps(nextProps.image);
if(newImage!==image){
this.setState({
image:newImage});

}
}},{key:'componentWillUnmount',value:function componentWillUnmount()

{
this.unregister();
}},{key:'setTheme',value:function setTheme(

newTheme){
this.setState({
theme:newTheme,
image:newTheme.getProp(this.props.image)});

}},{key:'render',value:function render()

{var _props=
this.props,viewStyle=_props.viewStyle,imageStyle=_props.imageStyle,children=_props.children,other=_objectWithoutProperties(_props,['viewStyle','imageStyle','children']);var _state2=
this.state,theme=_state2.theme,image=_state2.image;


if(image){
return _react2.default.createElement(_reactNative.Animated.Image,_extends({style:theme.getStyle(imageStyle)},other,{source:image,__source:{fileName:_jsxFileName,lineNumber:84}}));
}


return(
_react2.default.createElement(_reactNative.Animated.View,_extends({style:theme.getStyle(viewStyle)},other,{__source:{fileName:_jsxFileName,lineNumber:89}}),
children));


}}]);return Container;}(_react.Component);Container.propTypes={viewStyle:stylePropType,imageStyle:stylePropType,children:_propTypes2.default.oneOfType([_propTypes2.default.node,_propTypes2.default.arrayOf(_propTypes2.default.node)]),image:_propTypes2.default.string.isRequired};Container.defaultProps={viewStyle:undefined,imageStyle:undefined,children:undefined};exports.default=


Container;