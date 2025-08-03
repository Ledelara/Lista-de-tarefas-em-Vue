const todosApp = {
  data() {
    return {
      todos: [],
      newTodo: { done: false }
    }
  },
  methods: {
    addTodo: function() {

      if(this.newTodo.text) {
        this.todos.push(this.newTodo);
        this.newTodo = { done: false };
        localStorage.setItem('todos', JSON.stringify(this.todos));
      } else {
        alert('Insera uma tarefa válida!');
        return;
      }
    }
  },
  created() {
    this.todos = localStorage.getItem('todos') ? JSON.parse(localStorage.getItem('todos')) : [];
  },
  updated() {
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }
}

Vue.createApp(todosApp).mount('#app');