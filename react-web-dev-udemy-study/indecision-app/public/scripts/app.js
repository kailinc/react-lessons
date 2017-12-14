'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Counter = function (_React$Component) {
  _inherits(Counter, _React$Component);

  function Counter(props) {
    _classCallCheck(this, Counter);

    var _this = _possibleConstructorReturn(this, (Counter.__proto__ || Object.getPrototypeOf(Counter)).call(this, props));

    _this.state = {
      counter: props.counter
    };

    _this.handleAddOne = _this.handleAddOne.bind(_this);
    _this.handleMinusOne = _this.handleMinusOne.bind(_this);
    _this.handleReset = _this.handleReset.bind(_this);
    return _this;
  }

  _createClass(Counter, [{
    key: 'handleAddOne',
    value: function handleAddOne() {
      this.setState(function (prevState) {
        return {
          counter: prevState.counter + 1
        };
      });
    }
  }, {
    key: 'handleMinusOne',
    value: function handleMinusOne() {
      this.setState(function (prevState) {
        return {
          counter: prevState.counter - 1
        };
      });
    }
  }, {
    key: 'handleReset',
    value: function handleReset() {
      this.setState({
        counter: 0
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        React.createElement(
          'h1',
          null,
          'Counter: ',
          this.state.counter
        ),
        React.createElement(
          'button',
          { onClick: this.handleAddOne },
          'Add'
        ),
        React.createElement(
          'button',
          { onClick: this.handleMinusOne },
          'Minus'
        ),
        React.createElement(
          'button',
          { onClick: this.handleReset },
          'Reset'
        )
      );
    }
  }]);

  return Counter;
}(React.Component);

Counter.defaultProps = {
  counter: 0
};
ReactDOM.render(React.createElement(Counter, null), document.getElementById('app'));

// // JSX - JavaScript XML
// console.log('app.js is running')
//
// let app = {
//   title: 'Indecision App',
//   subTitle: 'App Fit for a King',
//   options: ['One', 'Two']
// }
//
// const template = (
//   <div>
//     <h1>{ app.title }</h1>
//     { app.subTitle && <p>{ app.subTitle }</p> }
//     <p>{ app.options.length > 0 ? 'Here are your options' : 'You have no options' }</p>
//     <ol>
//       <li>Item one</li>
//       <li>Item two</li>
//     </ol>
//   </div>
// )
//
// let count = 0
//
// const addCount = () => {
//   count++;
//   renderCounterApp()
// }
//
// const minusCount = () => {
//   count--;
//   renderCounterApp()
// }
// const resetCount = () => {
//   count = 0;
//   renderCounterApp()
// }
//
// const appRoot = document.getElementById('app');
//
// const renderCounterApp = () => {
//   const templateTwo = (
//     <div>
//       <h1>Count: { count }</h1>
//       <button onClick={ addCount }> +1 </button>
//       <button onClick={ minusCount }> -1 </button>
//       <button onClick={ resetCount }>Reset</button>
//     </div>
//   );
//
//   ReactDOM.render(
//     templateTwo,
//     appRoot
//   );
// }
//
// renderCounterApp()
