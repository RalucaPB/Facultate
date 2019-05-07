package Domain;

public class Student implements HasId<Integer> {
    private Integer idStudent;
    private  String nume,grupa,email,cadruDidactic;


    public Student() {
    }

    /**
     * Constructor pentru student
     * @param idStudent:int,id-ul studentului
     * @param nume:string,numele studentului
     * @param grupa:string,grupa studentului
     * @param email:string,email-ul studentului
     * @param cadruDidactic:string, cadrul didactic indrumator de laborator
     */
    public Student(Integer idStudent,String nume,String grupa,String email,String cadruDidactic ){
        this.idStudent=idStudent;
        this.nume=nume;
        this.grupa=grupa;
        this.email=email;
        this.cadruDidactic=cadruDidactic;
    }

    /**
     *
     * @return idStudent
     */
    public Integer getId(){return idStudent;}

    /**
     * seteaza idul studentului
     * @param idStudent, id studentului
     */
    public void setId(Integer idStudent) {
       this.idStudent=idStudent;
    }

    /**
     *
     * @return numele studentului
     */
    public String getNume(){return nume;}

    /**
     * seteaza numele studentului
     * @param nume,numele studentului
     */
    public void setNume(String nume) {
        this.nume=nume;
    }

    /**
     *
     * @return grupa din care face parte studentul
     */
    public String getGrupa(){return grupa;}

    /**
     * seteaza grupa
     * @param grupa, grupa din care face parte studentul
     */
    public void setGrupa(String grupa) {
        this.grupa=grupa;
    }

    /**
     *
     * @return email-ul studentului
     */
    public String getEmail(){return email;}

    /**
     * seteaza email-ul
     * @param email,email-ul studentului
     */
    public void setEmail(String email) {
        this.email=email;
    }

    /**
     *
     * @return cadru didactic
     */
    public String getCadruDidactic(){return cadruDidactic;}

    /**
     * seteaza cadrul didactic
     * @param cadruDidactic, cadrul didactic indrumator de laborator
     */
    public void setCadruDidactic(String cadruDidactic) {
        this.cadruDidactic=cadruDidactic;
    }

    /**
     *
     * @return Studentul
     */
    @Override
    public String toString() {
        return idStudent +
                ";" + nume  +
                ";" + grupa  +
                ";" + email +
                ";" + cadruDidactic;
    }

    /**
     *
     * @param o: obiect
     * @return true sau false,in functie de egalitate
     */
    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;

        Student student = (Student) o;

        if (idStudent != null ? !idStudent.equals(student.idStudent) : student.idStudent != null) return false;
        if (nume != null ? !nume.equals(student.nume) : student.nume != null) return false;
        if (grupa != null ? !grupa.equals(student.grupa) : student.grupa != null) return false;
        if (email != null ? !email.equals(student.email) : student.email != null) return false;
        if (cadruDidactic != null ? !cadruDidactic.equals(student.cadruDidactic) : student.cadruDidactic != null)
            return false;
        return idStudent != null ? idStudent.equals(student.idStudent) : student.idStudent == null;
    }

    @Override
    public int hashCode() {
        int result = idStudent != null ? idStudent.hashCode() : 0;
        result = 31 * result + (nume != null ? nume.hashCode() : 0);
        result = 31 * result + (grupa != null ? grupa.hashCode() : 0);
        result = 31 * result + (email != null ? email.hashCode() : 0);
        result = 31 * result + (cadruDidactic != null ? cadruDidactic.hashCode() : 0);
        result = 31 * result + (idStudent != null ? idStudent.hashCode() : 0);
        return result;
    }


}
