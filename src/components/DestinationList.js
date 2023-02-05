import React from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const DestinationList = ({ destinations }) => {
  return (
    <DragDropContext>
      <Droppable droppableId="destinations">
        {(provided, snapshot) => (
          
          <ul 
          className="destinations" 
        //   {...provided.droppableProps} 
          ref={provided.innerRef}>

            {destinations.map((destination, index) => (
                <Draggable 
                key={destination} 
                draggableId={destination} 
                index={index}>

                    {(provided, snapshot) => (
              <li 
              key={index} 
              {...provided.dragHandleProps} 
              {...provided.draggableProps} 
              ref={provided.innerRef}>
                
                {destination}
                </li>
              )}
              </Draggable>
            ))}
          </ul>
         
        )} 
      </Droppable>
    </DragDropContext>
  );
};

export default DestinationList;
