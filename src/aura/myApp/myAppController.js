({
    init : function(component, event, helper) {
        console.log(typeof component.get("v.myObject")); // String
        console.log(typeof component.get("v.myMap")); // Object
    }
})