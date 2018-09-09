({
    goToRecord : function(component, event, helper) {
        // Fire the event to navigate to the contact record
        var sObjectEvent = $A.get("e.force:navigateToSObject");
        sObjectEvent.setParams({
            "recordId": component.get("v.contact.Id")
        })
        sObjectEvent.fire();
    },
    
    getCompGlobalId : function(component, event, helper) {
        console.log('@@@@ global ID ' + component.getGlobalId());
        component.set("v.cntValue", (component.get("v.cntValue") + 1));
        component.set("v.compGlobalIdValue", component.getGlobalId());
    },
})