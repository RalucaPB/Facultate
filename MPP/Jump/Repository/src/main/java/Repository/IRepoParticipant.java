package Repository;

import Domain.Participant;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;

@Component
@Repository
public interface IRepoParticipant extends IRepository<Integer, Participant> {
}
