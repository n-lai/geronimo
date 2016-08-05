# Doctor Who Chrome Extension

Tired of the standard new tab page for Google Chrome? Fellow Whovian? You've come to the right place! The Doctor Who Chrome Extension replaces the standard new tab page and features a Tardis-themed background and to-do list to keep you on track as you browse the web.  

[Google Web Store] [link]

[link]: https://chrome.google.com/webstore/detail/doctor-who-tab/ckpglafpbjagceoefmgcifimljefkenb

![image of extension][extension-image]

[extension-image]: http://res.cloudinary.com/dl8lhjvx0/image/upload/c_scale,q_auto,w_1024/v1470196658/new_tab_screenshot_bakn0i.png  

## Todo List Built with React

### Component Breakdown
* App
  * TodoList
    * TodoListItem
    * TodoForm

### App
`App` contains all the logic for retrieving tasks from and updating `chrome.storage.local` with new tasks. This allows the to-do list to be persisted with each browser session. `fetchTasks()` retrieves the tasks stored in local storage and resets the state. The task array is then sent to `TodoList` as a prop to be rendered.

```javascript
fetchTasks() {
  chrome.storage.local.get('todo', tasks => {
    if (tasks.todo != null) {
      this.setState({ tasks: tasks.todo });
    }
  });
}
```

### TodoList and TodoListItem
In `TodoList`, each task is then passed as a prop to `TodoListItem`, along with the `handleDestroy` and `handleComplete` methods so that each task can be marked complete or removed from the list.

```javascript
  <TodoListItem
    task={task}
    handleDestroy={that._handleDestroy.bind(null, task.id)}
    handleComplete={that._handleComplete.bind(null, task.id)}
  />
```
