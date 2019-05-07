package jump.services.rest;


import Domain.Participant;
import Repository.RepoHibernateParticipant;
import Repository.RepoParticipant;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.websocket.server.PathParam;
import java.util.ArrayList;
import java.util.List;


@RestController
@CrossOrigin
@RequestMapping("/jump/participant")
@ComponentScan( "Repository")
public class JumpParticipantController {

    private static final String template = "Hello, %s!";
    @Autowired
    private RepoParticipant repoHibernateParticipant;


    public JumpParticipantController(){

        this.repoHibernateParticipant = new RepoParticipant();

    }


    /*(@RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public ResponseEntity<?> getById(@PathVariable Integer id){

        Participant proba= null;
        try {
            proba = repoHibernateParticipant.findOne(id);
        } catch (Exception e) {
            e.printStackTrace();
        }
        if (proba==null)
            return new ResponseEntity<String>("Participant not found", HttpStatus.NOT_FOUND);
        else
            return new ResponseEntity<Participant>(proba, HttpStatus.OK);
    }*/
    @RequestMapping( method=RequestMethod.GET)
    public Iterable<Participant> getAll() throws Exception {
        return repoHibernateParticipant.findAll();
    }
    @RequestMapping(value="/{status}", method = RequestMethod.GET)
    public List<Participant> getByStatus(@PathVariable String status)
    {

        try{
            List<Participant> all = new ArrayList<>();
            all = (List)repoHibernateParticipant.findAll();

            List<Participant> getAll = new ArrayList<>();

            for(Participant p : all)
            {
                if(p.getStatus().equals(status))
                {
                    getAll.add(p);
                }
            }

            return getAll;}catch(Exception e)
        {
            e.printStackTrace();
        }
        return null;
    }

}
