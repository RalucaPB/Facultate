package Service;

import Domain.Student;
import Domain.Tema;
import Repository.FileRepositoryTema;
import Repository.RepositoryTema;
import Utils.ListEvent;
import Utils.ListEventType;
import Utils.Observable;
import Utils.Observer;
import Validare.ValidationException;

import java.util.*;
import java.util.function.Predicate;
import java.util.stream.Collectors;


public class ServiceTema   implements Observable<Tema> {
    private FileRepositoryTema repository;
    ArrayList<Observer<Tema>> temaObservers=new ArrayList<>();
    private static int startingWeek = 39;
    //constructor
    public ServiceTema(FileRepositoryTema repository) {
        this.repository = repository;
    }

    /**
     * calculare saptamana curenta
     * @return saptamana curenta
     */
    public static int getCurrentWeek(){
        Date date=new Date();
        Calendar calendar= Calendar.getInstance();
        calendar.setTime(date);
        return calendar.get(Calendar.WEEK_OF_YEAR) - startingWeek;

    }


    /**
     * adauga o tema
     * @param idTema,int,id tema
     * @param descriere,string,cerinta tema
     * @param deadline,int,termen de predare
     */
    public void add(int idTema,String descriere,int deadline) throws ValidationException {
        checkDeadLine(deadline);
        Tema tema=new Tema(idTema,descriere,deadline);
       Tema ret= repository.save(tema);
        if(ret!=null)throw new ValidationException("id existent");
        else {
            ListEvent<Tema> event=createEvent(ListEventType.ADD,ret,repository.findAll());
            notifyObservers(event);
        }
    }

    /**
     * modifica datele unei teme
     * @param idTema,id tema
     * @param descriere,cerinta tema
     * @param deadline,termen predare
     * @param saptamanaCurenta,saptamana curenta
     */
    public void update(int idTema,String descriere,int deadline,int saptamanaCurenta) throws ValidationException {
        Tema tema=new Tema(idTema,descriere,deadline);
       // repository.update(tema,saptamanaCurenta);

    }

    /**
     * sterge o tema dupa un id
     * @param idTema,id tema
     */
    public void delete(int idTema)throws ValidationException{
        Tema ret=repository.delete(idTema);
        if(ret!=null){
            ListEvent<Tema> event=createEvent(ListEventType.REMOVE,ret,repository.findAll());
            notifyObservers(event);
        }
    }

    /**
     * cauta o tema dupa id
     * @param idTema,id tema
     * @return tema cautata
     */
    public Tema findById(int idTema){
        return repository.findOne(idTema);
    }

    /**
     *
     * @return toate temele
     */
    public Iterable<Tema> getAll(){
        return repository.findAll();
    }
    private void checkDeadLine(int deadline) throws ValidationException {
        if (deadline <= getCurrentWeek()) {
            throw new ValidationException("Deadline  > current week");
        }
    }
    /**
     * modificare deadline
     * @param idTema
     * @param newDeadline
     * @throws ValidationException
     */
      public void updateDeadline(int idTema, int newDeadline) throws ValidationException {
          checkDeadLine(newDeadline);
          Tema tema = new Tema(repository.findOne(idTema));
          tema.setDeadline(newDeadline);
          Tema ret=repository.update(idTema, tema);
          if(ret!=null){
              ListEvent<Tema> event=createEvent(ListEventType.UPDATE,ret,repository.findAll());
              notifyObservers(event);
          }
    }

    /**
     * functie care filtreaza o lista de teme dupa anumite criterii
     * @param list, lista de filtrat
     * @param temaPredicate, criteriul de filtrare
     * @param cmp,criteriul de comparare
     * @param <Tema>
     * @return lista filtrata
     */
    public static <Tema> List<Tema> filter(List<Tema> list, Predicate<Tema> temaPredicate, Comparator<Tema> cmp){
        List<Tema> filtred=new ArrayList<>();
        filtred= list.stream()
                .filter(temaPredicate)
                .sorted(cmp)
                .collect(Collectors.toList());
        return filtred;
    }
    //criterii de filtrare
    public Predicate<Tema> p1=(x)->x.getDeadline()>4;
    public Predicate<Tema> p2=(x)->x.getDescriere().contains("interfata");
    public Predicate<Tema> p3=p1.and(p2);

    //criterii de comparare
    public Comparator<Tema> comparator1=(x,y)->x.getId().compareTo(y.getId());
    public Comparator<Tema> comparator2=(x,y)->x.getDeadline()-(y.getDeadline());

    /**
     *
     * @return o lista de teme
     */
    public List<Tema> getList(){
        List<Tema> all=new ArrayList<>();
        Iterable<Tema>tm=repository.findAll();
        tm.forEach((Tema t)->all.add(t));
        return all;
    }
    public  List<Tema> filterDescriere(String descriere) {

        Predicate<Domain.Tema> p1=(x)->x.getDescriere().contains(descriere);
        return filter(getList(),p1,comparator1);
    }
    public  List<Tema> filterDeadline(int deadline) {

        Predicate<Domain.Tema> p1=(x)->x.getDeadline()==deadline;
        return filter(getList(),p1,comparator1);
    }
    public  List<Tema> filterDeadlineMaiMare(int deadline) {

        Predicate<Domain.Tema> p1=(x)->x.getDeadline()>deadline;
        return filter(getList(),p1,comparator1);
    }
    private <Tema> ListEvent<Tema> createEvent(ListEventType type, final Tema elem, final Iterable<Tema> list){
        return new ListEvent<Tema>(type) {
            @Override
            public Iterable<Tema> getList() {
                return list;
            }

            @Override
            public Tema getElement() {
                return elem;
            }
        };
    }
    @Override
    public void addObserver(Observer<Tema> observer) {
        temaObservers.add(observer);
    }

    @Override
    public void removeObserver(Observer<Tema> observer) {
        temaObservers.remove(observer);
    }

    @Override
    public void notifyObservers(ListEvent<Tema> event) {
        temaObservers.forEach(x->x.notifyEvent(event));

    }
}
