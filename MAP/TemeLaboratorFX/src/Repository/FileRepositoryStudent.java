package Repository;

import Domain.Student;
import Validare.ValidationException;
import Validare.Validator;

import java.io.*;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Optional;
import java.util.stream.Stream;

public class FileRepositoryStudent extends RepositoryStudent{

    private String fileName;
    //constructor
    public FileRepositoryStudent(Validator<Student> validator,String fileName) {
        super(validator);
        this.fileName=fileName;
        loadFromFile();
    }

    //citire din fisie
    private void loadFromFile() {
        Path path = Paths.get(fileName);
        Stream<String> lines;
        try {
            lines = Files.lines(path);
            lines.forEach(line -> {
                if (line.compareTo("") != 0) {
                    String[] fields = line.split(";");
                    Student t=new Student(Integer.parseInt(fields[0]),fields[1],fields[2],fields[3],fields[4]);

                    try {
                        super.save(t);
                    } catch (ValidationException e) {
                        e.printStackTrace();
                    }
                }
            });


        } catch (IOException e) {
            e.printStackTrace();
        }
    }


    //scriere in fisier
    private void writeToFile(){
        Path path=Paths.get(fileName);
        try(BufferedWriter bufferedWriter=Files.newBufferedWriter(path)) {
            for(Student e: super.findAll()) {

                bufferedWriter.write(e.toString());
                bufferedWriter.newLine();
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }

    /*
    //citire din fisier
    private void loadFromFile(){
        try{
            BufferedReader in=new BufferedReader(new FileReader(fileName));
            String line;
            while((line=in.readLine())!=null){
                String[] fields=line.split(";");
                int idSudent=Integer.parseInt(fields[0]);
                String nume=fields[1];
                String grupa=fields[2];
                String email=fields[3];
                String cadruDidactic=fields[4];
                Student student=new Student(idSudent,nume,grupa,email,cadruDidactic);
                super.save(student);
            }

        } catch (FileNotFoundException e) {
            System.out.println("Fisierul nu a fost gasit.");
        } catch (IOException e) {
            System.out.println("I/O Error.");
        } catch (ValidationException e) {
            e.printStackTrace();
        }
    }

    //stergere din fisier
    private void writeToFile(){
        try(BufferedWriter out= new BufferedWriter(new FileWriter(fileName))){
            super.findAll().forEach(st->{
                try{
                    out.write(st.getId()+";"+st.getNume()+";"+st.getGrupa()+";"+st.getEmail()+";"+st.getCadruDidactic());
                    out.newLine();
                } catch (IOException e) {
                    e.printStackTrace();
                }
            });

        } catch (IOException e) {
            System.out.println("I/O Error");
        }

    }
    */
    /**
     * salvare student in fisier
     * @param st
     * @return student salvat
     * @throws ValidationException
     */
    @Override
    public Student save(Student st) throws ValidationException{
        Student returned=super.save(st);
        writeToFile();
        return returned;
    }

    /**
     * stergere student dupa id
     * @param id,id entitate
     * @return studentul sters
     */
    @Override
    public Student delete(Integer id)throws ValidationException{
       // Optional<Student> returned=super.delete(id);
        Student returned=super.delete(id);
        writeToFile();
        return returned;
    }

    /**
     * modificare student
     * @param st
     * @return studentul modificat
     * @throws ValidationException
     */
    @Override
    public Student update(Student st)throws ValidationException{
       // Optional<Student> returned=super.update(st);
        Student returned=super.update(st);
        if(returned==null)writeToFile();
        return returned;
    }
}

