package Service;

import Domain.Student;
import Repository.FileRepositoryNota;
import Repository.FileRepositoryStudent;
import Utils.ListEvent;
import Utils.ListEventType;
import Utils.Observable;
import Utils.Observer;
import Validare.ValidationException;

import java.util.ArrayList;
import java.util.Comparator;
import java.util.List;
import java.util.function.Predicate;
import java.util.stream.Collectors;

public class ServiceStudent  implements Observable<Student>{
    private FileRepositoryStudent repository;
    private FileRepositoryNota repository1;
    ArrayList<Observer<Student>> studentObservers=new ArrayList<>();


    //constructor
    public ServiceStudent(FileRepositoryStudent repository,FileRepositoryNota repository1) {
        this.repository = repository;
        this.repository1 = repository1;
    }

    /**
     * adauga un student
     * @param idStudent,int,id student
     * @param nume,string,nume student
     * @param grupa,string, grupa din care face parte studentul
     * @param email,email,email-ul studentului
     * @param cadruDidactic,string,indrumator laborator
     */
    public void add(int idStudent,String nume,String grupa,String email,String cadruDidactic) throws ValidationException {
        Student student=new Student(idStudent,nume,grupa,email,cadruDidactic);
        Student ret=repository.save(student);
       if(ret!=null)throw new ValidationException("id existent");
       else {
           ListEvent<Student> event=createEvent(ListEventType.ADD,ret,repository.findAll());
           notifyObservers(event);
       }

    }



    /**
     *modifica datele unui student
     * @param idStudent,int,id student
     * @param nume,string,nume student
     * @param grupa,string, grupa din care face parte studentul
     * @param email,email,email-ul studentului
     * @param cadruDidactic,string,indrumator laborator
     */
    public void update(int idStudent,String nume,String grupa,String email,String cadruDidactic) throws ValidationException {
        Student student=new Student(idStudent,nume,grupa,email,cadruDidactic);
        Student ret=repository.update(student);
       if(ret!=null){
           ListEvent<Student> event=createEvent(ListEventType.UPDATE,ret,repository.findAll());
           notifyObservers(event);
       }


    }




    /**
     * sterge un student dupa id
     * @param idStudent,id student
     */
    public void delete(int idStudent)throws ValidationException{
        if(repository1.findByStudent(idStudent)!=null) throw  new ValidationException("nu puteti sterge studentul,are asignata o nota");
        if(repository.findOne(idStudent)==null)throw new ValidationException(("nu exista acest student"));
       Student ret=repository.delete(idStudent);
        if(ret!=null){
            ListEvent<Student> event=createEvent(ListEventType.REMOVE,ret,repository.findAll());
            notifyObservers(event);
        }

    }

    /**
     * returneaza un student cu un anumit id
     * @param idStudent,id student
     * @returnstudentul cautat
     */
    public Student findById(int idStudent){
     return repository.findOne(idStudent);

    }

    /**
     *
     * @return toti studentii
     */
    public Iterable<Student>getAll(){
        return  repository.findAll();
    }
    public  int size(){
        return (int) repository.size();
    }


    /**
     * filtreaza o lista de studenti dupa un anumit criteriu
     * @param list,lista de filtrat
     * @param studentPredicate,criteriu de filtrare
     * @param cmp,criteriu de comparare
     * @param <Student>
     * @return lista filtrata
     */
    public static <Student> List<Student> filter(List<Student> list, Predicate <Student> studentPredicate, Comparator<Student> cmp){
        List<Student> filtred=new ArrayList<>();
        filtred= list.stream()
                .filter(studentPredicate)
                .sorted(cmp)
                .collect(Collectors.toList());
        return filtred;
    }

    //criterii de filtare
   public Predicate<Student> p1=(x)->x.getNume().startsWith("V");
    public Predicate<Student> p2=(x)->x.getCadruDidactic().toLowerCase().contains("berinde");
    public Predicate<Student> p3=(x)->x.getEmail().toLowerCase().contains("yahoo");

    //criterii de comparare
    public Comparator<Student> comparator1=(x,y)->x.getNume().compareTo(y.getNume());
    public Comparator<Student> comparator2=(x,y)->x.getGrupa().compareTo(y.getGrupa());

    public  List<Student> filterNume(String nume1) {
        //String nume=nume1.toLowerCase();
        Predicate<Domain.Student> p1=(x)->x.getNume().toLowerCase().startsWith(nume1);
        return filter(getList(),p1,comparator1);
    }
    public  List<Student> filterCadruDidactic(String cadruDidactic1) {
       // String cadruDidactic=cadruDidactic1.toLowerCase();
        Predicate<Domain.Student> p2=(x)->x.getCadruDidactic().toLowerCase().contains(cadruDidactic1);
        return filter(getList(),p2,comparator1);
    }
    public  List<Student> filterEmail(String email) {

        Predicate<Domain.Student> p1=(x)->x.getEmail().toLowerCase().contains(email);
        return filter(getList(),p1,comparator1);
    }
    /**
     *
     * @return lista de studenti
     */
    public List<Student> getList(){
        List<Student> all=new ArrayList<>();
        Iterable<Student>st=repository.findAll();
        st.forEach((Student s)->all.add(s));
        return all;
    }

    private <Student> ListEvent<Student> createEvent(ListEventType type,final Student elem,final Iterable<Student> list){
        return new ListEvent<Student>(type) {
            @Override
            public Iterable<Student> getList() {
                return list;
            }

            @Override
            public Student getElement() {
                return elem;
            }
        };
    }
    @Override
    public void addObserver(Observer<Student> observer) {
        studentObservers.add(observer);
    }

    @Override
    public void removeObserver(Observer<Student> observer) {
        studentObservers.remove(observer);
    }

    @Override
    public void notifyObservers(ListEvent<Student> event) {
        studentObservers.forEach(x->x.notifyEvent(event));
    }
}
