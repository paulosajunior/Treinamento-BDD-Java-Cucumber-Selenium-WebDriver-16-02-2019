package steps;


import org.junit.Assert;

import cucumber.api.java.pt.Dado;
import cucumber.api.java.pt.Então;
import cucumber.api.java.pt.Quando;

public class CalculadoraStep {
	
	public int numero1,numero2,resultadoSistema;
	
	
	@Dado("^que tenho o número (\\d+)$")
	public void queTenhoONúmero(int num1) throws Throwable {
		numero1 = num1;
	}

	@Quando("^eu adiciono (\\d+)$")
	public void euAdiciono(int num2) throws Throwable {
	    numero2 = num2;
	    resultadoSistema = numero1+numero2;
	}

	@Então("^o resultado é igual a (\\d+)$")
	public void oResultadoÉIgualA(int resul) throws Throwable {
		Assert.assertEquals("ERRO AO VALIDAR====>>>>", resul, resultadoSistema);

	}


	
}
