/*createComponentController.js*/
({
    doInit : function(cmp, event) {
        
        $A.createComponents([
            ["ui:message",{
                "title" : "Sample Thrown Error",
                "severity" : "error",
            }],
            ["ui:outputText",{
                "value" : "Some message"
            }]
        ],
		function(components, status, errorMessage){
        	if (status === "SUCCESS") {
            	var message = components[0];
                var outputText = components[1];
                console.log('@@@@@ outputText ' + outputText);
                
                // set the body of the ui:message to be the ui:outputText
                message.set("v.body", outputText);
            }
                                
            else if (status === "INCOMPLETE") {
                console.log("No response from server or client is offline.")
                // Show offline error
            }
            else if (status === "ERROR") {
            	console.log("Error: " + errorMessage);
                // Show error message
            }
        });
    }
})