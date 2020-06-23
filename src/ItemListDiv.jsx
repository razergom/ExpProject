import React from "react";

export class ItemListDiv extends React.Component {
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
                onClick={this.props.onClick}
                data-index={index}
                key={index}
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
