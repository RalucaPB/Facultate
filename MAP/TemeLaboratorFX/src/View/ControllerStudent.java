package View;

import Domain.Student;
import Service.ServiceStudent;
import Utils.ListEvent;
import Utils.Observer;
import Validare.ValidationException;
import javafx.beans.value.ChangeListener;
import javafx.beans.value.ObservableValue;
import javafx.collections.FXCollections;
import javafx.collections.ObservableList;
import javafx.event.ActionEvent;
import javafx.fxml.FXML;
import javafx.fxml.FXMLLoader;
import javafx.scene.Node;
import javafx.scene.Parent;
import javafx.scene.Scene;
import javafx.scene.control.*;
import javafx.scene.control.cell.PropertyValueFactory;
import javafx.stage.Stage;
import javafx.util.Callback;

import java.io.IOException;
import java.util.List;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

public class ControllerStudent implements Observer<Student> {
    @FXML
    TableView<Student> tableStudenti;;
    @FXML
    TableColumn<Student,String> columnIdStudent;
    @FXML
    TableColumn<Student,String> columnNume;
    @FXML
    TableColumn<Student,String> columnGrupa;
    @FXML
    TableColumn<Student,String> columnEmail;
    @FXML
    TableColumn<Student,String> columnCadruDidactic;
    @FXML
    Label labelIdStudent;
    @FXML
    Label labelNume;
    @FXML
    Label labelGrupa;
    @FXML
    Label labelEmail;
    @FXML
    Label labelCadruDidactic;
    @FXML
    TextField textFieldIdStudent;
    @FXML
    TextField textFieldNume;
    @FXML
    TextField textFieldGrupa;
    @FXML
    TextField textFieldEmail;
    @FXML
    TextField textFieldCadruDidactic;
    @FXML
    Button buttonMain;
    @FXML
    Button buttonAdd;
    @FXML
    Button buttonDelete;
    @FXML
    Button buttonUpdate;
    @FXML
    Button buttonClearAll;

    @FXML
    Button buttonReset;
    @FXML
    ComboBox<String> comboBox;
    @FXML
    TextField textFieldFilter;

    public ControllerStudent(){}

    @FXML
    private void changeSceneButtonActionToMainViewFxml(ActionEvent event) throws IOException {
        Parent noteViewParent= FXMLLoader.load(getClass().getResource("MainView.fxml"));
        Scene noteViewScene = new Scene(noteViewParent);
        //get the stage info
        Stage window=(Stage)((Node)event.getSource()).getScene().getWindow();
        window.setScene(noteViewScene);
        window.show();
    }
    private ServiceStudent serviceStudent;
    private ObservableList<Student>  model;
    @FXML
    private void initialize() {

        columnIdStudent.setCellValueFactory(new PropertyValueFactory<Student,String>("Id"));
        columnNume.setCellValueFactory(new PropertyValueFactory<Student, String>("Nume"));
        columnGrupa.setCellValueFactory(new PropertyValueFactory<Student, String>("Grupa"));
        columnEmail.setCellValueFactory(new PropertyValueFactory<Student, String>("Email"));
        columnCadruDidactic.setCellValueFactory(new PropertyValueFactory<Student,String>("CadruDidactic"));
        tableStudenti.setItems(getModel());
        tableStudenti.getSelectionModel().selectedItemProperty().addListener(new ChangeListener<Student>() {
            @Override
            public void changed(ObservableValue<? extends Student> observable, Student oldValue, Student newValue) {
                showStudentDetails(newValue);
            }
        });
        comboBox.setItems(FXCollections.observableArrayList("Nume","CadruDidactic","Email"));

        comboBox.valueProperty().addListener(new ChangeListener<String>() {
            @Override
            public void changed(ObservableValue<? extends String> observable, String oldValue, String newValue) {
                comboBox.setOnAction(event -> {
                    String choice = textFieldFilter.getText();
                   //String choice=comboBox.getSelectionModel().getSelectedItem().toString();
                    if(newValue.equals("Nume"))
                    { //String nume = textFieldFilter.getText();
                        model.setAll(serviceStudent.filterNume(choice));
                    //comboBox.getSelectionModel().clearSelection();
                        }
                    else if(newValue.equals("CadruDidactic")) {
                        //String cadruDidactic = textFieldFilter.getText();
                        model.setAll(serviceStudent.filterCadruDidactic(choice));
                    }
                    else if(newValue.equals("Email")){
                        // String email = textFieldFilter.getText();
                        model.setAll(serviceStudent.filterEmail(choice));
                        //comboBox.getSelectionModel().clearSelection();
                    }

                });

            }

        });


textFieldFilter.textProperty().addListener(new ChangeListener<String>() {
    @Override
    public void changed(ObservableValue<? extends String> observable, String oldValue, String newValue) {
        textFieldFilter.setText(newValue);
    }
});
    }



