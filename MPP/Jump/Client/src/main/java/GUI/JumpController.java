package GUI;

import Domain.Jurat;
import Domain.Participant;
import Service.IService;
import Utils.Observer;
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
import javafx.scene.layout.Pane;
import javafx.stage.Stage;

import java.io.IOException;
import java.io.Serializable;
import java.rmi.RemoteException;
import java.rmi.server.UnicastRemoteObject;
import java.util.ArrayList;

public class JumpController extends UnicastRemoteObject implements Serializable, Observer {

     public IService service;
    public Jurat j;
    private ObservableList<Participant> model;

    @FXML
    Label usernameTxt;
    @FXML
    TextField idField;


    @FXML
    TextField notaField;


    @FXML
    public TableColumn statusC;
    @FXML
    public TableColumn idC;
    @FXML
    public TableColumn notaLungimeC;
    @FXML
    public TableColumn notaAterizareC;
    @FXML
    public TableColumn notaStilC;
    @FXML
    public TableColumn numeC;
    @FXML
    public TableView tableView;
    @FXML
    Button adaugaNotaButton;

    public JumpController() throws RemoteException
    {
    }


    @FXML
    public void initialize() {

        idC.setCellValueFactory(new PropertyValueFactory<>("idParticipant"));
        numeC.setCellValueFactory(new PropertyValueFactory<>("nume"));
        statusC.setCellValueFactory(new PropertyValueFactory<>("status"));
        notaLungimeC.setCellValueFactory(new PropertyValueFactory<>("notaLungime"));
        notaAterizareC.setCellValueFactory(new PropertyValueFactory<>("notaAterizare"));
        notaStilC.setCellValueFactory(new PropertyValueFactory<>("notaStil"));

    }

    public void setUp() throws Exception
    {
        model = FXCollections.observableArrayList();
        this.service.getAll().forEach(model::add);
        tableView.setItems(model);

    }
    @FXML
    public void adaugaNotaAction(ActionEvent ev) throws Exception {
        Participant p = (Participant) tableView.getSelectionModel().getSelectedItem();
        //Participant p = new Participant(Integer.valueOf(idField.getText()),numeField.getText(), CategorieParticipant.valueOf(statusField.getText()),Integer.valueOf(nota1Field.getText()),Integer.valueOf(nota2Field.getText()),Integer.valueOf(nota3Field.getText()));
        //Participant p = new Participant(Integer.valueOf(idField.getText()),numeField.getText(),statusField.getText(),Integer.valueOf(notaLungimeField.getText()),Integer.valueOf(notaAterizareField.getText()),Integer.valueOf(notaStilField.getText()));
        if(j.getCategorie().equals("LUNGIME"))
        {
            p.setNotaLungime(Integer.valueOf(notaField.getText()));
        }
        else
        if(j.getCategorie().equals("ATERIZARE"))
        {
            p.setNotaAterizare(Integer.valueOf(notaField.getText()));
        }
        else {
            p.setNotaStil(Integer.valueOf(notaField.getText()));

        }
        System.out.println(p);
        this.service.adaugaNota(p);
        loaddata();
    }
    @FXML
    void loaddata() throws Exception {
        //System.out.println("ionnn");
        System.out.println(service.getAll());
        ArrayList<Participant> list = (ArrayList<Participant>) service.getAll();

        ObservableList<Participant> model = FXCollections.observableArrayList(list);


        tableView.setItems(model);



        idC.setCellValueFactory(new PropertyValueFactory<>("idParticipant"));
        numeC.setCellValueFactory(new PropertyValueFactory<>("nume"));
        statusC.setCellValueFactory(new PropertyValueFactory<>("status"));
        notaLungimeC.setCellValueFactory(new PropertyValueFactory<>("notaLungime"));
        notaAterizareC.setCellValueFactory(new PropertyValueFactory<>("notaAterizare"));
        notaStilC.setCellValueFactory(new PropertyValueFactory<>("notaStil"));

        tableView.setColumnResizePolicy(TableView.CONSTRAINED_RESIZE_POLICY);

        //this.service.getCategorii().forEach(model::add);
        tableView.setItems(model);

    }
    public void setService(IService service, Jurat j)  {
        this.service=service;
        this.j=j;
        try {
            System.out.println(this);

            loaddata();
            //blocks();
            this.service.AddObserver(this);
        } catch (Exception e) {
            System.out.println(e.getMessage());
            e.printStackTrace();
        }
        usernameTxt.setText(j.getCategorie());
    }

  /*  private void blocks()
    {
        if(j.getCategorie().equals(CategorieJurat.lungime))
        {
            nota2Field.setText(String.valueOf(0));
            nota3Field.setText(String.valueOf(0));

            nota2Field.setDisable(true);
            nota3Field.setDisable(true);
            nota2Field.setText(String.valueOf(0));

        }
        if(j.getCategorie().equals(CategorieJurat.stil))
        {
            nota1Field.setText(String.valueOf(0));
            nota3Field.setText(String.valueOf(0));

            nota1Field.setDisable(true);
            nota3Field.setDisable(true);

        }
        if(j.getCategorie().equals(CategorieJurat.aterizare))
        {
            nota1Field.setText(String.valueOf(0));
            nota2Field.setText(String.valueOf(0));

            nota1Field.setDisable(true);
            nota2Field.setDisable(true);

        }
    }
*/
    public void setJurat(Jurat j) {
        this.j = j;
    }

    public void logOutAction(ActionEvent actionEvent) {
      try {
          this.service.logOut(j.getUsername());
          FXMLLoader loader1 = new FXMLLoader();

          loader1.setLocation(LogInController.class.getResource("/LogIn.fxml"));
          Parent bloodBagViewParent = null;
          try {
              bloodBagViewParent = (Pane) loader1.load();
              //Scene bloodBagView = new Scene(menuCentruViewParent);
              Scene bloodBagView = new Scene(bloodBagViewParent);
              Stage window = (Stage) ((Node) actionEvent.getSource()).getScene().getWindow();
              window.setScene(bloodBagView);
              window.show();
              LogInController bloodCtrl = loader1.getController();
              bloodCtrl.setService(service);
          }catch (IOException e)
          {
              e.getStackTrace();
      }catch (Exception e)
            {
                e.printStackTrace();
            } }catch (Exception e) {
          e.printStackTrace();
      }


    }

   // @Override
//    public void Notify(Iterable<Participant> participants) throws RemoteException {
//        System.out.println("apppllat");
//        ObservableList<Object> model = FXCollections.observableArrayList(participants);
//        tableView.setItems(model);
//
//    }
    public void Notify(Iterable<Participant> participants)
    {
        try
        {
            ObservableList<Participant> observableList= FXCollections.observableArrayList();
            participants.forEach(f->
            {

                    observableList.add(f);
            });
            tableView.setItems(observableList);
        }
        catch (Exception e)
        {
            System.out.println(e);        }
    }


}
