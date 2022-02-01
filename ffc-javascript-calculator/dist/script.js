function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;}const projectName = "Javascript calculator";
const nums = [7, 8, 9, 4, 5, 6, 1, 2, 3, 0];
const ops = ["/", "*", "-", "+"];
const ids = {
  7: "seven",
  8: "eight",
  9: "nine",
  4: "four",
  5: "five",
  6: "six",
  1: "one",
  2: "two",
  3: "three",
  0: "zero",
  "/": "divide",
  "*": "multiply",
  "-": "subtract",
  "+": "add" };


class App extends React.Component {
  constructor(props) {
    super(props);_defineProperty(this, "handleClick",






    e => {
      const { calc, lastPressed } = this.state;
      const { innerText } = e.target;

      switch (innerText) {
        case "AC":{
            this.setState({
              calc: "0" });

            break;
          }
        case "=":{
            const evaluated = eval(calc);
            this.setState({
              calc: evaluated });

            break;
          }
        case ".":{
            const splitted = calc.split(/[\+\-\*\/]/);
            const last = splitted.slice(-1)[0];
            if (!last.includes(".")) {
              this.setState({
                calc: calc + "." });

            }
            break;
          }

        default:{
            let e = undefined;
            // check for other op
            if (ops.includes(innerText)) {
              if (ops.includes(lastPressed) && innerText !== "-") {
                // oh boii...
                const lastNumberIdx = calc.
                split("").
                reverse().
                findIndex(char => char !== " " && nums.includes(+char));
                e = calc.slice(0, calc.length - lastNumberIdx) + ` ${innerText} `;
              } else {
                e = `${calc} ${innerText} `;
              }
            } else {
              e = calc === "0" ? innerText : calc + innerText;
            }

            this.setState({
              calc: e });

          }}


      this.setState({
        lastPressed: innerText });

    });this.state = { lastPressed: undefined, calc: "0", operation: undefined };}

  render() {
    const { currentNumber, calc, operation } = this.state;
    return /*#__PURE__*/(
      React.createElement("div", { className: "calculator" }, /*#__PURE__*/
      React.createElement("div", { id: "display", className: "display" },
      calc,

      currentNumber), /*#__PURE__*/

      React.createElement("div", { className: "num-container" }, /*#__PURE__*/
      React.createElement("button", { id: "clear", className: "light-gray", onClick: this.handleClick }, "AC"),


      nums.map((no) => /*#__PURE__*/
      React.createElement("button", {
        className: "dark-gray",
        onClick: this.handleClick,
        key: no,
        id: ids[no] },

      no)), /*#__PURE__*/


      React.createElement("button", { className: "orange", onClick: this.handleClick, id: "decimal" }, ".")), /*#__PURE__*/



      React.createElement("div", { className: "ops-container" },
      ops.map((op) => /*#__PURE__*/
      React.createElement("button", {
        className: "orange",
        onClick: this.handleClick,
        key: op,
        id: ids[op] },

      op)), /*#__PURE__*/


      React.createElement("button", { className: "orange", onClick: this.handleClick, id: "equals" }, "="))));





  }}

ReactDOM.render( /*#__PURE__*/React.createElement(App, null), document.getElementById("app"));