package Utils;

import Domain.Participant;

import java.rmi.Remote;
import java.rmi.RemoteException;

public interface Observer extends Remote{
    void Notify(Iterable<Participant> participants)throws RemoteException;
}