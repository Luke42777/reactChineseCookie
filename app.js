class Omen extends React.Component{
state = {
    omen: null,
    newOmen: "",
}

omens = [
"You will be rich!!!", 
"You will be Frontend developer!!!",
"You are going to travel far!!!"];
    


handleClick = () => {
    const random = Math.floor(Math.random() * this.omens.length); 
  this.setState({
      omen: this.omens[random],
  })
}
handleInputChange = (e) => {
    this.setState({
        newOmen: e.target.value,
    })
}
handleAddOmen = () => {
    this.omens.push(this.state.newOmen);
    this.setState({
        newOmen: "",
    })
}

render(){
    return(
        <>
        <button onClick={this.handleClick}>Show omen</button>
        <br />
            <input type="submit" onChange={this.handleInputChange} value={this.state.newOmen} type="text" />
            <button onClick={this.handleAddOmen} >Add omen</button> 
        {this.state.omen !== null ? <h1>{this.state.omen}</h1> : null}
        </>
    )
}

}



ReactDOM.render(<React.StrictMode><Omen /></React.StrictMode>, document.getElementById("root"))