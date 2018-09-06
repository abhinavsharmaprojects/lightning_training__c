({
    init: function(component, event, helper) {
        console.log(Array.isArray(component.get("v.myFacet"))); // true
        console.log(typeof component.get("v.myObject")); // string
        console.log(typeof component.get("v.myMap")); // object
        console.log(typeof component.get("v.myString")); // string
    }
})