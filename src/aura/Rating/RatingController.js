({
    
    doInit: function(component, event, helper) {
    	console.log('Init Got loaded');    
    },
    
    scriptsLoaded: function(component, event, helper) {
        console.log('Script Got Loaded');
    },
       
    starClick : function(component, event, helper) {
        var colorOn = component.get("v.colorOn"); 
        var colorOff = component.get("v.colorOff"); 
        var el = event.target;
        var rating = 0;
        while (el) {
        	console.log('@@@@ el ' + el);
            rating++;
            el.style.fill = colorOn;
            el = el.previousElementSibling;    		        
        }
        el = event.target.nextElementSibling;
        
        while (el) {
        	console.log('@@@@ el 2 ' + el);
            el.style.fill = colorOff;
            el = el.nextElementSibling;    		        
        }
        component.set("v.rating", rating);
        
        var myEvent = component.getEvent("change");
        myEvent.setParams({"rating": rating});
        myEvent.fire();
        
    }
})