class App extends Component {
  componentDidMount() {
    fetch("https://ghibliapi.herokuapp.com/films")
      .then(res => res.json())
      .then(obj => console.log(obj));
  }
}
