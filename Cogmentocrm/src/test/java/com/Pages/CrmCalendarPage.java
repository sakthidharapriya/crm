package com.Pages;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.PageFactory;

import com.Baseclass.Library;

public class CrmCalendarPage extends Library {
	protected WebDriver driver;

//	@FindBy(xpath = "1")
	//WebElement calendar;
	
	

	
	public CrmCalendarPage(WebDriver driver)  {
		this.driver=driver;
		PageFactory.initElements(driver,this);
		
		
}
	
	public void click()
	{
	//	calendar.click();
	
		
	}

}






