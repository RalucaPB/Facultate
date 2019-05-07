package Repository;

import Domain.Participant;
import org.hibernate.Session;
import org.hibernate.SessionFactory;
import org.hibernate.Transaction;
import org.hibernate.cfg.Configuration;

public class RepoHibernateParticipant implements IRepoParticipant {
    private SessionFactory sessionFactory;

    public RepoHibernateParticipant(SessionFactory sessionFactory) {
        this.sessionFactory = sessionFactory;
    }

    public RepoHibernateParticipant()
    {
       this.sessionFactory = new Configuration().configure().buildSessionFactory();

    }
    @Override
    public void save(Participant entity) throws Exception {
        Transaction transaction=null;
        try(Session session=sessionFactory.openSession())
        {
            transaction=session.beginTransaction();
            session.save(entity);
            transaction.commit();
        }
        catch (Exception e)
        {
            if(transaction!=null)
                transaction.rollback();
            throw  e;
        }
    }

    @Override
    public Participant findOne(Integer integer) throws Exception {
        Participant c;
        Transaction transaction=null;
        try(Session session=sessionFactory.openSession())
        {
            transaction=session.beginTransaction();
            c=session.get(Participant.class,integer);
            transaction.commit();
        }
        catch (Exception e)
        {
            if(transaction!=null)
                transaction.rollback();
            throw  e;
        }
        return  c;    }

    @Override
    public Iterable<Participant> findAll() throws Exception {
        //Transaction transaction = null;
        Iterable<Participant> participanti = null;
        try(Session session= sessionFactory.openSession())
        {
            //  transaction= session.beginTransaction();
            participanti= session.createQuery("from Participant ").list();
            // transaction.commit();
        }
        catch (Exception e)
        {
            // if(transaction!=null)
            //   transaction.rollback();
            throw new Exception(e);
        }
        return participanti;
    }
    public void modificaStatus(Participant participant) {
        int suma = participant.getNotaLungime()+participant.getNotaAterizare()+participant.getNotaStil();
        if(participant.getStatus().equals("NORESULT") && participant.getNotaLungime()!=0 && participant.getNotaAterizare()!=0&&participant.getNotaStil()!=0 ) {
            participant.setStatus("PENDING -" + String.valueOf(suma));
            participant.setNotaLungime(0);
            participant.setNotaAterizare(0);
            participant.setNotaStil(0);

        }
        if(participant.getNotaLungime()!=0 && participant.getNotaAterizare()!=0&&participant.getNotaStil()!=0 && participant.getStatus().contains("PENDING"))
            participant.setStatus("FINISHED-"+String.valueOf(suma));
    }
    @Override
    public void update(Participant entity) throws Exception {
        Transaction transaction=null;
        try(Session session=sessionFactory.openSession())
        {
            transaction=session.beginTransaction();
            session.update(entity);
            modificaStatus(entity);
            transaction.commit();
        }
        catch (Exception e)
        {
            if(transaction!=null)
                transaction.rollback();
            throw  e;
        }
    }
}