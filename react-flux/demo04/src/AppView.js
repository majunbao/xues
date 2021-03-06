import React from 'react';
import Draggable, {DraggableCore} from 'react-draggable';

function AppView(props) {
  const SideArray = [
    {
      content: '111111'
    },
    {
      content: '222222'
    },
    {
      content: '333333'
    }
  ];
  return (
    <div className="out">
      <DragTestGroup data={SideArray}>w</DragTestGroup>
    </div>
  )
}

function Test(props) {
  const items = props.val.map((item, index) => {
    return <Draggable 
      key={index}
      onStop={(e,a,c)=> {
        a.x = 318
        a.y = 56
      }}
      defaultPosition={{x:50,y:20}}
    ><p>{item.text}</p></Draggable>;
  });
  const id = Math.random();
  return (
    <div>
      <h1>{items}</h1>
      <p><button onClick={function(){props.onTest(id)}}>add</button></p>
      <p><button onClick={function(){props.onSort(id)}}>排序</button></p>
    </div>
  )
}

class DragTestGroup extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data:  props.data
    },
    this.onDragEnd = this.onDragEnd.bind(this);
  }

  onDragEnd(e,data,pid){
    console.log((data.y))
    this.state.data.splice(1,1, this.state.data[0])
    this.setState({
      data: this.state.data
    })
  }

  render() {
    let that = this;
    let d = this.state.data.map(function(v,i){
      return <DragTest top={`${i*110}px`} text={v.content} dragEnd={that.onDragEnd} pid={i} />
    })
    return (
      <div>{d}</div>
    )
  }
}

class DragTest extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      x: 0,
      y: 0
    };
    this.onDrag = this.onDrag.bind(this);
    this.onStop = this.onStop.bind(this);
    this.onStart = this.onStart.bind(this);
  }

  onDrag(event,data) {
    this.setState({ 
      x: this.state.x += data.deltaX,
      y: this.state.y += data.deltaY
    })
  }

  onStop(event, data, pid) {
    this.setState({
      x: 0,
      y: 0
    })
    this.props.dragEnd(event, data, pid)
  }

  onStart(event, data) {
    this.setState({
    })
  }

  render() {
    return (
      <DraggableCore onDrag={this.onDrag} onStop={(e,d) => {this.onStop(e,d, this.props.pid)}} onStart={this.onStart}>
        <p style={{transform:`translate(${this.state.x}px, ${this.state.y}px)`,top: this.props.top}}>{this.props.text}</p>
      </DraggableCore>
    )
  }
}

export default AppView;