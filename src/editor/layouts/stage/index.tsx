

import { useShallow } from "zustand/shallow";
import { useComponentsStore, type ComponentSchema } from "../../store/components";
import React from "react";
import { componentsMap } from "../../common/componentsMap";
import { useDrop } from "react-dnd";
import { ItemTypes } from "../../constants/item-types";

function Stage() {
  const { components } = useComponentsStore(
    useShallow((state) => ({ components: state.components }))
  );

  function renderComponents(components: ComponentSchema[]): React.ReactNode[] {
    return components.map(({ type, props, children }) => {
      if (!componentsMap[type]) {
        return [];
      }

      return React.createElement(
        componentsMap[type],
        { ...props },
        ...(children && children.length > 0 ? renderComponents(children) : [])
      );
    });
  }

  const [{ isOver }, drop] = useDrop(() => ({
    accept: [ItemTypes.KNIGHT],
    collect: monitor => ({
      isOver: !!monitor.isOver(),
    }),
    drop: (item, monitor) => {
      const dropResult = monitor.getDropResult();
      console.log('dropResult', dropResult, item);
      const itemType = monitor.getItemType();
      console.log('itemType', itemType);
      if (dropResult) {
        console.log('Dropped item:', item);
      }
    }
  }), [])

  return (
    <div className="w-full h-full" ref={drop as unknown as React.Ref<HTMLDivElement>}>
      {isOver && <div className="w-full h-full bg-red-500 opacity-50" />}
      {renderComponents(components)}
    </div>
  )
}
export default Stage