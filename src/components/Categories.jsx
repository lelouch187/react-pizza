import React from "react"

class Categories extends React.Component {
    state = {
        activeItem: null,
    }
    
    onActiveItem = (index) => {
        this.setState({
            activeItem: index,
        })
    }

    render() {
        const {items} = this.props
        return(
            <div className="categories">
            <ul>
              <li>Все</li>
              {items.map((item, index) => <li 
              onClick={() => this.onActiveItem(index)}
              className={this.state.activeItem === index ? 'active' : ''}
              key={`${item}_${index}`}>{item}</li>)}
            </ul>
          </div>
        )
    }
}

export default Categories