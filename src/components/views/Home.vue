<template>
  <div id="app">
    <Header />
    <AddTodo v-bind:todos="todos" v-on:add-todo="addTodo"/>
    <Todos v-bind:todos="todos" v-on:del-todo="deleteTodo" />
  </div>
</template>

<script>
import Todos from "../Todos";
import AddTodo from "../AddTodo";
import Header from "../layout/Header";
import axios from 'axios';

export default {
  name: 'Home',
  components: {
    Todos,
    Header,
    AddTodo
  },
  data() {
    return {
      todos: []
    }
  },
  methods: {
    deleteTodo(id) {
      this.todos = this.todos.filter(todo => todo.id != id);
      /*
      axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
        .then(resp => this.todos = this.todos.filter(todo => todo.id !== id))
        .catch(error => this.console.log(error));
      */
    },
    addTodo(todo) {
      //this.todos = [...this.todos, todo];
      const {title, completed} = todo
      axios.post('https://jsonplaceholder.typicode.com/todos',
        {
          title,
          completed
        } 
      )
        .then(resp => this.todos.push(resp.data))
        .catch(error => this.console.log(error))
    }
  },
  created() {
    axios.get('https://jsonplaceholder.typicode.com/todos?_limit=5')
      .then(resp => this.todos = resp.data)
      .catch(e => this.console.log(e));
  }
}
</script>

<style>
  *{
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: Arial, Helvetica, san-serif;
    line-height: 1.4;
  }

  .btn {
    display: inline-block;
    border: none;
    background: #555;
    color: #fff;
    padding: 7px 20px;
    cursor: pointer;
  }

  .btn:hover{
    background: #666;
  }
</style>
