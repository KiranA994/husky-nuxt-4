<template>
  <div>
    <h1>Todo App</h1>
    <ul>
      <li v-for="item in todos" :key="item.id">
        <span v-if="item.done">{{ item.title }}</span>
        <span v-else> {{ item.title }} </span>
        <button @click="toggle(item)">Toggle</button>
        <button @click="remove(item.id)">Delete</button>
      </li>
    </ul>

    <input v-model="newTodo" placeholder="Add todo" />
    <button @click="addTodo">Add</button>
  </div>
</template>

<script>
export default {
  name: 'TodoApp',
  data() {
    return {
      todos: [
        { id: 1, title: 'Learn Vue', done: false },
        { id: 2, title: 'Setup ESLint', done: true },
      ],
      newTodo: '',
    }
  },
  methods: {
    addTodo() {
      if (!this.newTodo) return
      this.todos.push({ id: Date.now(), title: this.newTodo, done: false })
      this.newTodo = ''
    },
    toggle(item) {
      item.done = !item.done
    },
    remove(id) {
      this.todos = this.todos.filter((t) => t.id !== id)
    },
  },
}
</script>

<style scoped>
ul {
  list-style: none;
  padding: 0;
}
li {
  display: flex;
  align-items: center;
  gap: 10px;
}
button {
  background: blue;
  color: white;
  border: none;
  padding: 5px;
}
</style>
