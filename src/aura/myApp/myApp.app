<aura:application>
    
    <aura:attribute name="myFacet" type="Aura.Component[]"/>
    <aura:attribute name="myObject" type="Object"/>
    <aura:attribute name="myMap" type="Map"/>
    <aura:attribute name="myString" type="String" default="Blank"/>
    
    <aura:handler name="init" value="{!this}" action="{!c.init}"/>
    
    {!v.myString}
</aura:application>