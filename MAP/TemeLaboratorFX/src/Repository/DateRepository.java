package Repository;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.PrintWriter;

public class DateRepository {
    private String fileName;
    //constructor
    public DateRepository(String fileName) {
        this.fileName = fileName;
    }

    /**
     * creeaza un repository care contine urmatoarele dat
     * @param option,string
     * @param idTema,int
     * @param valoare,int
     * @param deadline,int
     * @param saptamanaCurenta,int
     * @param observatie,string
     */
    public void create(String option, int idTema, int valoare, int deadline, int saptamanaCurenta, String observatie) {
        try (PrintWriter pw = new PrintWriter(fileName)) {
            pw.println(option + ", " + idTema + ", " + valoare + ", " + deadline + ", " + saptamanaCurenta + ", " + observatie);
        } catch (IOException e) {
            System.err.println(e);
        }
    }
}
