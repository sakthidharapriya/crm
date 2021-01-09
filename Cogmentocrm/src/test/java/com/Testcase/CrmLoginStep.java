package com.Testcase;

import java.io.IOException;

import org.testng.annotations.AfterClass;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.Test;

import com.Baseclass.Library;
import com.Pages.CrmLoginPage;

import com.Reusablefunction.SeleniumUtility;


	public class CrmLoginStep extends Library {
		SeleniumUtility su;
		CrmLoginPage lpage;
		@BeforeClass
		public void startUp() {
			browserSetUp();
			logger.info("Launched browser");
		}
		@Test
		public void login() {
			lpage=new CrmLoginPage(driver);
			lpage.login(properties.getProperty("username"), properties.getProperty("password"));
			logger.info("enter username and password");
		}
		@AfterClass
		public void close() throws IOException {
			su = new SeleniumUtility(driver);
			su.to_take_screenshot("src/test/resources/Screenshot/freecrm.png");
			logger.info("screenshot");
			//tearDown();

		}

	}


