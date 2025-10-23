//create grocery list
//add items adds items to list
//when item added to list, update on screen list
//onclick item either removes or unremoves based on removal status


let groceryList = [];
let purchasedItems = [];
let unpurchasedItems = [];

//displaying list shows either fullList (default), purchasedItems, or unpurchasedItems;
let displayingList = "fullList";

const onScreenList = document.getElementById("groceryList");

function AddButtonClicked()
{
    let userItem = prompt(`What do you want to add?`);
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
    unpurchasedItems.push(item);

    //update the visible list
    UpdateOnScreenList();
}

function UpdateOnScreenList()
{
    //reset on screen list
    onScreenList.innerHTML = "";

    //will update list with appropriate list
    if (displayingList === "fullList")
    {
        //add each item to the visible list
        for (let i = 0; i < groceryList.length; i++)
        {
            let newVisibleItem = document.createElement("div");

            //if item crossed out, cross it out
            if (groceryList[i].purchased === true)
            {
                newVisibleItem.innerHTML = `
                <p value = "${i}" style="cursor:pointer" onclick="ToggleRemoval(${i})"><s>${groceryList[i].name}</s></p>
                `;
                onScreenList.append(newVisibleItem);
            }
            else if (groceryList[i].purchased === false)
            {
                newVisibleItem.innerHTML = `
                <p value = "${i}" style="cursor:pointer" onclick="ToggleRemoval(${i})">${groceryList[i].name}</p>
                `;
                onScreenList.append(newVisibleItem);
            }
        }
    }

    //will update list with appropriate list
    else if (displayingList === "purchasedList")
    {
        //add each item to the visible list
        for (let i = 0; i < purchasedItems.length; i++)
        {
            let newVisibleItem = document.createElement("div");

            //if item crossed out, cross it out
            if (purchasedItems[i].purchased === true)
            {
                newVisibleItem.innerHTML = `
                <p value = "${i}" style="cursor:pointer" onclick="ToggleRemoval(${i})"><s>${purchasedItems[i].name}</s></p>
                `;
                onScreenList.append(newVisibleItem);
            }
            else if (purchasedItems[i].purchased === false)
            {
                newVisibleItem.innerHTML = `
                <p value = "${i}" style="cursor:pointer" onclick="ToggleRemoval(${i})">${purchasedItems[i].name}</p>
                `;
                onScreenList.append(newVisibleItem);
            }
        }
    }

    //will update list with appropriate list
    else if (displayingList === "unpurchasedList")
    {
        //add each item to the visible list
        for (let i = 0; i < unpurchasedItems.length; i++)
        {
            let newVisibleItem = document.createElement("div");

            //if item crossed out, cross it out
            if (unpurchasedItems[i].purchased === true)
            {
                newVisibleItem.innerHTML = `
                <p value = "${i}" style="cursor:pointer" onclick="ToggleRemoval(${i})"><s>${unpurchasedItems[i].name}</s></p>
                `;
                onScreenList.append(newVisibleItem);
            }
            else if (unpurchasedItems[i].purchased === false)
            {
                newVisibleItem.innerHTML = `
                <p value = "${i}" style="cursor:pointer" onclick="ToggleRemoval(${i})">${unpurchasedItems[i].name}</p>
                `;
                onScreenList.append(newVisibleItem);
            }
        }
    }
    
}

function ToggleRemoval(index)
{
    //if adding item, adjust lists accordingly
    if (groceryList[index].purchased === false)
    {
        groceryList[index].purchased = true;
        unpurchasedItems.splice(index, 1);
        purchasedItems.push(groceryList[index]);
        UpdateOnScreenList();
    }
    //if removing purchased status, then adjust lists accordingly
    else if (groceryList[index].purchased === true)
    {
        groceryList[index].purchased = false;
        unpurchasedItems.push(groceryList[i]);
        purchasedItems.splice(index, 1);
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