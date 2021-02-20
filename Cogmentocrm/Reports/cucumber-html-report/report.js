$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/feature/crmlogin.feature");
formatter.feature({
  "name": "To test the freecrm application.",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "To test the login funtionality of freecrm application.",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "To enter URL and navigate to application.",
  "keyword": "Given "
});
formatter.match({
  "location": "com.Stepdefinitions.CrmLoginStepDef.to_enter_URL_and_navigate_to_application()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To enter \"\u003cusername\u003e\" and \"\u003cpassword\u003e\".",
  "keyword": "When "
});
formatter.match({
  "location": "com.Stepdefinitions.CrmLoginStepDef.to_enter_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "click the submit button.",
  "keyword": "Then "
});
formatter.match({
  "location": "com.Stepdefinitions.CrmLoginStepDef.click_the_submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "To test screenshot.",
  "keyword": "And "
});
formatter.match({
  "location": "com.Stepdefinitions.CrmLoginStepDef.to_test_screenshot()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Close the browser.",
  "keyword": "Then "
});
formatter.match({
  "location": "com.Stepdefinitions.CrmLoginStepDef.close_the_browser()"
});
formatter.result({
  "status": "passed"
});
});