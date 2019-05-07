package Domain;

public class Tema implements HasId<Integer> {
    private Integer idTema;
    private int deadline;
    private String descriere;

    //constructor
    public Tema(Tema one) {
        idTema = one.idTema;
        deadline = one.deadline;
        descriere = one.descriere;
    }

    /**
     * constructor Tema
     * @param idTema,int,id tema
     * @param descriere,string,cerinta temei
     * @param deadline,int,termenul limita de predare al temei
     */
    public Tema(Integer idTema,String descriere,int deadline) {
        this.idTema = idTema;
        this.deadline=deadline;
        this.descriere=descriere;
    }


    /**
     *
     * @return id tema
     */
    public Integer getId() {

        return idTema;
    }

    /**
     * seteaza id-ul temei
     * @param idTema,id tema
     */
    public void setId(Integer idTema) {
        this.idTema = idTema;
    }

    /**
     *
     * @return deadline-ul temei
     */
    public int getDeadline() {
        return deadline;
    }

    /**
     * seteaza deadline-ul temei
     * @param deadline, termenul de predare ai temei
     */
    public void setDeadline(int deadline) {
        this.deadline = deadline;
    }

    /**
     *
     * @return descrierea temei
     */
    public String getDescriere() {
        return descriere;
    }

    /**
     * seteaza descrierea temei
     * @param descriere, cerinta temei
     */
    public void setDescriere(String descriere) {
        this.descriere = descriere;
    }
    // returneaza Tema
    @Override
    public String toString() {
        return idTema +
                ";" + descriere +
                ";" + deadline;
    }

    /**
     *
     * @param o, obiect
     * @return true sau false in functie de egaltate
     */

    @Override
    public int hashCode() {
        int result = idTema != null ? idTema.hashCode() : 0;
        result = 31 * result + deadline;
        result = 31 * result + (descriere != null ? descriere.hashCode() : 0);
        return result;
    }
}
