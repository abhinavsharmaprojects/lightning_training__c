({
    callAuraMethodServerTrip : function(component, event, helper) {
        var childCmp = component.find("child");
        // call the aura:method in the child component
        if(childCmp) {
            childCmp.echo(function(result) {
                console.log("callback for aura:method was executed");
                console.log("result: " + result);
            });    
        }
        
    },
})