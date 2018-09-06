({
    init : function(component, event, helper) {
        $A.createComponent("c:myCmp", {
            myFacet: 43
        }, function(cmp, state) {
            console.log(state); // SUCCESS
        })
    }
})