import Repository.*;
import Service.ServiceNota;
import Service.ServiceStudent;
import Service.ServiceTema;
import UI.Consola;
import Validare.ValidatorNota;
import Validare.ValidatorStudent;
import Validare.ValidatorTema;
import View.ControllerMain;
import View.ControllerStudent;
import View.StudentController;
import View.StudentView;
import javafx.application.Application;
import javafx.fxml.FXMLLoader;
import javafx.scene.Parent;
import javafx.scene.Scene;
import javafx.scene.layout.BorderPane;
import javafx.stage.Stage;

import static javafx.application.Application.launch;

public class Main extends Application{
    ValidatorStudent validatorStudent = new ValidatorStudent();
    FileRepositoryStudent repositoryStudent = new FileRepositoryStudent(validatorStudent,"studenti.txt");
    ValidatorNota validatorNota = new ValidatorNota();
    FileRepositoryNota repositoryNota = new FileRepositoryNota(validatorNota,"note.txt");
    ServiceStudent serviceStudent = new ServiceStudent(repositoryStudent,repositoryNota);

    public  void start(Stage primaryStage)throws Exception{
        primaryStage.setTitle("STUDENTI");
        Parent root= FXMLLoader.load(getClass().getResource("/view/MainView.fxml"));
        primaryStage.setScene(new Scene(root));
        primaryStage.show();
    }

    private BorderPane initView() {
        StudentController studentController=new StudentController(serviceStudent);
        serviceStudent.addObserver(studentController);
        StudentView studentView=new StudentView(studentController);
        studentController.setView(studentView);
        return studentView.getView();
    }

    public static void main(String args[]) throws Exception {
      /* RepositoryStudent repositoryStudent=new RepositoryStudent(new ValidatorStudent());

        ServiceStudent serviceStudent=new ServiceStudent(repositoryStudent);

        serviceStudent.add(1,"Dan","223","dan97@yahoo.ro","Ionescu");
        serviceStudent.add(2,"Diana","234","dia1996@yahoo.com","Pop");
        serviceStudent.add(3,"Eva","123","evapop@yahoo.com","Czibula");
        serviceStudent.add(4,"Ion","213","ion@yahoo.ro","Pop");

        try{
            serviceStudent.add(8,""," 234","234","ert");
        }catch(ValidationException e){
            System.out.println(e.getMessage());
        }
        serviceStudent.update(3,"Evelin","223","eve_ana@yahoo.ro","Czibula");

        serviceStudent.delete(4);

        System.out.println("Studentul cu id 2:\n");
       // System.out.println(serviceStudent.findById(2).toString());
        System.out.println();

        System.out.println("Lista studentilor:\n");
        serviceStudent.getAll().forEach(student->{
            System.out.println(student.toString());
        });
        System.out.println();
        System.out.println("------------------------------------------------------------------------------------------");
        RepositoryTema repositoryTema=new RepositoryTema(new ValidatorTema());
        ServiceTema serviceTema=new ServiceTema(repositoryTema);

        serviceTema.add(1,"Definiti o interfata generică pentru repository ce permite operații CRUD",6);
        serviceTema.add(2,"Definiti interfata generica Validator",5);
        serviceTema.add(3," Implementarea operatiilor CRUD pt entitatea Student ",4);

        serviceTema.update(1,"Definiti o interfata generică pentru repository ce permite operații CRUD",8,5);

        serviceTema.delete(3);

        System.out.println("Tema cu id 2:\n");
        System.out.println(serviceTema.findById(2).toString());
        System.out.println();

        System.out.println("Lista temelor:\n");
        serviceTema.getAll().forEach(tema->{
            System.out.println(tema.toString());
        });
        System.out.println();
       */
       /* ValidatorStudent validatorStudent = new ValidatorStudent();
        FileRepositoryStudent repositoryStudent = new FileRepositoryStudent(validatorStudent,"studenti.txt");

        ValidatorTema validatorTema = new ValidatorTema();
        FileRepositoryTema repositoryTema = new FileRepositoryTema(validatorTema,"teme.txt");

        ValidatorNota validatorNota = new ValidatorNota();
        FileRepositoryNota repositoryNota = new FileRepositoryNota(validatorNota,"note.txt");
        ServiceStudent serviceStudent = new ServiceStudent(repositoryStudent,repositoryNota);
        ServiceTema serviceTema = new ServiceTema(repositoryTema);
        ServiceNota serviceNota = new ServiceNota(repositoryNota,repositoryStudent,repositoryTema);
        Consola consola = new Consola(serviceStudent,serviceTema,serviceNota);
        consola.run();*/
       launch(args);

    }
}
