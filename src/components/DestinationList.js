import React from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const DestinationList = ({ destinations, setDestinations }) => {
  console.log(destinations);

  const reorder = (destinations, startIndex, endIndex) => {
    const result = Array.from(destinations);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);

    return result;
  };

  const onEnd = (result) => {
    console.log(result);

    setDestinations(reorder(destinations, result.source.index, result.destination.index));
  };

  return (
    <div className="DestinationList">  
    <DragDropContext onDragEnd={onEnd}>
      <Droppable droppableId="destinations">
        {(provided, snapshot) => (
          <ul className="destinations py-2" ref={provided.innerRef}>
            {destinations.map((destination, index) => (
              <Draggable key={destination} draggableId={destination} index={index}>
                {(provided, snapshot) => (
                  <li key={index} {...provided.dragHandleProps} {...provided.draggableProps} ref={provided.innerRef} className="">
                    {destination}
                    <button onClick={() => setDestinations(destinations.filter((_, i) => i !== index))} className="text-blue-500 font-serif  hover:text-blue-900  px-1 py-0 m-2 ">X</button>
                  </li>
                )}
              </Draggable>
            ))}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
    </DragDropContext>
    
    
    </div>
  );
};

export default DestinationList;
