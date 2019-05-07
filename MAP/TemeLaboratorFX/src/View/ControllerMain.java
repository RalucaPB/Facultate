package View;

import Repository.FileRepositoryNota;
import Repository.FileRepositoryStudent;
import Repository.FileRepositoryTema;
import Service.ServiceNota;
import Service.ServiceStudent;
import Service.ServiceTema;
import Validare.ValidatorNota;
import Validare.ValidatorStudent;
import Validare.ValidatorTema;
import javafx.application.Application;
import javafx.collections.FXCollections;
import javafx.event.ActionEvent;
import javafx.fxml.FXML;
import javafx.fxml.FXMLLoader;
import javafx.scene.Node;
import javafx.scene.Parent;
import javafx.scene.Scene;
import javafx.scene.control.Button;
import javafx.scene.layout.AnchorPane;
import javafx.scene.layout.BorderPane;
import javafx.scene.layout.Pane;
import javafx.stage.Stage;

import javax.imageio.IIOParam;
import java.io.IOException;

public class ControllerMain {
    @FXML
    Button buttonStudent;
    @FXML
    Button buttonTema;
    @FXML
    Button buttonNota;

    public ControllerMain(){}

    ValidatorStudent validatorStudent = new ValidatorStudent();
    FileRepositoryStudent repositoryStudent = new FileRepositoryStudent(validatorStudent,"studenti.txt");

    ValidatorTema validatorTema = new ValidatorTema();
    FileRepositoryTema repositoryTema = new FileRepositoryTema(validatorTema,"teme.txt");

    ValidatorNota validatorNota = new ValidatorNota();
    FileRepositoryNota repositoryNota = new FileRepositoryNota(validatorNota,"note.txt");
    ServiceStudent serviceStudent = new ServiceStudent(repositoryStudent,repositoryNota);
    ServiceTema serviceTema = new ServiceTema(repositoryTema);
    ServiceNota serviceNota = new ServiceNota(repositoryNota,repositoryStudent,repositoryTema);


    @FXML
  private void changeSceneButtonActionToStudentViewFxml(ActionEvent event) throws IOException {

        FXMLLoader loader1=new FXMLLoader();
      // Parent studentViewParent=loader.load(getClass().getResource("C:\\Users\\Raluca\\Documents\\an2\\sem1\\map\\TemeLaboratorFX\\src\\View\\Student.fxml"));

        loader1.setLocation(ControllerMain.class.getResource("/View/Student.fxml"));
        Parent studentViewParent = null;
        studentViewParent = (Pane)loader1.load();

       Scene studentViewScene = new Scene(studentViewParent);
       //get the stage info
       Stage window=(Stage)((Node)event.getSource()).getScene().getWindow();
       window.setScene(studentViewScene);
       window.show();
       ControllerStudent ctrl = loader1.getController();
       ctrl.setServiceStudent(serviceStudent);
        serviceStudent.addObserver(ctrl);
}







    @FXML

    private void changeSceneButtonActionToTemeViewFxml(ActionEvent event) throws IOException {
        FXMLLoader loader1=new FXMLLoader();
        // Parent studentViewParent=loader.load(getClass().getResource("C:\\Users\\Raluca\\Documents\\an2\\sem1\\map\\TemeLaboratorFX\\src\\View\\Student.fxml"));

        loader1.setLocation(ControllerMain.class.getResource("/View/Tema.fxml"));
        Parent temaViewParent = null;
        temaViewParent = (Pane)loader1.load();

        Scene temaViewScene = new Scene(temaViewParent);
        //get the stage info
        Stage window=(Stage)((Node)event.getSource()).getScene().getWindow();
        window.setScene(temaViewScene);
        window.show();
        ControllerTema ctrl = loader1.getController();
        ctrl.setService(serviceTema);
        serviceTema.addObserver(ctrl);
    }

    @FXML
    private void changeSceneButtonActionToNoteViewFxml(ActionEvent event) throws IOException {
        FXMLLoader loader1=new FXMLLoader();
        // Parent studentViewParent=loader.load(getClass().getResource("C:\\Users\\Raluca\\Documents\\an2\\sem1\\map\\TemeLaboratorFX\\src\\View\\Student.fxml"));

        loader1.setLocation(ControllerMain.class.getResource("/View/Nota.fxml"));
        Parent notaViewParent = null;
        notaViewParent = (Pane)loader1.load();

        Scene notaViewScene = new Scene(notaViewParent);
        //get the stage info
        Stage window=(Stage)((Node)event.getSource()).getScene().getWindow();
        window.setScene(notaViewScene);
        window.show();
        ControllerNota ctrl = loader1.getController();
        ctrl.setService(serviceNota);
        serviceNota.addObserver(ctrl);
    }


}
