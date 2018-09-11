({
    init : function(component, event, helper) {
        $A.createComponent("c:myCmp", {
            myString: '43'
        }, function(cmp, state) {
            console.log(state); // SUCCESS
        })
    }
})