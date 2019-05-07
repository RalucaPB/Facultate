package Domain;

public class Nota implements HasId<Integer> {
    private Integer idNota;
    private int valoare;
    private Integer idStudent;
    private Integer idTema;
    //constructor
    public Nota(Integer idNota,Integer idStudent,Integer idTema,int valoare){
        this.idNota = idNota;
        this.idStudent=idStudent;
        this.idTema=idTema;
        this.valoare=valoare;
    }

    /**
     *
     * @return valoarea notei
     */

    public Integer getId() {
        return idNota;
    }
    /**
     * seteaza idNota notei
     * @param idNota,idNota notei
     */

    public void setId(Integer idNota) {
        this.idNota=idNota;

    }

    /**
     *
     * @return idStudent
     */
    public Integer getIdStudent() {
        return idStudent;
    }

    /**
     * seteaza idStudent
     * @param idStudent
     */

    public void setIdStudent(Integer idStudent) {
        this.idStudent = idStudent;
    }

    /**
     *
     * @return idTema
     */

    public Integer getIdTema() {
        return idTema;
    }

    /**
     * seteaza idTema
     * @param idTema
     */
    public void setIdTema(Integer idTema) {
        this.idTema = idTema;
    }

    /**
     *
     * @return valoare
     */
    public int getValoare() {
        return valoare;
    }

    /**
     * seteaza valoarea
     * @param valoare,int
     */
    public void setValoare(int valoare) {
        this.valoare = valoare;
    }

    @Override
    public String toString() {
        return idNota +
                ";" + idStudent +
                ";" + idTema +
                ";" + valoare ;
    }


    /*@Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Nota nota = (Nota) o;

        if (valoare != nota.valoare) return false;
        if (idNota != null ? !idNota.equals(nota.idNota) : nota.idNota != null) return false;
        if (idStudent != null ? !idStudent.equals(nota.idStudent) : nota.idStudent != null) return false;
        return idTema != null ? idTema.equals(nota.idTema) : nota.idTema == null;
    }*/

    @Override
    public int hashCode() {
        int result = idNota != null ? idNota.hashCode() : 0;
        result = 31 * result + valoare;
        result = 31 * result + (idStudent != null ? idStudent.hashCode() : 0);
        result = 31 * result + (idTema != null ? idTema.hashCode() : 0);
        return result;
    }
}
