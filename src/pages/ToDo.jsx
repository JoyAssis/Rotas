import React from "react";

export default class ToDo extends React.Component{
  state ={
    task:"",
    taskList:[]
  }

  handleChange = (e) => {
    this.setState({
      task: e.target.value
    })
  }

  addTask = () => {
    this.setState({
      taskList:this.state.taskList.concat({task: this.state.task, id: Date.now()}),
      task: ""   
    })
  }

  del = (id) => {
    this.setState({
      taskList:this.state.taskList.filter((task)=>{
        return task.id !== id
      })
    })
  }

  render(){
    return(
      <>
      <h1>To Do</h1>
      <p>{this.state.task}</p>
      <form onSubmit={(e)=>{e.preventDefault()}}>
        <input type="text" value={this.state.task} onChange={this.handleChange}/>
        <button onClick={this.addTask}>Adicionar tarefa</button>
      </form>
     
      <div className="tasklist">
        <ul >
          {this.state.taskList.map((task, index)=> (
            <div key={index}>
            <li id={index}>{task.task}</li> 
            {/* <li>{task.id}</li>             */}
            <button onClick={()=>{this.line(task.id,index)}}>✔</button>
            <button onClick={()=>{this.del(task.id)}}>✘</button>
            </div>
          ))}
        </ul>
      </div>
      </>
    )
  }
}