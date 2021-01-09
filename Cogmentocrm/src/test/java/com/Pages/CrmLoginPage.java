package com.Pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;

import com.Baseclass.Library;

public class CrmLoginPage extends Library {
	protected WebDriver driver;

	@FindBy(name="email")
	WebElement username;
	@FindBy(name="password")
	WebElement pwd;
	@FindBy(xpath="//*[@id=\'ui\']/div/div/form/div/div[3]")
	WebElement Loginbutton;
	
	public CrmLoginPage(WebDriver driver)  {
		this.driver=driver;
		PageFactory.initElements(driver,this);
		
		
}
	public void login(String Username,String Password) {
		username.sendKeys(Username);
		pwd.sendKeys(Password);
	}
	public void click()
	{
		Loginbutton.click();
		
	}

}
