function Buttons(props) {
   function plus() {
      props.setCounter(props.counter + 3)
   }
   function minus() {
      if (props.counter > 1) {
         props.setCounter(props.counter - 2)
      } else if (props.counter == 1) {
         props.setCounter(props.counter - 1)
      }
   }

   function reset() {
      props.setCounter(0)
   }

   return <div className="buttons">
      <Enlarge elarge={plus} />
      <Reduce reduce={minus} />
      <Reset reset={reset} />
   </div>
}

function Enlarge(props) {
   return <div className="enlarge" onClick={props.elarge}>
      Увеличить
   </div>
}
function Reduce(props) {
   return <div className="reduce" onClick={props.reduce}>
      Уменьшить
   </div>
}
function Reset(props) {
   return <div className="reset" onClick={props.reset}>
      Сброс
   </div>
}
export default Buttons