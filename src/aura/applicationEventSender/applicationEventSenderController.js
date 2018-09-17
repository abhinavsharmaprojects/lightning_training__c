({
    fireMyApplicationEvent : function(component, event, helper) {
        var myEvent = $A.get("e.c:applicationEvent");
        myEvent.setParams({"param": "It works!"});
        myEvent.fire();
    }
})