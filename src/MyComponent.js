import React from "react";

export default class extends React.Component {
  state = {
    title: "old title",
    loading: true,
    todos:[]
  };

  constructor(props) {
    super(props);
    console.log("Constructor");
  }

  /* Mounting */
  /*depricated*/
  // componentWillMount(){
  //     console.log("Component will mount!");
  // }

  /*Updating */
  /*depricated*/
  // componentWillReceiveProps(nextProps){
  //     console.log("componentWillReceiveProps");
  // }

  componentDidMount() {
    console.log("componentDidMount");

    setTimeout(() => {
    //   this.setState({ title: Math.random() > 0.5 ? 'old title':'new title'});
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(json => this.setState({...this.state, loading:false,todos:[...json]}))
    }, 3000);

  }

  static getDerivedStateFromProps(nextProps, nextState){
      console.log("getDerivedStateFromProps",nextProps,nextState);
      return nextState;
  }

  shouldComponentUpdate(nextProps,nextState){
      console.log("shouldComponentUpdate",nextProps,nextState);
    //   return this.state.title !== nextState.title;
    return true;
  }

  getSnapshotBeforeUpdate(prevProps,prevState){
      console.log("getSnapshotBeforeUpdate",prevProps,prevState);
      return prevState;
  }

  componentDidUpdate(prevProps,prevState){
      console.log("componentDidUpdate",prevProps,prevState);
  }

  componentWillUnmount(){
      console.log("componentWillUnmount");
  }

  render() {
    console.log("Render");
    return (
        <>
        {
            this.state.loading ? <div>Loading</div> : 
            <ul>
                {this.state.todos.map((todo,i) => <li key={i}>{todo.title}</li>)}
            </ul>
        }
        </>
    );
  }
}
