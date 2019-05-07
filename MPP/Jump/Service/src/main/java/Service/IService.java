package Service;

import Domain.Jurat;
import Domain.Participant;
import Utils.Observable;
import Utils.Observer;

public interface IService extends Observable
{
    void adaugaNota(Participant participant) throws Exception;
    boolean logIn(String username, String password, Observer obs) throws Exception;
    void logOut(String username)throws Exception;
    void modificastatus(Participant participant) throws Exception;
    Iterable<Participant> getAll() throws Exception;
    Jurat findJurat(String username) throws Exception;

    @Override
    void NotifyObservers();

    @Override
    void RemoveObserver(Observer observer);

    @Override
    void AddObserver(Observer observer);
}