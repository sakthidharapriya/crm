package com.Pages;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.Select;

import com.Baseclass.Library;

public class CrmCalendarPage extends Library {
	
	protected WebDriver driver;
	Actions builder = new Actions(driver);
	
	@FindBy(xpath="//*[@id='main-nav']/div[2]/a/i")
	WebElement icon;
	
	@FindBy(xpath="//*[@id=\'main-nav\']/div[2]/a/span")
	WebElement calendar;
	
	
	

	@FindBy(xpath="//*[@id='dashboard-toolbar']/div[2]/div/a/button/i")
	WebElement newbutton;

	@FindBy(name="title")
	WebElement title;

	@FindBy(xpath="//*[@id='main-content']/div/div[2]/form/div[3]/div[1]/div/div/i")
	WebElement select;

	public void cal(WebDriver driver)  {
		this.driver=driver;
		PageFactory.initElements(driver,this);
	}
	public void click()
	{
		icon.click();
		calendar.click();
		newbutton.click();
	}
	public void set_title(String add)
	{
		title.clear();
		title.sendKeys("crmmeeting");
	}

	public void select_category()
	{
		Select category=new Select(driver.findElement(By.xpath("//*[@id=\'main-content\']/div/div[2]/form/div[3]/div[1]/div/div/i")));
		category.selectByIndex(2);
	}
	

}

