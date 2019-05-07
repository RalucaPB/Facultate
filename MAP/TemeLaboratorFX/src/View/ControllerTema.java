package View;


import Domain.Tema;
import Service.ServiceTema;
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

public class ControllerTema implements Observer<Tema> {
    @FXML
    TableView<Tema> tableTeme;
    @FXML
    TableColumn<Tema,String> columnIdTema;
    @FXML
    TableColumn<Tema,String> columnDescriere;
    @FXML
    TableColumn<Tema,String> columnDeadline;
    @FXML
    Label labelIdTema;
    @FXML
    Label labelDescriere;
    @FXML
    Label labelDeadline;
    @FXML
    TextField textFieldIdTema;
    @FXML
    TextField textFieldDescriere;
    @FXML
    TextField textFieldDeadline;
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
    private ServiceTema serviceTema;
    private ObservableList<Tema> model;
    public ControllerTema(){}
    @FXML
    private void initialize() {
        columnIdTema.setCellValueFactory(new PropertyValueFactory<Tema, String>("id"));
        columnDeadline.setCellValueFactory(new PropertyValueFactory<Tema, String>("deadline"));
        columnDescriere.setCellValueFactory(new PropertyValueFactory<Tema, String>("descriere"));
        tableTeme.setItems(getModel());
        tableTeme.getSelectionModel().selectedItemProperty().addListener(new ChangeListener<Tema>() {
            @Override
            public void changed(ObservableValue<? extends Tema> observable, Tema oldValue, Tema newValue) {
                showTemaDetails(newValue);
            }
        });
        comboBox.setItems(FXCollections.observableArrayList("Descriere","Deadline","DeadlineMaiMare"));

        comboBox.valueProperty().addListener(new ChangeListener<String>() {
            @Override
            public void changed(ObservableValue<? extends String> observable, String oldValue, String newValue) {
                comboBox.setOnAction(event -> {
                    String choice = textFieldFilter.getText();
                    //String choice=comboBox.getSelectionModel().getSelectedItem().toString();
                    if(newValue.equals("Descriere"))
                    { //String nume = textFieldFilter.getText();
                        model.setAll(serviceTema.filterDescriere(choice));
                        //comboBox.getSelectionModel().clearSelection();
                    }
                    else if(newValue.equals("Deadline")) {
                        //String cadruDidactic = textFieldFilter.getText();
                        model.setAll(serviceTema.filterDeadline(Integer.parseInt(choice)));
                    }
                    else if(newValue.equals("DeadlineMaiMare")){
                        // String email = textFieldFilter.getText();
                        model.setAll(serviceTema.filterDeadlineMaiMare(Integer.parseInt(choice)));
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
    public void setService(ServiceTema serviceTema){

        this.serviceTema = serviceTema;
        model= FXCollections.observableArrayList( serviceTema.getList());
        tableTeme.setItems(model);
    }
    public void handleReset(ActionEvent actionEvent)
    {

        model= FXCollections.observableArrayList( serviceTema.getList());
        tableTeme.setItems(model);
        textFieldFilter.clear();
    }
    public void showTemaDetails(Tema newValue) {
        if(newValue!=null){
            textFieldIdTema.setText(String.valueOf(newValue.getId()));
            textFieldDeadline.setText(String.valueOf(newValue.getDeadline()));
            textFieldDescriere.setText(newValue.getDescriere());

        }
    }




    private void showErrorTema(String message) {
        Alert text=new Alert(Alert.AlertType.ERROR);
        text.setTitle("Mesaj de eroare");
        text.setContentText(message);
        text.showAndWait();
    }

    public void handleAddTema(ActionEvent actionEvent) {
        int id= Integer.parseInt(textFieldIdTema.getText());
        int deadline=Integer.parseInt(textFieldDeadline.getText());
        String descriere=textFieldDescriere.getText();

        try{
            serviceTema.add(id,descriere,deadline);
        } catch (ValidationException e) {
            showErrorTema(e.getMessage());
        }
    }

    public void handleDeleteTema(ActionEvent actionEvent) {
        Tema t = tableTeme.getSelectionModel().getSelectedItem();
        if (t != null) {
            try {
                serviceTema.delete(t.getId());
            } catch (ValidationException e) {
                showErrorTema(e.getMessage());
            }
        }
    }

    public void handleUpdateTema(ActionEvent actionEvent) {
        int id= Integer.parseInt(textFieldIdTema.getText());
        int deadline=Integer.parseInt(textFieldDeadline.getText());
        String descriere=textFieldDescriere.getText();

        try{
            serviceTema.updateDeadline(id,deadline);
        } catch (ValidationException e) {
            showErrorTema(e.getMessage());
        }
    }



    public void handleClearAll(ActionEvent actionEvent){
        textFieldIdTema.clear();
        textFieldDeadline.clear();
        textFieldDescriere.clear();

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
    public void notifyEvent(ListEvent<Tema> e) {
        model.setAll(StreamSupport.stream(e.getList().spliterator(), false).collect(Collectors.toList()));

    }

    public ObservableList<Tema> getModel() {
        return model;
    }
}
