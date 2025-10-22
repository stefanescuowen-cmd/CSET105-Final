//create grocery list
//add items adds items to list
//when item added to list, update on screen list
//onclick item either removes or unremoves based on removal status

let groceryList = [];
const onScreenList = document.getElementById("groceryList");

function AddButtonClicked()
{
    let userItem = prompt(`What do you want to add?`);
    AddItem(userItem);
}
function AddItem(name)
{
    groceryList.push(name);
    UpdateOnScreenList();
}

function UpdateOnScreenList()
{
    //add each item to the visible list
    for (let i = 0; i < groceryList.length; i++)
    {
        let newVisibleItem = document.createElement("p");
        newVisibleItem.innerText = groceryList[i];
        onScreenList.append(newVisibleItem);
    }
}