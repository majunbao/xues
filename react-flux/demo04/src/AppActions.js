import AppDispatcher from './AppDispatcher';

const AppActions = {
  test(text) {
    AppDispatcher.dispatch({
      type: 'test',
      text: text
    })
  },
  sort() {
    AppDispatcher.dispatch({
      type: 'sort'
    })
  },
  dragEnd() {
    AppDispatcher.dispatch({
      type: 'dragend'
    })
  }
}

export default AppActions;