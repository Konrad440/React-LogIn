import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// const greeting = ReactDOM.createRoot(document.getElementById("greeting"));
// greeting.render(<h1>Witaj, Konrad!</h1>);

// function formatName(user) {
//   return user.firstName + " " + user.lastName;
// }

// function getGreeting(user) {
//   if (user) {
//     return <h1>Witaj, {formatName(user)}!</h1>;
//   }
//   return <h1>Witaj, nieznajomy.</h1>;
// }

// const user = {
//   firstName: "Konrad",
//   lastName: "Banasik",
// };

// const element = <h1>{formatName(user)}!</h1>;

// const format = ReactDOM.createRoot(document.getElementById("format"));
// format.render(element);

// const webpage = <a href="http://www.onet.pl">Link </a>;
// const webpage1 = <img src={user.avatarUrl}></img>;

// const page = ReactDOM.createRoot(document.getElementById("page"));
// page.render(webpage);

// const element4 = <h1 className="greeting">Witaj, świecie!</h1>;

// const element5 = React.createElement(
//   "h1",
//   { className: "greeting" },
//   "Witaj, świecie"
// );

// const element6 = <h1>Witaj, świecie jeszcze raz!</h1>;

// const root2 = ReactDOM.createRoot(document.getElementById("root2"));

// function tick() {
//   const element7 = (
//     <div>
//       <h1>Witaj świecie!</h1>
//       <h2>Aktualny czas: {new Date().toLocaleTimeString()}.</h2>
//     </div>
//   );
//   root2.render(element7);
// }

// setInterval(tick, 1000);

// function Welcome(props) {
//   return <h1>Cześć, {props.name}!</h1>;
// }
// const tor = ReactDOM.createRoot(document.getElementById("tor"));
// const element7 = <Welcome name="Konrad" />;
// tor.render(element7);

// function Welcome2(props) {
//   return <h1>Czołem, {props.name}</h1>;
// }

// function App1() {
//   return (
//     <div>
//       <Welcome name="Sara" />
//       <Welcome name="Tadzio" />
//       <Welcome name="Kasia" />
//     </div>
//   );
// }
// const tor1 = ReactDOM.createRoot(document.getElementById("tor1"));
// tor1.render(<App1 />);

// function Avatar(props) {
//   return (
//     <img className="Avatar" src={props.user.avatarUrl} alt={props.user.name} />
//   );
// }

// function UserInfo(props) {
//   return (
//     <div className="UserInfo">
//       <Avatar user={props.user} />
//       <div className="UserInfo-name">{props.user.name}</div>
//     </div>
//   );
// }

// function formatDate(date) {
//   return date.toLocaleDateString();
// }

// function Comment(props) {
//   return (
//     <div className="Comment">
//       <UserInfo user={props.author} />
//       <div className="Comment-text">{props.text}</div>
//       <div className="Comment-date">{formatDate(props.date)}</div>
//     </div>
//   );
// }

// const comment = {
//   date: new Date(),
//   text: "I hope you enjoy learning React!",
//   author: {
//     name: "Konrad Banasik",
//     avatarUrl: "http://placekitten.com/g/64/64",
//   },
// };

// const root3 = ReactDOM.createRoot(document.getElementById("root3"));
// root3.render(
//   <Comment date={comment.date} text={comment.text} author={comment.author} />
// );

// // function Clock(props) {
// //   return (
// //     <div>
// //       <h1>Witaj ponownie, Konrad</h1>
// //       <h2>Aktualny czas to: {props.date.toLocaleTimeString()}.</h2>
// //     </div>
// //   );
// // }

// // class Clock extends React.Component {
// //   render() {
// //     return (
// //       <div>
// //         <h1>Witaj, świecie!</h1>
// //         <h2>Aktualny czas: {this.props.date.toLocaleTimeString()}.</h2>
// //       </div>
// //     );
// //   }
// // }
// class Clock extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { date: new Date() };
//   }

//   componentDidMount() {
//     this.timerID = setInterval(() => this.tick1(), 1000);
//   }

//   componentWillUnmount() {
//     clearInterval(this.timerID);
//   }

//   tick1() {
//     this.setState({
//       date: new Date(),
//     });
//   }

//   render() {
//     return (
//       <div>
//         <h1>Witaj, świecie!</h1>
//         <h2>Aktualny czas: {this.state.date.toLocaleTimeString()}.</h2>
//       </div>
//     );
//   }
// }

// function App2() {
//   return (
//     <div>
//       <Clock />
//       <Clock />
//       <Clock />
//     </div>
//   );
// }
// const root4 = ReactDOM.createRoot(document.getElementById("root4"));
// root4.render(<App2 />);

// class Toggle extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = { isToggleOn: true };

//     this.handleClick = this.handleClick.bind(this);
//   }
//   handleClick() {
//     this.setState((prevState) => ({
//       isToggleOn: !prevState.isToggleOn,
//     }));
//   }
//   render() {
//     return (
//       <button onClick={this.handleClick}>
//         {this.state.isToggleOn ? "Forward" : "Backward"}
//       </button>
//     );
//   }
// }

// class LoggingButton extends React.Component {
//   handleClick() {
//     console.log("this ma wartość: ", this);
//   }

//   render() {
//     return <button onClick={() => this.handleClick()}>Kliknij mnie</button>;
//   }
// }

// const button = ReactDOM.createRoot(document.getElementById("button"));
// button.render(<Toggle />);

// const button1 = ReactDOM.createRoot(document.getElementById("button1"));
// button1.render(<LoggingButton />);

// function UserGreeting(props) {
//   return <h1>Witamy ponownie!</h1>;
// }

// function GuestGreeting(props) {
//   return <h1>Proszę się zarejestrować</h1>;
// }

// function Greeting(props) {
//   const isLoggedIn = props.isLoggedIn;
//   if (isLoggedIn) {
//     return <UserGreeting />;
//   }
//   return <GuestGreeting />;
// }

// const root2 = ReactDOM.createRoot(document.getElementById("root"));
// root2.render(<Greeting isLoggedIn={false} />);

class LoginControl extends React.Component {
  constructor(props) {
    super(props);
    this.handleLoginClick = this.handleLoginClick.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.state = { isLoggedIn: false };
  }
  handleLoginClick() {
    this.setState({ isLoggedIn: true });
  }
  handleLogoutClick() {
    this.setState({ isLoggedIn: false });
  }

  render() {
    const isLoggedIn = this.state.isLoggedIn;
    let button;

    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleLogoutClick} />;
    } else {
      button = <LoginButton onClick={this.handleLoginClick} />;
    }
    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn} />
        {button}
      </div>
    );
  }
}

function UserGreeting(props) {
  return <h1>Welcome back!</h1>;
}

function GuestGreeting(props) {
  return <h1>Please sign up.</h1>;
}

function Greeting(props) {
  const isLoggedIn = props.isLoggedIn;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

function LoginButton(props) {
  return <button onClick={props.onClick}>Login</button>;
}

function LogoutButton(props) {
  return <button onClick={props.onClick}>Login</button>;
}

const root2 = ReactDOM.createRoot(document.getElementById("root2"));
root2.render(<LoginControl />);
