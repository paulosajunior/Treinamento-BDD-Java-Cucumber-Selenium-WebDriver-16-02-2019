package pages;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public class UsuarioPage extends BasePage{

	public UsuarioPage(WebDriver driver) {
		super(driver);
		// TODO Auto-generated constructor stub
	}
	
	public UsuarioPage preencherNome(String nome){
		driver.findElement(By.id("user_name")).sendKeys(nome);
		return this;
	}
	public UsuarioPage preencherUltimoNome(String ultimoNome){
		driver.findElement(By.name("user[lastname]")).sendKeys(ultimoNome);
		return this;
	}
	public UsuarioPage preencherEmail(String email){
	    driver.findElement(By.id("user_email")).sendKeys(email);
		return this;
	}
	
	public ConfirmacaoPage clicarConfirmaCadastro(){
		driver.findElement(By.cssSelector("input[name=\"commit\"]")).click();
		return new ConfirmacaoPage(driver);
	}
	public UsuarioPage preencherTodosOsCampos(String nome, String ultimoNome, String email){
		preencherNome(ultimoNome);
		preencherUltimoNome(ultimoNome);
		preencherEmail(email);
		return this;
	}
	


}
