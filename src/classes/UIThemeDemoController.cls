public class UIThemeDemoController {
    
	//Constructor
    public UIThemeDemoController() { }
    
    // Simple accessors for the System.UserInfo theme methods
    public String getContextUserUiTheme() {
        return UserInfo.getUiTheme();
    }    
    
    public String getContextUserUiThemeDisplayed() {
        return UserInfo.getUiThemeDisplayed();
    }
}