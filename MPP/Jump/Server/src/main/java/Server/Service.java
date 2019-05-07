package Server;

import Domain.Jurat;
import Domain.Participant;
import Repository.RepoHibernateParticipant;
import Repository.RepoJurat;
import Service.IService;
import Utils.Observer;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.concurrent.ConcurrentHashMap;


public class Service implements IService {

    private Map<String,Observer> notifyingMap;
    public List<Observer> observers;
    public RepoJurat repoJurat;
    public RepoHibernateParticipant repoHibernateParticipant;

    public Service(RepoJurat repoJurat, RepoHibernateParticipant repoHibernateParticipant) {
        this.repoJurat = repoJurat;
        this.repoHibernateParticipant = repoHibernateParticipant;
        observers= new ArrayList<>();
        notifyingMap= new ConcurrentHashMap<>();


    }

    @Override
    public void adaugaNota(Participant participant) throws Exception {

        this.repoHibernateParticipant.update(participant);
        modificastatus(participant);
        NotifyObservers();
    }

    @Override
    public boolean logIn(String username, String password,Observer obs) throws Exception {
        if( this.repoJurat.isValid(username,password))
        {
            if(notifyingMap.get(username)!=null)
                throw new Exception("User already logged in!");
            notifyingMap.put(username,obs);
            return true;
        }
        return false;
    }

    @Override
    public void logOut(String username) throws Exception {
        Observer localClient = notifyingMap.remove(username);
        System.out.println("User logout "+username);
        if (localClient==null)
            throw new Exception("User "+username+" is not logged in.");
    }


    @Override
    public void modificastatus(Participant participant) {

        repoHibernateParticipant.modificaStatus(participant);
    }

    @Override
    public Iterable<Participant> getAll() throws Exception {
        return this.repoHibernateParticipant.findAll();
    }

    @Override
    public Jurat findJurat(String username) throws Exception {
        return this.repoJurat.findOne(username);
    }

    @Override
    public void NotifyObservers()
    {
        try {
            Iterable<Participant> p = this.getAll();
            for (Observer o : observers)

                o.Notify(p);
        }catch (Exception e)
        {
            System.out.println(e.getMessage());
        }
    }

    @Override
    public void AddObserver(Observer observer) {
        observers.add(observer);
    }

    @Override
    public void RemoveObserver(Observer observer)
    {
        observers.remove(observer);

    }
    private void NotifyAll() throws Exception
    {
        Iterable<Participant> flights=getAll();
        for (Observer observer:notifyingMap.values())
            observer.Notify(flights);
    }
}
