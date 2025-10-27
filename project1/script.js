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
    const input = document.getElementById("item-input");

    //remove any initial spaces
    let userItem = input.value.trim();

    //make sure item they enter is not empty
    if (userItem === "") return;

    AddItem(userItem, false);

    //Empty the input box for the next time
    input.value = "";
    input.focus();
}

function AddItem(name, purchased)
{
    const item = {
        id: Date.now(),
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

        const thisItem = groceryList[i];
        const thisId = thisItem.id;
        newVisibleItem.value = thisId;

        //if item crossed out, cross it out
        if (thisItem.purchased === true && (displayingList === "fullList"))
        {
            newVisibleItem.innerHTML = `
            <span class="itemText" data-id="${thisId}">
                <s>${thisItem.name}</s>
            </span>
            <span class="btnContainer">
                <button class="editBtn" onclick="EditItem(${thisId})">Edit</button>
                <button class="removeBtn" onclick="RemoveItem(${thisId})">X</button>
            </span>
            `;
            onScreenList.append(newVisibleItem);
        }
        //dont cross items out if they arent purchased or are in the purchased items view 
        else if ((thisItem.purchased === false && (displayingList === "unpurchasedItems" || displayingList === "fullList")) 
            || (thisItem.purchased === true && (displayingList === "purchasedItems")))
        {
            newVisibleItem.innerHTML = `
            <span class="itemText" data-id="${thisId}">
                ${thisItem.name}
            </span>
            <span class="btnContainer">
                <button class="editBtn" onclick="EditItem(${thisId})">Edit</button>
                <button class="removeBtn" onclick="RemoveItem(${thisId})">X</button>
            </span>
            `;
            onScreenList.append(newVisibleItem);
        }
    }

    document.querySelectorAll(".itemText").forEach(text => {
        text.addEventListener("click", () => {
            ToggleRemoval(Number(text.dataset.id));
        });
    });

    document.querySelectorAll(".editBtn").forEach(btn => {
        btn.addEventListener("click", () => {
            EditItem(Number(btn.dataset.id));
        });
    });

    document.querySelectorAll(".removeBtn").forEach(btn => {
        btn.addEventListener("click", () => {
            RemoveItem(Number(btn.dataset.id));
        });
    });
    
}

function ToggleRemoval(id)
{
    const thisItem = groceryList.find(item => item.id === id);
    if (thisItem === null) return;

    //invert purchased status
    thisItem.purchased = !thisItem.purchased;
    
    UpdateOnScreenList();   
}

function ChangeItemView(value)
{
    //if full list, then display full list
    //else if purchased items, then display purchased items
    //else if unpurchased items, then display unpurchased items
    displayingList = value;
    UpdateOnScreenList();
}

//remove the item from the grocery list entirely
function RemoveItem(id) {
    const itemToRemove = groceryList.findIndex(item => item.id === id);
    if (itemToRemove !== -1)
    {
        groceryList.splice(itemToRemove, 1);
        
        UpdateOnScreenList();
    }

}


//allows for editing the item
function EditItem(id) {
    const item = groceryList.find(item => item.id === id);
    if (item === null) return;

    const li = [...document.querySelectorAll("#groceryList li")].find(el => el.querySelector(".itemText")?.dataset.id == id);
    if (li === null) return;

    const textSpan = li.querySelector(".itemText");
    const btnContainer = li.querySelector(".btnContainer");
    
    //make input box over text
    const input = document.createElement("input");
    input.type = "text";
    input.value = item.name;
    input.className = "editInput";

    //replace text with field
    textSpan.replaceWith(input);

    //remove purchase toggle behavior
    input.focus();

    //swap the buttons to just have a confirm button
    btnContainer.innerHTML = `<button class="confirmBtn">Confirm</button>`;

    //confirm button functionality
    btnContainer.querySelector(".confirmBtn").addEventListener("click", () => {
        const newValue = input.value.trim();
        if (newValue !== "") item.name = newValue;
        UpdateOnScreenList();
    })

    //pressing enter also confirms
    input.addEventListener("keypress", e => {
        if (e.key === "Enter") {
            const newValue = input.value.trim();
            if (newValue !== "") item.name = newValue;
            UpdateOnScreenList();
        }
    })
}



//Add the item if enter is clicked and there is something in the input box
const input = document.getElementById("item-input");
if (input !== "")
{
    input.addEventListener("keyup", function(event) {
        if (event.key === "Enter") {
            AddButtonClicked();
        }
    });
}

