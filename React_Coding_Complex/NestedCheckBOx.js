const CheckboxesData = [
    {
        id: 1,
        label: "Fruits",
        children: [
            { id: 2, label: "Apple" },
            { id: 3, label: "Banana" },
            {
                id: 4,
                label: "Citrus",
                children: [
                    { id: 5, label: "Orange" },
                    { id: 6, label: "Lemon" },
                ],
            },
        ],
    },
    {
        id: 7,
        label: "Vegetables",
        children: [
            { id: 8, label: "Carrot" },
            { id: 9, label: "Broccoli" },
        ],
    },
];

const handleCheckBoc = (node = {}, isChecked = false) => {
    const newState = { ...state };
    newState[node.id] = isChecked;

    const updateChild = (selectedNode = []) => {
        if (!selectedNode || selectedNode?.children?.length === 0) return;

        for (const item of selectedNode) {
            newState[item.id] = isChecked;

            if (item?.children?.length > 0) {
                updateChild(item.children)
            }
        }

    }

    const updateParent = (seletcedData = {}, dataTree = []) => {
        const findParent = (id, dtree) => {
            for (const item of dtree) {
                if (item?.children?.some(neschild => neschild.id === id)) {
                    return item;
                }

                if (item?.children?.length > 0) {
                    const isParentFound = findParent(id, item.children)
                    if (isParentFound) return isParentFound
                }

            }
        }
        let isParent = findParent(seletcedData.id, dataTree);

        while (isParent) {
            newState[isParent.id] = isChecked;
            isParent = findParent(isParent.id, CheckboxesData);
        }
        console.log(isParent)
    }

    updateChild(node.children)
    updateParent(node, CheckboxesData)
    // update child
    setcheckBoxState(newState)
}