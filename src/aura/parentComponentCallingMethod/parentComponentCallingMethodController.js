({
	callChildMethod : function(component, event, helper) {
		var attribute1 = component.get('v.parentAttribute1'); //A
        var attribute2 = component.get('v.parentAttribute2'); //B
        var childComponent = component.find('child');
        childComponent.myMethod(attribute1, attribute2);
	}
})