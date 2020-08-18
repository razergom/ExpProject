import React from "react";

import Task from "./Task";

interface Props {
  items: Array<Task>;
  onClick: (id: string) => void;
}

export class ItemListDiv extends React.Component<Props, {}> {
  render() {
    const { items, onClick } = this.props;

    return (
      <div className="item-list">
        <ul>
          {items.map((item) => (
            <li
              style={item.done ? { textDecoration: "line-through" } : undefined}
              onClick={() => onClick(item.id)}
              key={item.id}
            >
              {item.task}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
