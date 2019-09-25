export default class Utils {
    static replaceSlots(that:object, templateEl:HTMLElement)
    {
        let slots = templateEl.querySelectorAll('slot');

        slots.forEach((slot)=>{
            // get the slot name
            let slotName = slot.getAttribute('name');

            // get the first matching slot from the view
            var slotElement = document.querySelector(`[slot="${slotName}"`);

            

            // About if the parent doesnt exits
            if(slot.parentNode === null) return;

            // abort if the slot doesnt
            if(slotElement == null){
                slot.parentNode.removeChild(slot);
                return;
            }
    
            // Dont apply the slot if the slot is not contained inside <user-generator>
            if(slotElement.parentNode != that) return;
            
            // Remove the slot attribute from the element
            slotElement.removeAttribute('slot');

            // replace the node in the template with the one from the view
            slot.parentNode.replaceChild(slotElement, slot);
        })
    }
}