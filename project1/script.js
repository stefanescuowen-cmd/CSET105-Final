//create grocery list
//add items adds items to list
//when item added to list, update on screen list
//onclick item either removes or unremoves based on removal status


let groceryList = [];
const onScreenList = document.getElementById("groceryList");

function AddButtonClicked()
{
    let userItem = prompt(`What do you want to add?`);
    AddItem(userItem, false);
}
function AddItem(name, removed)
{
    const item = {
        name: name,
        removed: removed
    };
    groceryList.push(item);
    UpdateOnScreenList();
}

function UpdateOnScreenList()
{
    //reset on screen list
    onScreenList.innerHTML = "";

    //add each item to the visible list
    for (let i = 0; i < groceryList.length; i++)
    {
        let newVisibleItem = document.createElement("div");

        //if item crossed out, cross it out
        if (groceryList[i].removed === true)
        {
            newVisibleItem.innerHTML = `
            <p value = "${i}" style="cursor:pointer" onclick="ToggleRemoval(${i})"><s>${groceryList[i].name}</s></p>
            `;
            onScreenList.append(newVisibleItem);
        }
        else if (groceryList[i].removed === false)
        {
            newVisibleItem.innerHTML = `
            <p value = "${i}" style="cursor:pointer" onclick="ToggleRemoval(${i})">${groceryList[i].name}</p>
            `;
            onScreenList.append(newVisibleItem);
        }

        
    }
}

function ToggleRemoval(index)
{
    if (groceryList[index].removed === false)
    {
        groceryList[index].removed = true;
        UpdateOnScreenList();
    }
    else if (groceryList[index].removed === true)
    {
        groceryList[index].removed = false;
        UpdateOnScreenList();
    }
}