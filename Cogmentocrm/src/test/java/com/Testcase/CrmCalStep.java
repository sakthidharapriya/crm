package com.Testcase;
import org.testng.annotations.AfterClass;
import org.testng.annotations.Test;
import org.testng.annotations.BeforeClass;
import java.io.IOException;

import com.Baseclass.Library;
import com.Pages.CrmCalendarPage;
import com.Reusablefunction.SeleniumUtility;


public class CrmCalStep extends Library {
	SeleniumUtility su;
	CrmCalendarPage cpage;
	@BeforeClass
	public void startUp() {
		browserSetUp();
		logger.info("Launched calendar");
	}
	@Test
	public void calendar() throws InterruptedException {
		cpage=new CrmCalendarPage(driver);
		cpage.click();
		logger.info("select calendar");
	}
	@AfterClass
	public void close() throws IOException {
		su = new SeleniumUtility(driver);
		su.to_take_screenshot("src/test/resources/Screenshot/freecrmcal.png");
		logger.info("screenshot");
		//tearDown();

	}

}
