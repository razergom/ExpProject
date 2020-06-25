import * as React from "react";

import Task from "./Task";

interface Props {
  items: Array<Task>;
  onClick(id: string): any;
}

export class ItemListDiv extends React.Component<Props, {}> {
  render() {
    return (
      <div className="item-list">
        <ul>
          {this.props.items.map((item, index) => {
            return (
              <li
                style={
                  this.props.items[index].done
                    ? { textDecoration: "line-through" }
                    : undefined
                }
                onClick={() => this.props.onClick(this.props.items[index].id)}
                key={this.props.items[index].id}
              >
                {item.task}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
