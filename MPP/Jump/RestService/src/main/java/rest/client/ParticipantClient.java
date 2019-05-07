package rest.client;


import Domain.Participant;
import org.springframework.web.client.HttpClientErrorException;
import org.springframework.web.client.ResourceAccessException;
import org.springframework.web.client.RestTemplate;
import jump.services.rest.ServiceException;

import java.util.concurrent.Callable;

public class ParticipantClient {
    public static final String URL = "http://localhost:8080/jump/participant";

    private RestTemplate restTemplate = new RestTemplate();

    private <T> T execute(Callable<T> callable) {
        try {
            return callable.call();
        } catch (ResourceAccessException | HttpClientErrorException e) { // server down, resource exception
            throw new ServiceException(e);
        } catch (Exception e) {
            throw new ServiceException(e);
        }
    }



   /* public Participant getById(String id) {
        return execute(() -> restTemplate.getForObject(String.format("%s/%s", URL, id), Participant.class));
    }*/
    public Participant getById(String id) {
        return execute(() -> restTemplate.getForObject(String.format("%s/%s", URL, id), Participant.class));
    }


}