    public ObservableList<Student> getModel(){
        return model;
    }
    public void setServiceStudent(ServiceStudent serviceStudent){

        this.serviceStudent = serviceStudent;
        model= FXCollections.observableArrayList( serviceStudent.getList());
        tableStudenti.setItems(model);
    }
    public void showStudentDetails(Student newValue) {
        if(newValue!=null){
            textFieldIdStudent.setText(String.valueOf(newValue.getId()));
            textFieldNume.setText(newValue.getNume());
            textFieldGrupa.setText(newValue.getGrupa());
            textFieldEmail.setText(newValue.getEmail());
            textFieldCadruDidactic.setText(newValue.getCadruDidactic());
        }
    }

    public void handleReset(ActionEvent actionEvent)
    {

        model= FXCollections.observableArrayList( serviceStudent.getList());
        tableStudenti.setItems(model);
        textFieldFilter.clear();
    }


    private void showErrorStudent(String message) {
        Alert text=new Alert(Alert.AlertType.ERROR);
        text.setTitle("Mesaj de eroare");
        text.setContentText(message);
        text.showAndWait();
    }

    public void handleAddStudent(ActionEvent actionEvent) {
        int id= Integer.parseInt(textFieldIdStudent.getText());
        String nume=textFieldNume.getText();
        String grupa=textFieldGrupa.getText();
        String email=textFieldEmail.getText();
        String cadruDidactic=textFieldCadruDidactic.getText();
        try{
            serviceStudent.add(id,nume,grupa,email,cadruDidactic);
        } catch (ValidationException e) {
            showErrorStudent(e.getMessage());
        }
    }

    public void handleDeleteStudent(ActionEvent actionEvent) {
        Student st = tableStudenti.getSelectionModel().getSelectedItem();
        if (st != null) {
            try {
                serviceStudent.delete(st.getId());
            } catch (ValidationException e) {
                showErrorStudent(e.getMessage());
            }
        }
    }

    public void handleUpdateStudent(ActionEvent actionEvent) {
        int id= Integer.parseInt(textFieldIdStudent.getText());
        String nume=textFieldNume.getText();
        String grupa=textFieldGrupa.getText();
        String email=textFieldEmail.getText();
        String cadruDidactic=textFieldCadruDidactic.getText();
        try{
            serviceStudent.update(id,nume,grupa,email,cadruDidactic);
        } catch (ValidationException e) {
            showErrorStudent(e.getMessage());
        }
    }



    public void handleClearAll(ActionEvent actionEvent){
        textFieldIdStudent.clear();
        textFieldNume.clear();
        textFieldGrupa.clear();
        textFieldEmail.clear();
        textFieldCadruDidactic.clear();
    }

    @Override
    public void notifyEvent(ListEvent<Student> e) {
        model.setAll(StreamSupport.stream(e.getList().spliterator(), false).collect(Collectors.toList()));
    }
}
