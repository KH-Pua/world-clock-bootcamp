import React from "react";

export default class Clock extends React.Component {
  constructor(props) {
    super(props);

    // Objects the store different properties or variable of this particular component
    this.state = {
      date: new Date(),
      timeZone: this.props.timeZone,
    };
  }

  tick() {
    this.setState({
        date: new Date(),
    });
  }

  //We have an object called "props" that being passed in "this.props.XXX" and
  //another built-in property called "state" that stored an object of key, value pairs variable.

  // Built-in methods of the app class
  componentDidMount() {
    this.timerId = setInterval(() => this.tick(), 1000);
  }

  componentDidUpdate() {}

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    const timeLocale = {
      "America/New_York": {locale: "en-US", gmt: "GMT-5"},
      "Europe/London": {locale: "en-GB", gmt: "GMT+0"},
      "Asia/Dubai": {locale: "ar-AE", gmt: "GMT+4"},
      "Asia/Singapore": {locale: "en-SG", gmt: "GMT+8"},
      "Asia/Hong_Kong": {locale: "zh-HK", gmt: "GMT+8"},
      "Asia/Seoul": {locale: "ko-KR", gmt: "GMT+9"}
    }

    return (
      <div>
        {this.state.timeZone} ({timeLocale[this.state.timeZone]["gmt"]})
        <br />
        {this.state.date.toLocaleString(timeLocale[this.state.timeZone]["locale"], {
          timeZone: this.props.timeZone
        })}
        <br />
      </div>
    );
  }
}
