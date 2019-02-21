package pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class ConfirmacaoPage extends BasePage {

	public ConfirmacaoPage(WebDriver driver) {
		super(driver);
		// TODO Auto-generated constructor stub
	}
	
	public String retornaMensagem(){
		return driver.findElement(By.id("notice")).getText();
	}
}
