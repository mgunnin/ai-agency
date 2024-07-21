import { Component } from "react";

interface ClockState {
  hour_12: boolean;
  current_time: Date;
}

interface ClockProps {
  onlyTime?: boolean;
  onlyDay?: boolean;
}

export default class Clock extends Component<ClockProps, ClockState> {
  private month_list: string[];
  private day_list: string[];
  private update_time: NodeJS.Timeout | null;

  constructor(props: ClockProps) {
    super(props)
    this.month_list = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ]
    this.day_list = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]
    this.state = {
      hour_12: true,
      current_time: new Date(),
    }
    this.update_time = null;
  }

  componentDidMount(): void {
    this.update_time = setInterval(() => {
      this.setState({ current_time: new Date() })
    }, 10 * 1000)
  }

  componentWillUnmount(): void {
    if (this.update_time) {
      clearInterval(this.update_time)
    }
  }

  render(): JSX.Element {
    const { current_time } = this.state

    let day = this.day_list[current_time.getDay()]
    let hour = current_time.getHours()
    let minute = current_time.getMinutes()
    let month = this.month_list[current_time.getMonth()]
    let date = current_time.getDate().toLocaleString()
    let meridiem = hour < 12 ? "AM" : "PM"

    if (minute.toLocaleString().length === 1) {
      minute = parseInt("0" + minute);
    }

    if (this.state.hour_12 && hour > 12) hour -= 12

    let display_time: string
    if (this.props.onlyTime) {
      display_time = hour + ":" + minute + " " + meridiem
    } else if (this.props.onlyDay) {
      display_time = day + " " + month + " " + date
    } else
      display_time =
        day +
        " " +
        month +
        " " +
        date +
        " " +
        hour +
        ":" +
        minute +
        " " +
        meridiem
    return <span>{display_time}</span>
  }
}