({
    handleMyApplicationEvent : function(component, event, helper) {
        var value = event.getParam("param");
        alert("Received application event with param = "+ value);
    }
})