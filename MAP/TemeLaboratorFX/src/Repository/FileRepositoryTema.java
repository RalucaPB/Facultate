package Repository;


import Domain.Tema;
import Validare.ValidationException;
import Validare.Validator;

import java.io.*;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Optional;
import java.util.stream.Stream;


public class FileRepositoryTema extends RepositoryTema {
    private String fileName;
    //constructor
    public FileRepositoryTema(Validator<Tema> validator,String fileName) {
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
                    Tema t=new Tema(Integer.parseInt(fields[0]),fields[1],Integer.parseInt(fields[2]));

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
            for(Tema e: super.findAll()) {

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
            while((line=in.readLine())!=null) {
                String[] fields=line.split(";");
                int idTema=Integer.parseInt(fields[0]);
                String descriere=fields[1];
                int deadline=Integer.parseInt(fields[2]);
                Tema tema=new Tema(idTema,descriere,deadline);
                super.save(tema);
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
            super.findAll().forEach(tm->{
                try{
                    out.write(tm.getId()+";"+tm.getDescriere()+";"+tm.getDeadline());
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
     * salvare tema in fisier
     * @param tm
     * @return tema salvata
     * @throws ValidationException
     */
    @Override
    public Tema save(Tema tm)throws ValidationException{
        Tema returned=super.save(tm);
        writeToFile();
        return returned;
    }

    /**
     * stergere tema dupa id
     * @param id,id entitate
     * @return tema stearsa
     */
    @Override
    public Tema delete(Integer id)throws ValidationException{
        //Optional<Tema>  returned=super.delete(id);
        Tema  returned=super.delete(id);
        writeToFile();
        return returned;
    }


   @Override
    public Tema update(int id, Tema tm)throws ValidationException{
        Tema returned=super.update(id,tm);
        if(returned==null)
            writeToFile();
        return returned;

    }
    /*@Override
    public Optional<Tema> update(int id, Tema tm)throws ValidationException{
        Optional<Tema> returned=super.update(id,tm);
        writeToFile();
        return returned;

    }*/

}
