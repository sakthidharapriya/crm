$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/feature/crmcalendar.feature");
formatter.feature({
  "name": "To test the calendar data.",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "To test the calendar funtionality of freecrm app.",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "To navigate to calendar.",
  "keyword": "Given "
});
formatter.match({
  "location": "com.Stepdefinitions.CrmCalStepDef.to_navigate_to_calendar()"
});
formatter.result({
  "error_message": "java.lang.Error: Unresolved compilation problems: \n\tImplicit super constructor CrmLoginPage() is undefined for default constructor. Must define an explicit constructor\n\tThe constructor CrmCalendarPage(WebDriver) is undefined\n\r\n\tat com.Stepdefinitions.CrmCalStepDef.\u003cinit\u003e(CrmCalStepDef.java:19)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:64)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\r\n\tat org.picocontainer.injectors.AbstractInjector.newInstance(AbstractInjector.java:145)\r\n\tat org.picocontainer.injectors.ConstructorInjector$1.run(ConstructorInjector.java:342)\r\n\tat org.picocontainer.injectors.AbstractInjector$ThreadLocalCyclicDependencyGuard.observe(AbstractInjector.java:270)\r\n\tat org.picocontainer.injectors.ConstructorInjector.getComponentInstance(ConstructorInjector.java:364)\r\n\tat org.picocontainer.injectors.AbstractInjectionFactory$LifecycleAdapter.getComponentInstance(AbstractInjectionFactory.java:56)\r\n\tat org.picocontainer.behaviors.AbstractBehavior.getComponentInstance(AbstractBehavior.java:64)\r\n\tat org.picocontainer.behaviors.Stored.getComponentInstance(Stored.java:91)\r\n\tat org.picocontainer.DefaultPicoContainer.getInstance(DefaultPicoContainer.java:699)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:647)\r\n\tat org.picocontainer.DefaultPicoContainer.getComponent(DefaultPicoContainer.java:678)\r\n\tat io.cucumber.picocontainer.PicoFactory.getInstance(PicoFactory.java:47)\r\n\tat io.cucumber.java.JavaStepDefinition.execute(JavaStepDefinition.java:27)\r\n\tat io.cucumber.core.runner.PickleStepDefinitionMatch.runStep(PickleStepDefinitionMatch.java:63)\r\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\r\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\r\n\tat io.cucumber.core.runner.PickleStepTestStep.run(PickleStepTestStep.java:46)\r\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:51)\r\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:67)\r\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:149)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:83)\r\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:24)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:185)\r\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:83)\r\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\r\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\r\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\r\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\r\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\r\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:219)\r\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\r\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\r\n\tat org.eclipse.jdt.internal.junit4.runner.JUnit4TestReference.run(JUnit4TestReference.java:89)\r\n\tat org.eclipse.jdt.internal.junit.runner.TestExecution.run(TestExecution.java:41)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:542)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.runTests(RemoteTestRunner.java:770)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.run(RemoteTestRunner.java:464)\r\n\tat org.eclipse.jdt.internal.junit.runner.RemoteTestRunner.main(RemoteTestRunner.java:210)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "To click calendar and click new.",
  "keyword": "When "
});
formatter.match({
  "location": "com.Stepdefinitions.CrmCalStepDef.to_click_calendar_and_click_new()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "To enter \"\u003cTitle\u003e\".",
  "keyword": "When "
});
formatter.match({
  "location": "com.Stepdefinitions.CrmCalStepDef.to_enter(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "click the save button.",
  "keyword": "Then "
});
formatter.match({
  "location": "com.Stepdefinitions.CrmCalStepDef.click_the_save_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "To test screenshot.",
  "keyword": "And "
});
formatter.match({
  "location": "com.Stepdefinitions.CrmLoginStepDef.to_test_screenshot()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Close the browser.",
  "keyword": "Then "
});
formatter.match({
  "location": "com.Stepdefinitions.CrmLoginStepDef.close_the_browser()"
});
formatter.result({
  "status": "skipped"
});
formatter.uri("file:src/test/resources/feature/crmlogin.feature");
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