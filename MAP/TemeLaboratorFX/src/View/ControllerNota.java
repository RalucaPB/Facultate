package View;

import Domain.Nota;
import Domain.Tema;
import Service.ServiceNota;
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

import java.io.IOException;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

public class ControllerNota  implements Observer<Nota> {
    @FXML
    TableView<Nota> tableNote;
    @FXML
    TableColumn<Nota,String> columnIdTema;
    @FXML
    TableColumn<Nota,String> columnIdNota;
    @FXML
    TableColumn<Nota,String> columnIdStudent;
    @FXML
    TableColumn<Nota,String> columnValoare;
    @FXML
    Label labelIdTema;
    @FXML
    Label labelIdStudent;
    @FXML
    Label labelIdNota;
    @FXML
    Label labelValoare;
    @FXML
    TextField textFieldIdTema;
    @FXML
    TextField textFieldIdNota;
    @FXML
    TextField textFieldIdStudent;
    @FXML
    TextField textFieldValoare;
    @FXML
    TextField textFieldWeek;
    @FXML
    TextField textFieldObservatii;
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
    ServiceNota serviceNota;
    private ObservableList<Nota> model;
    public ControllerNota(){}
    @FXML
    private void initialize() {
        columnIdNota.setCellValueFactory(new PropertyValueFactory<Nota,String>("Id"));
        columnIdStudent.setCellValueFactory(new PropertyValueFactory<Nota, String>("IdStudent"));
        columnIdTema.setCellValueFactory(new PropertyValueFactory<Nota, String>("IdTema"));
        columnValoare.setCellValueFactory(new PropertyValueFactory<Nota, String>("Valoare"));
        tableNote.setItems(getModel());
        tableNote.getSelectionModel().selectedItemProperty().addListener(new ChangeListener<Nota>() {
            @Override
            public void changed(ObservableValue<? extends Nota> observable, Nota oldValue, Nota newValue) {
                showNotaDetails(newValue);
            }
        });
        comboBox.setItems(FXCollections.observableArrayList(">5",">8","=10"));

        comboBox.valueProperty().addListener(new ChangeListener<String>() {
            @Override
            public void changed(ObservableValue<? extends String> observable, String oldValue, String newValue) {
                comboBox.setOnAction(event -> {

                    if(newValue.equals(">5"))
                    {
                        model.setAll(serviceNota.filter5());

                    }
                    else if(newValue.equals(">8")) {

                        model.setAll(serviceNota.filter8());
                    }
                    else if(newValue.equals("=10")){

                        model.setAll(serviceNota.filter10());

                    }

                });

            }

        });

    }
    public void setService(ServiceNota service) {
        this.serviceNota = service;
        model= FXCollections.observableArrayList( serviceNota.getList());
        tableNote.setItems(model);
    }
    public void handleReset(ActionEvent actionEvent)
    {

        model= FXCollections.observableArrayList( serviceNota.getList());
        tableNote.setItems(model);

    }

    public void showNotaDetails(Nota newValue) {
        if(newValue!=null){
            textFieldIdNota.setText(String.valueOf(newValue.getId()));
            textFieldIdStudent.setText(String.valueOf(newValue.getIdStudent()));
            textFieldIdTema.setText(String.valueOf(newValue.getIdTema()));
            textFieldValoare.setText(String.valueOf(newValue.getValoare()));
            textFieldWeek.setText(String.valueOf(newValue.getValoare()));
            textFieldObservatii.setText(String.valueOf(newValue.getValoare()));
        }
    }




    private void showErrorNota(String message) {
        Alert text=new Alert(Alert.AlertType.ERROR);
        text.setTitle("Mesaj de eroare");
        text.setContentText(message);
        text.showAndWait();
    }

    public void handleAddNota(ActionEvent actionEvent) {
        int id= Integer.parseInt(textFieldIdNota.getText());
        int idS=Integer.parseInt(textFieldIdStudent.getText());
        int idT=Integer.parseInt(textFieldIdTema.getText());
        int val=Integer.parseInt(textFieldValoare.getText());
        int week=Integer.parseInt(textFieldWeek.getText());
        String obs=textFieldObservatii.getText();
        try{
            serviceNota.add(id,idS,idT,val,week,obs);
        } catch (ValidationException e) {
            showErrorNota(e.getMessage());
        }
    }

    public void handleDeleteNota(ActionEvent actionEvent) {
        Nota st = tableNote.getSelectionModel().getSelectedItem();
        if (st != null) {
            try {
                serviceNota.delete(st.getId());
            } catch (ValidationException e) {
                showErrorNota(e.getMessage());
            }
        }
    }

    public void handleUpdateNota(ActionEvent actionEvent) {
        int id= Integer.parseInt(textFieldIdNota.getText());
        int idS=Integer.parseInt(textFieldIdStudent.getText());
        int idT=Integer.parseInt(textFieldIdTema.getText());
        int val=Integer.parseInt(textFieldValoare.getText());
        int week=Integer.parseInt(textFieldWeek.getText());
        String obs=textFieldObservatii.getText();
        try{
            serviceNota.update(id,val,week,obs);
        } catch (ValidationException e) {
            showErrorNota(e.getMessage());
        }
    }



    public void handleClearAll(ActionEvent actionEvent){
        textFieldIdNota.clear();
        textFieldIdStudent.clear();
        textFieldIdTema.clear();
        textFieldValoare.clear();
        textFieldWeek.clear();
        textFieldObservatii.clear();
    }
    @FXML
    private void changeSceneButtonActionToMainViewFxml(ActionEvent event) throws IOException {
        Parent noteViewParent= FXMLLoader.load(getClass().getResource("MainView.fxml"));
        Scene noteViewScene = new Scene(noteViewParent);
        //get the stage info
        Stage window=(Stage)((Node)event.getSource()).getScene().getWindow();
        window.setScene(noteViewScene);
        window.show();
    }

    @Override
    public void notifyEvent(ListEvent<Nota> e) {
        model.setAll(StreamSupport.stream(e.getList().spliterator(), false).collect(Collectors.toList()));
    }

    public ObservableList<Nota> getModel() {
        return model;
    }


}
