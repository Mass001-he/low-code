import { useDrag } from "react-dnd"
import { ItemTypes } from "../../constants/item-types"

function WrappedDrag(props: { children: React.ReactNode }) {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.KNIGHT,
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging()
    })
  }))
  return (
    <div ref={drag as unknown as React.Ref<HTMLDivElement>}
      style={{
        opacity: isDragging ? 0.5 : 1,
        cursor: 'move',
        color: isDragging ? 'red' : 'black'
      }}
    >
      {props.children}
    </div>
  )
}


function Material() {
  return (
    <div className="w-full h-full grid grid-cols-2 gap-x-4 gap-y-4">
      <WrappedDrag>
        <div className="flex items-center justify-center px-4 py-2 rounded-md border">
          Click me
        </div>
      </WrappedDrag>

      <WrappedDrag>
        <div className="flex items-center justify-center px-4 py-2 rounded-md border">
          Click he
        </div>
      </WrappedDrag>

      <WrappedDrag>
        <div className="flex items-center justify-center px-4 py-2 rounded-md border">
          Click she
        </div>
      </WrappedDrag>
    </div>
  )
}

export default Material