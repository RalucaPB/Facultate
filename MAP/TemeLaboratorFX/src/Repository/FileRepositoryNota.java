package Repository;

import Domain.Nota;
import Validare.ValidationException;
import Validare.Validator;


import java.io.*;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Optional;
import java.util.stream.Stream;

public class FileRepositoryNota extends RepositoryNota {
    private String fileName;
    //constructor
    public FileRepositoryNota(Validator<Nota> validator,String fileName) {
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
                    Nota t=new Nota(Integer.parseInt(fields[0]),Integer.parseInt(fields[1]),Integer.parseInt(fields[2]),Integer.parseInt(fields[3]));

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
            for(Nota e: super.findAll()) {

                bufferedWriter.write(e.toString());
                bufferedWriter.newLine();
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
    }




    //citire din fisie
  /*  private void loadFromFile(){
        try{
            BufferedReader in=new BufferedReader(new FileReader(fileName));
            String line;
            while((line=in.readLine())!=null){
                String[] fields=line.split(";");
                int idNota=Integer.parseInt(fields[0]);
                int idStudent=Integer.parseInt(fields[1]);
                int idTema=Integer.parseInt(fields[2]);
                int valoare=Integer.parseInt(fields[3]);
                Nota nota=new Nota(idNota,idStudent,idTema,valoare);
                super.save(nota);
            }
        } catch (FileNotFoundException e) {
            System.out.println("Fisierul nu a fost gasit.");
        } catch (IOException e) {
            System.out.println("I/O Error.");
        } catch (ValidationException e) {
            e.printStackTrace();
        }
    }

    //scriere in fisier
    private void writeToFile(){
        try(BufferedWriter out=new BufferedWriter(new FileWriter(fileName))){
            super.findAll().forEach(nt->{
                try{
                    out.write(nt.getId()+";"+nt.getIdStudent()+";"+nt.getIdTema()+";"+nt.getValoare());
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
     *
     * @param nt,nota salvata in fisier
     * @return nota salvata
     * @throws ValidationException
     */
    @Override
    public Nota save(Nota nt)throws ValidationException{
        Nota returned=super.save(nt);
        writeToFile();
        return returned;
    }

    /**
     * sterge o nota dupa id
     * @param id,id entitate
     * @return nota stearsa
     */
    @Override
    public Nota delete(Integer id)throws ValidationException{
        //Optional<Nota> returned=super.delete(id);
        Nota returned=super.delete(id);
        writeToFile();
        return returned;
    }

    /**
     * modifica nota
     * @param nt
     * @return nota modificata
     * @throws ValidationException
     */
    @Override
    public Nota update(Nota nt)throws ValidationException{
        Nota returned=super.update(nt);
       writeToFile();
        return returned;
    }

}
