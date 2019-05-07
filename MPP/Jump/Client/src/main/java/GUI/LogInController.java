package GUI;

import Domain.Jurat;
import Service.IService;
import javafx.application.Platform;
import javafx.event.ActionEvent;
import javafx.event.EventHandler;
import javafx.fxml.FXML;
import javafx.fxml.FXMLLoader;
import javafx.scene.Parent;
import javafx.scene.Scene;
import javafx.scene.control.Button;
import javafx.scene.control.Label;
import javafx.scene.control.TextField;
import javafx.scene.paint.Color;
import javafx.stage.Stage;
import javafx.stage.WindowEvent;

import java.io.IOException;

public class LogInController {


    @FXML
    Label statusLabel;


     @FXML
    private Button logInBtn;

    @FXML
    private TextField usernameTxt;

    @FXML
    private TextField passTxt;

    public IService service;
    public Jurat j;

    public void setService(IService service) throws Exception {
        this.service=service;
    }

    @FXML
    public void initialize()
    {

    }

    public void LogInHandler(ActionEvent actionEvent) {
        Parent root;
        Stage stage;
        FXMLLoader loader=new FXMLLoader();
        loader.setLocation(getClass().getResource("/Jump.fxml"));
        try {
            root = loader.load();
        } catch (IOException e) {
            e.printStackTrace();
        }
        JumpController talentController= loader.getController();
        try{
            if (service.logIn(usernameTxt.getText(), passTxt.getText(),talentController) == true) {

                showMainApp();

                ((Stage) statusLabel.getScene().getWindow()).close();

                usernameTxt.setText("");
                passTxt.setText("");
            } else {
                statusLabel.setText("Utilizator sau parola incorecta !");
                statusLabel.setTextFill(Color.RED);
                usernameTxt.setText("");
                passTxt.setText("");
                return;
            }
        }catch(Exception e)
        {
            e.printStackTrace();
        }
    }

    private void showMainApp()
    {
        Parent root;
        Stage stage;
        try {
            FXMLLoader loader=new FXMLLoader();
            loader.setLocation(getClass().getResource("/Jump.fxml"));

            root = loader.load();
            JumpController talentController= loader.getController();




        stage = new Stage();
        stage.setTitle("Aplicatie");
        stage.setScene(new Scene(root));

        stage.show();
        talentController.setService(service,service.findJurat(usernameTxt.getText()));
        //service.AddObserver(jumpsController);

        }
        catch ( Exception e)
        {
            System.out.println(e.getMessage());
            e.printStackTrace();
            return;
        }
        stage.setOnHiding(new EventHandler<WindowEvent>() {

            @Override
            public void handle(WindowEvent event) {
                Platform.runLater(new Runnable() {

                    @Override
                    public void run() {
                        Parent root;
                        Stage stage;
                        try {
                            root = FXMLLoader.load(getClass().getResource("/LogIn.fxml"));
                        }
                        catch (IOException e)
                        {
                            e.printStackTrace();
                            return;
                        }

                        stage = new Stage();
                        stage.setTitle("Login");
                        stage.setScene(new Scene(root));
                        stage.show();
                    }
                });
            }
        });
    }





}
