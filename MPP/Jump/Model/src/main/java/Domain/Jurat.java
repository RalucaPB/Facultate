package Domain;


import java.io.Serializable;

public class Jurat implements Serializable {
    private int idJurat;
    private String username;
    private String parola;
    private String categorie;
    public Jurat(){}
    public Jurat(int idJurat, String username, String parola,String categorie) {
        this.idJurat = idJurat;
        this.username = username;
        this.parola = parola;
        this.categorie=categorie;
    }

    public Jurat(String username, String parola) {
        this.username = username;
        this.parola = parola;
    }

    public int getIdJurat() {
        return idJurat;
    }

    public void setIdJurat(int idJurat) {
        this.idJurat = idJurat;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getParola() {
        return parola;
    }

    public void setParola(String parola) {
        this.parola = parola;
    }

    public String getCategorie() {
        return categorie;
    }

    public void setCategorie(String categorie) {
        this.categorie = categorie;
    }
}