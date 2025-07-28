
// render UI using Object
const UIDataObj = {
  "type": "div",
  "key": null,
  "props": {
    "children": [
      {
        "type": "div",
        "key": null,
        "props": {
          "children": {
            "type": "h1",
            "key": null,
            "props": {
              "children": "Hello + React"
            }
          }
        }
      },
      {
        "type": "h1",
        "key": null,
        "props": {
          "children": "Vite + React"
        }
      },
      {
        "type": "div",
        "key": null,
        "props": {
          "className": "card",
          "children": [
            {
              "type": "button",
              "key": null,
              "props": {
                "children": "count is 1"
              }
            },
            {
              "type": "p",
              "key": null,
              "props": {
                "children": [
                  "Edit ",
                  {
                    "type": "code",
                    "key": null,
                    "props": {
                      "children": "src/App.jsx"
                    },
                  },
                  " and save to test HMR"
                ]
              }
            },
            {
              type: "div",
              props: {
                children: [
                  {
                    type: "p",
                    props: {
                      children: "I am inner most one"
                    }
                  },
                  {
                    type: "h2",
                    props: {
                      children: "I am inner most two"
                    }
                  },
                  {
                    type: "div",
                    props: {
                      children: [
                        {
                          type: "div",
                          props: {
                            children: 'last iinder'
                          }
                        }
                      ]
                    }
                  }
                ]
              }
            }
          ]
        }
      },
      {
        "type": "p",
        "key": null,
        "props": {
          "className": "read-the-docs",
          "children": "Click on the Vite and React logos to learn more"
        }
      }
    ]
  }
}

function createElement(data = {}) {
  const { type = "div", props = {} } = data;
  const { children, className } = props;
  const element = document.createElement(type);
  
  if (className) element.className = className;
  
  if (typeof children === 'string') {
    element.innerText = children;
  } else if (Array.isArray(children)) {
    children.forEach(child => element.appendChild(createElement(child)));
  } else if (children) {
    element.appendChild(createElement(children));
  }
  
  return element;
}
function createRoot(container) {
  return {
    render: (element) => container.append(createElement(element))
  };
}

createRoot(document.getElementById('root')).render(UIDataObj)
