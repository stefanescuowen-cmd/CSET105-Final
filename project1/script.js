//create grocery list
//add items adds items to list
//when item added to list, update on screen list
//onclick item either removes or unremoves based on removal status


let groceryList = [];

//displaying list shows either fullList (default), purchasedItems, or unpurchasedItems;
let displayingList = "fullList";

const onScreenList = document.getElementById("groceryList");

//when add item is clicked
function AddButtonClicked()
{
    let userItem = prompt(`What do you want to add?`);

    //make sure item they enter is not empty
    if (userItem === "") return;

    AddItem(userItem, false);
}
function AddItem(name, purchased)
{
    const item = {
        name: name,
        purchased: purchased
    };

    //add item by default to both unpurchased and full list
    groceryList.push(item);

    //update the visible list
    UpdateOnScreenList();
}


//updates what the user sees
function UpdateOnScreenList()
{
    //reset on screen list
    onScreenList.innerHTML = "";

   
    //add each item to the visible list
    for (let i = 0; i < groceryList.length; i++)
    {
        let newVisibleItem = document.createElement("li");

        newVisibleItem.value = i;
        newVisibleItem.onclick = function() {
            ToggleRemoval(i);
        }

        //if item crossed out, cross it out
        if (groceryList[i].purchased === true && (displayingList === "purchasedItems" || displayingList === "fullList"))
        {
            newVisibleItem.innerHTML = `
            <s>${groceryList[i].name}</s>
            `;
            onScreenList.append(newVisibleItem);
        }
        else if (groceryList[i].purchased === false && (displayingList === "unpurchasedItems" || displayingList === "fullList"))
        {
            newVisibleItem.innerHTML = `
            ${groceryList[i].name}
            `;
            onScreenList.append(newVisibleItem);
        }
    }
    
}

function ToggleRemoval(index)
{
    //if adding item, adjust lists accordingly
    if (groceryList[index].purchased === false)
    {
        groceryList[index].purchased = true;
        UpdateOnScreenList();
    }
    //if removing purchased status, then adjust lists accordingly
    else if (groceryList[index].purchased === true)
    {
        groceryList[index].purchased = false;
        UpdateOnScreenList();   
    }
}

function ChangeItemView(value)
{
    //if full list, then display full list
    //else if purchased items, then display purchased items
    //else if unpurchased items, then display unpurchased items
    displayingList = value;
    UpdateOnScreenList();
}