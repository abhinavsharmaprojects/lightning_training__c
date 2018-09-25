({
    searchKeyChange: function(component, event, helper) {
        
        //5 Second delay
        var delay = 5000;
        var timer = component.get('v.timer');
        
        window.setTimeout(
            $A.getCallback(function() {
                component.set("v.visible", true);
                var myEvent = $A.get("e.c:SearchKeyChange");
                myEvent.setParams({"searchKey": event.target.value});
                myEvent.fire();
            }), delay
        );
        component.set('v.timer', timer);
    }
})