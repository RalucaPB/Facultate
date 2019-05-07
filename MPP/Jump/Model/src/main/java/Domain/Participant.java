package Domain;
import java.io.Serializable;

public class Participant implements Serializable {
    private Integer idParticipant;
    private String nume;
    private String status;
    private Integer notaLungime;
    private Integer notaAterizare;
    private Integer notaStil;
    public Participant(){

    }

    public Participant(Integer idParticipant, String nume, String status, Integer nota1, Integer nota2, Integer nota3) {
        this.idParticipant = idParticipant;
        this.nume = nume;
        this.status = status;
        this.notaLungime = nota1;
        this.notaAterizare = nota2;
        this.notaStil = nota3;
    }

    public int getIdParticipant() {
        return idParticipant;
    }

    public void setIdParticipant(Integer idParticipant) {
        this.idParticipant = idParticipant;
    }

    public String getNume() {
        return nume;
    }

    public void setNume(String nume) {
        this.nume = nume;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }


    public Integer getNotaLungime() {
        return notaLungime;
    }

    public void setNotaLungime(Integer notaLungime) {
        this.notaLungime = notaLungime;
    }

    public Integer getNotaAterizare() {
        return notaAterizare;
    }

    public void setNotaAterizare(Integer notaAterizare) {
        this.notaAterizare = notaAterizare;
    }

    public Integer getNotaStil() {
        return notaStil;
    }

    public void setNotaStil(Integer notaStil) {
        this.notaStil = notaStil;
    }
}
