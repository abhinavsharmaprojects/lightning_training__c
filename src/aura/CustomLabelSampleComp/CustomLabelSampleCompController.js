({
	handleClick : function(component, event, helper) {
		component.set("v.myText","First Attr");
    },
    
    doInit : function(component, event, helper) {
        
        // hints to ensure labels are preloaded
        // $Label.c.Some_Dynamic_Label
        // $Label.c.Some_Dynamic_Label2
        
        //Static Labels
        var staticLabel = $A.get("$Label.c.Pick_A_Number");
		component.set("v.mylabel", staticLabel);
        
        var cnt = 2;
        
        var staticLabel = $A.get("$Label.c.Some_Dynamic_Label" + cnt);
		component.set("v.mylabel2", staticLabel);
                
        var labelSubStr = "Some_Dynamic_Label";
        var labelReference = $A.getReference("$Label.c." + labelSubStr);
        component.set("v.mydynamiclabel", labelReference);
    }    
})