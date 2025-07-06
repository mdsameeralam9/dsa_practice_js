const explorer = {
  id: "1",
  name: "root",
  isFolder: true,
  items: [
    {
      id: "2",
      name: "public",
      isFolder: true,
      items: [
        {
          id: "3",
          name: "public nested 1",
          isFolder: true,
          items: [
            {
              id: "4",
              name: "index.html",
              isFolder: false,
              items: []
            },
            {
              id: "5",
              name: "hello.html",
              isFolder: false,
              items: [
                {
                  id: "25",
                  name: "hello.html",
                  isFolder: false,
                  items: [
                    {
                      id: "35",
                      name: "hello.html",
                      isFolder: false,
                      items: [
                        {
                          id: "45",
                          name: "hello.html",
                          isFolder: false,
                          items: [
                            {
                              id: "55",
                              name: "hello.html",
                              isFolder: false,
                              items: [

                              ]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                }
              ]
            }
          ]
        },
        {
          id: "6",
          name: "public_nested_file",
          isFolder: false,
          items: []
        }
      ]
    },
    {
      id: "7",
      name: "src",
      isFolder: true,
      items: [
        {
          id: "8",
          name: "App.js",
          isFolder: false,
          items: []
        },
        {
          id: "9",
          name: "Index.js",
          isFolder: false,
          items: []
        },
        {
          id: "10",
          name: "styles.css",
          isFolder: false,
          items: []
        }
      ]
    },
    {
      id: "11",
      name: "package.json",
      isFolder: false,
      items: []
    }
  ]
};

const useTraverseTree = () => {
  const insertNode = function (tree, folderId, item, isFolder) {
    if (tree.id === folderId && tree.isFolder) {
      tree.items.unshift({
        id: new Date().getTime(),
        name: item,
        isFolder: isFolder,
        items: []
      });
      return tree;
    }

    let latestNode = tree.items.map((ob) => {
      return insertNode(ob, folderId, item, isFolder);
    });

    return { ...tree, items: latestNode };
  };

  const deleteNode = function (tree, nodeId) {
    if (!tree.items) return tree;
    const filteredItems = tree.items.filter(item => item.id !== nodeId).map(item => deleteNode(item, nodeId));
    return { ...tree, items: filteredItems };
  };

  const renameNode = (tree, folderId, value) => { 
    if(tree.id === folderId){
      return {...tree, name: value}
    }

    // chiilds update
    let itemsArr = [];
    
   itemsArr = tree.items.map(childNode => {
       return renameNode(childNode, folderId, value)
    })

    return {...tree, items: itemsArr}

  }; 

  return { insertNode, deleteNode, renameNode };
};


const { renameNode } = useTraverseTree();
const updatedExplorer = renameNode(explorer, "55", 'Sameer_root');

console.log(updatedExplorer);
//JSON.stringify(updatedExplorer, null, 2)
//console.log();
