package com.Testcase;


	

	import org.testng.annotations.AfterClass;
import org.testng.annotations.Test;
import org.testng.annotations.BeforeClass;
	import java.io.IOException;

	import org.testng.annotations.AfterClass;
	import org.testng.annotations.BeforeClass;
	import org.testng.annotations.Test;

	import com.Baseclass.Library;
import com.Pages.CrmCalendarPage;
import com.Pages.CrmLoginPage;

	import com.Reusablefunction.SeleniumUtility;


		public class CrmCalStep extends Library {
			SeleniumUtility su;
			CrmCalendarPage cpage;
			@BeforeClass
			public void startUp() {
				browserSetUp();
				logger.info("Launched browser");
			}
			@Test
			public void login() {
				cpage=new CrmCalendarPage();
				cpage.calendar(properties.getProperty("title");
				logger.info("get title");
			}
			@AfterClass
			public void close() throws IOException {
				su = new SeleniumUtility(driver);
				su.to_take_screenshot("src/test/resources/Screenshot/freecrmcal.png");
				logger.info("screenshot");
				tearDown();

			}

}
