package support;

import java.io.File;
 
import org.apache.commons.io.FileUtils;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.TakesScreenshot;
import org.openqa.selenium.WebDriver;
 

public class Screenshot{
      public static void tirar(WebDriver driver, String arquivo){
            //o WebDriver não faz uso do Screenshot, por isso o uso do cast
            File screenshot = ((TakesScreenshot)driver).getScreenshotAs(OutputType.FILE);
            try {
                  //Copiar o screenshot para um determinado diretorio
                  FileUtils.copyFile(screenshot,  new File(arquivo));
            } catch (Exception e){
                  //Para fazer algo mais acertivo, coloquei a mensagem para ser apresentada em caso de erro.
                  System.out.println("Houve um problema ao copiar o arquivo para pasta: " + e.getMessage());
            }
      }
}