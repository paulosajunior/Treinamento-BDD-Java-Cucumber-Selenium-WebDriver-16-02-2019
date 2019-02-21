package runners;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.SnippetType;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(plugin = { "pretty", "html:src/test/resources/relatorios",
		"json:src/test/resources/relatorios/cucumber.json",
		"junit:src/test/resources/relatorios/cucumber.xml" }, 
		features = "src/test/resources/features/calculadora.feature",
		// tags = {“@smoke”},
		monochrome = true, 
		glue = { "steps" }, 
		snippets = SnippetType.CAMELCASE, 
		dryRun = false, 
		strict = false)

public class RunCalculadora {

}
