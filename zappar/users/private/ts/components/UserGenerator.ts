import template from './templates/template.html';
import cardTemplate from './templates/card.html';
import Utils from './Util'

const templateEl = document.createElement('div');
templateEl.id = 'user-generator';
templateEl.innerHTML = template;


export class UserGenerator extends HTMLElement { 
    private _csrf : string | any;
    private _buttonEl: HTMLElement | null;    
    private _cards: HTMLElement | null; 
    private _randomUser : Array<string> | null;

    constructor(){
        super();

        // Get the CSRF token
        this._csrf = this.getAttribute('z-csrf');
        this._randomUser = [];

        // Replace all slots
        Utils.replaceSlots(this, templateEl);

        // Apend template to <user-generator>
        this.appendChild(templateEl);

        // Get button generator DOM element from component template
        this._buttonEl = document.getElementById('generateBtn')

        // get cards container from component template
        this._cards = document.getElementById('cards');

        if(this._buttonEl == null) return;

        // On click make a call to the API and get a user
        this._buttonEl.addEventListener('click', () => this.apiCall() );
    }

    private apiCall()
    {
        let xhttp = new XMLHttpRequest();
        let that = this;
      
        // Build the data
        let data = new FormData();
        data.append('gender',(<HTMLInputElement>document.getElementById('gender')).value)
        data.append('nationality',(<HTMLInputElement>document.getElementById('nationality')).value)
        data.append('results',(<HTMLInputElement>document.getElementById('results')).value)
        
        xhttp.onprogress = function () {
            console.log('LOADING...', xhttp.readyState);
        };
        xhttp.onload = function () {
           if(xhttp.status == 200){
                let data = JSON.parse(xhttp.response);
                that._randomUser = data.html;

                // Display user cards
                that.displayUserCard();
           }
        };
        xhttp.open("POST", window.location.href, true);

        xhttp.setRequestHeader("X-CSRFToken", this._csrf);
        xhttp.send(data);
    }

    private displayUserCard()
    {

        if(this._cards == null || this._randomUser == null) return;

        this._cards.innerHTML = '';

        // Create an empty slot card
        let slot = document.createElement('slot');
        slot.name = 'card';
   
        this._randomUser.forEach((element:any) => {
            
            if(this._cards == null) return;

             // Append the empty slot
            this._cards.appendChild(slot);
            
            // Create the card element
            let card = document.createElement('div');
            card.className = 'card';
            
            // Inside the card add the html recieved from the API
            card.innerHTML = element;

            // Set the slot name
            card.slot = 'card';

            // Append the child to the component            
            this.appendChild(card);

            // Replace slots
            Utils.replaceSlots(this, this._cards);
        });        
    }
}
