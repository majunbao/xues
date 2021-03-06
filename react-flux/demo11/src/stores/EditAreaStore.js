import {uuid} from '../views/base/Util';
import {EventEmitter} from 'events';
import RootStore from './RootStore';
import LayoutStore from './LayoutStore';

let _canvas = {};

// 确保传入参数是数字
let someToNumber = function(obj) {
  obj.x && (obj.x = parseInt(obj.x));
  obj.y && (obj.y = parseInt(obj.y));
};

class EditAreaStore extends RootStore {
  addCanvas = function(newData){
    // 处理参数，x、y处理成数字
    someToNumber(newData);
    // 生成组件对象
    const w = 150, h = 150, id = uuid();
    _canvas[id] = {
      ...{
        id: id,
        type: newData.type,
        x: parseInt(LayoutStore.getState().canvasWidth)/2 - parseInt(newData.width||w)/2,
        y: parseInt(LayoutStore.getState().canvasHeight)/2 - parseInt(newData.height||h)/2,
        width: w,
        height: w,
        fill: '#D8D8D8'
      }, ...newData
    };

    this.selectCanvas(id);
    this.emit();
  };

  updataCanvas = function(id, updateData) {
    someToNumber(updateData);
    if(id in _canvas) {
      Object.keys(updateData).forEach(function(key){
        _canvas[id][key] = updateData[key];
      });
      this.emit();
    }
  };

  deleteCanvas = function(id) {
    if(id in _canvas) {
      delete _canvas[id];
    }
  };

  selectCanvas = function(id) {
    if(id in _canvas) {
      Object.keys(_canvas).forEach((item) => {
        _canvas[item].isSelected = false
      });
      _canvas[id].isSelected = true;
      this.emit();
    }
  };

  cancelSelected = function() {
    Object.keys(_canvas).forEach((item) => {
      _canvas[item].isSelected = false
    });
    this.emit();
  }

  // 返回选中的第一个组件id
  getCanvasBySelected = function() {
    let selectCanvasId = null;
    Object.keys(_canvas).forEach((item) => {
      if(_canvas[item]['isSelected']) {
        return selectCanvasId = _canvas[item]['id'];
      }
    });
    return selectCanvasId;
  };

  getState = function() {
    return _canvas;
  };
}

export default new EditAreaStore();