


package com.Stepdefinitions;

import java.util.Calendar;

import org.openqa.selenium.WebDriver;

import com.Baseclass.Library;
import com.Pages.CrmCalendarPage;
import com.Pages.CrmLoginPage;
import com.Reusablefunction.SeleniumUtility;

import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;

public class CrmCalStepDef extends CrmLoginPage {
	
		
		SeleniumUtility su;
		CrmCalendarPage cpage;
	

	@Given("To navigate to calendar.")
	public void to_navigate_to_calendar() {
		browserSetUp();
	
		logger.info("Launched browser");
	}

	
	@When("To click calendar and click new.")
	public void to_click_calendar_and_click_new() {
	
	}

	@When("To enter {string}.")
	public void to_enter(String string) {
		cpage = new CrmCalendarPage(driver);
		String Tit = "crm meeting";
	
		
		 
	}

	@Then("click the save button.")
	public void click_the_save_button() {

	}

}