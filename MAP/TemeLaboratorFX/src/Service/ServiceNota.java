package Service;

import Domain.Nota;
import Domain.Tema;
import Repository.*;
import Utils.ListEvent;
import Utils.ListEventType;
import Utils.Observable;
import Utils.Observer;
import Validare.ValidationException;

import java.util.*;
import java.util.function.Predicate;
import java.util.stream.Collectors;

public class ServiceNota implements Observable<Nota>{
    private FileRepositoryNota repositoryNota;
    private FileRepositoryStudent repositoryStudent;
    private FileRepositoryTema repositoryTema;
    private static int startingWeek = 39;
    ArrayList<Observer<Nota>> notaObservers=new ArrayList<>();

    //constructor
    public ServiceNota(FileRepositoryNota repositoryNota,FileRepositoryStudent repositoryStudent,FileRepositoryTema repositoryTema) {
        this.repositoryNota = repositoryNota;
        this.repositoryStudent = repositoryStudent;
        this.repositoryTema = repositoryTema;
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
     * calculare penalizare
     * @param valoare
     * @param week
     * @return valoarea dupa aplicarea penalizarii
     */
    private int penalizare(int valoare,int week) {
        if(week > getCurrentWeek()) {
            if (week - getCurrentWeek() == 1) return valoare - 2;
            return 1;
        }

        return valoare ;
    }

    /**
     * adaugare nota
     * @param idNota
     * @param idStudent
     * @param idTema
     * @param valoare
     * @param week
     * @param observatie
     * @throws ValidationException
     */
    public void add(int idNota,int idStudent,int idTema,int valoare,int week,String observatie) throws ValidationException {
        if (repositoryNota.findOne(idNota)!=null) {
            throw new ValidationException("Nota exista deja");
        }
        if (repositoryStudent.findOne(idStudent)==null|| repositoryTema.findOne(idTema)==null) {
            throw new ValidationException("studentul sau tema nu exista");
        }
        int valoare1=penalizare(valoare,week);
        Iterable<Nota> all=repositoryNota.findAll();
        for(Nota nota:all){
            if(nota.getIdStudent()==idStudent && nota.getIdTema()==idTema){
                throw new ValidationException("studentul are deja o nota la aceasta tema.");
            }
        }

        Nota nota=new Nota(idNota,idStudent,idTema,valoare1);
        Nota ret=repositoryNota.save(nota);
        Tema tema=repositoryTema.findOne(idTema);
        int deadline=tema.getDeadline();
        DateRepository dateRepository=new DateRepository(String.valueOf(idStudent));
        dateRepository.create("Adaugare nota",idTema, valoare1, deadline, week, observatie);
        if(ret!=null)throw new ValidationException("id existent");
        else {
            ListEvent<Nota> event=createEvent(ListEventType.ADD,ret,repositoryNota.findAll());
            notifyObservers(event);
        }
    }

    /**
     * modificare nota
     * @param idNota
     * @param valoare
     * @param week
     * @param observatie
     * @throws ValidationException
     */
    public void update(int idNota, int valoare, int week, String observatie) throws ValidationException {
        Nota notaVeche=repositoryNota.findOne(idNota);
        int valoareNoua=penalizare(valoare,week);
        if(valoareNoua<valoare){
            throw new ValidationException("nota noua este mai mica decat cea veche si nu se schimba");
        }
        else{
            notaVeche.setValoare(valoareNoua);
            Nota ret=repositoryNota.update(notaVeche);
            DateRepository dateRepository=new DateRepository(String.valueOf(notaVeche.getIdStudent()));
            int deadline=repositoryTema.findOne(notaVeche.getIdTema()).getDeadline();
            dateRepository.create("Modificare nota",notaVeche.getIdTema(), valoareNoua, deadline, week, observatie);
            if(ret!=null){
                ListEvent<Nota> event=createEvent(ListEventType.UPDATE,ret,repositoryNota.findAll());
                notifyObservers(event);
            }
        }
    }


    /**
     * stergere nota dupa idNota
     * @param idNota
     * @throws ValidationException
     */
    public void delete(int idNota)throws  ValidationException
    {
       Nota ret= repositoryNota.delete(idNota);
        if(ret!=null){
            ListEvent<Nota> event=createEvent(ListEventType.REMOVE,ret,repositoryNota.findAll());
            notifyObservers(event);
        }
    }

    /**
     * cautare nota dupa idNota
     * @param idNota
     * @return nota cautata
     */
    public Nota findById(int idNota){
        return repositoryNota.findOne(idNota);
    }

    /**
     *
     * @return toate notele
     */
    public Iterable<Nota> getAll(){
        return repositoryNota.findAll();}


    /**
     * filtreaza o lisa de studenti dupa anumite criterii
     * @param list, lista de filtrat
     * @param notaPredicate,criterii de filtrare
     * @param cmp,crietrii de comparare
     * @param <Nota>
     * @return lista filtrata
     */
    public static <Nota> List<Nota> filter(List<Nota> list, Predicate<Nota> notaPredicate, Comparator<Nota> cmp){
        List<Nota> filtred=new ArrayList<>();
        filtred= list.stream()
                .filter(notaPredicate)
                .sorted(cmp)
                .collect(Collectors.toList());
        return filtred;
    }

    //criterii de filtrare
    public Predicate<Nota> p1=(x)->x.getValoare()>5;
    public Predicate<Nota> p2=(x)->x.getValoare()>8;
    public Predicate<Nota> p3=(x)->x.getValoare()==10;
    //criteriu de comparare
    public Comparator<Nota> comparator1=(x,y)->x.getId().compareTo(y.getId());
    public  List<Nota> filter5() {
        Predicate<Domain.Nota> p1=(x)->x.getValoare()>5;
        return filter(getList(),p1,comparator1);
    }
    public  List<Nota> filter8() {
        Predicate<Domain.Nota> p1=(x)->x.getValoare()>8;
        return filter(getList(),p1,comparator1);
    }
    public  List<Nota> filter10() {
        Predicate<Domain.Nota> p1=(x)->x.getValoare()==10;
        return filter(getList(),p1,comparator1);
    }
    /**
     *
     * @return lista de note
     */
    public List<Nota> getList(){
        List<Nota> all=new ArrayList<>();
        Iterable<Nota>nt=repositoryNota.findAll();
        nt.forEach((Nota n)->all.add(n));
        return all;
    }
    private <Nota> ListEvent<Nota> createEvent(ListEventType type, final Nota elem, final Iterable<Nota> list){
        return new ListEvent<Nota>(type) {
            @Override
            public Iterable<Nota> getList() {
                return list;
            }

            @Override
            public Nota getElement() {
                return elem;
            }
        };
    }
    @Override
    public void addObserver(Observer<Nota> observer) {
        notaObservers.add(observer);
    }

    @Override
    public void removeObserver(Observer<Nota> observer) {
        notaObservers.remove(observer);
    }

    @Override
    public void notifyObservers(ListEvent<Nota> event) {
        notaObservers.forEach(x->x.notifyEvent(event));
    }
}
