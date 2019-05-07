package strat;

import Domain.Participant;
import org.springframework.web.client.RestClientException;
import org.springframework.web.client.RestTemplate;
import rest.client.ParticipantClient;
import jump.services.rest.ServiceException;

public class StartRestClient {

    private final static ParticipantClient usersClient=new ParticipantClient();
    public static void main(String[] args) {
        RestTemplate restTemplate=new RestTemplate();

        try{
            show(()->{
                Participant u=usersClient.getById("1");

                    System.out.println(u.getIdParticipant()+": "+u.getNume()+": "+ u.getStatus()+":"+u.getNotaLungime()+":"+u.getNotaAterizare()+":"+u.getNotaStil());

            });
        }catch(RestClientException ex){
            System.out.println("Exception ... "+ex.getMessage());
        }

    }
    private static void show(Runnable task) {
        try {
            task.run();
        } catch (ServiceException e) {
            //  LOG.error("Service exception", e);
            System.out.println("Service exception"+ e);
        }
    }
}
