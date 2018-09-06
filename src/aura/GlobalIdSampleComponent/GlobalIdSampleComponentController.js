({
	doInit : function(component, event, helper) {
        var globalId = component.getGlobalId();
		console.log('@@@@@ globalId init ' + document.getElementById(component.getGlobalId() + "_footer"));
	},
    
    handleClick : function(component, event, helper) {
        console.log('@@@@@ globalId ' + component.getGlobalId());
        console.log('@@@@@ element ' + document.getElementById(component.getGlobalId() + "_footer").innerHTML);
    }    
})