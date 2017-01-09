import CanvasStore from '../stores/CanvasStore';

const CanvasActions = {
  add: (canvasObj) => {
    CanvasStore.addCanvas(canvasObj);
  },
  update: (id, canvasObj) => {
    CanvasStore.update(id, canvasObj);
  },
  getAll: () => {
    return CanvasStore.getStore();
  }
}

export default CanvasActions;