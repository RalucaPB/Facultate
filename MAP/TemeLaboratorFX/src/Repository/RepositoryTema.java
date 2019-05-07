package Repository;

import Domain.Tema;
import Validare.ValidationException;
import Validare.Validator;

import java.util.Optional;

public class RepositoryTema extends AbstractRepository<Tema,Integer> {
    //constructor
    public RepositoryTema(Validator<Tema> validator) {
        super(validator);
    }

   /* public Tema update(Tema entity,int saptamanaCurenta) throws ValidationException{
        if(!entities.containsKey(entity.getId())) return null;
        else{validator.validate(entity);
        Tema tema=entities.get(entity.getId());
        if(saptamanaCurenta>=tema.getDeadline()) return null;
        return entities.put(entity.getId(),entity);

    }}
*/

    public Tema update(int id, Tema replacement) throws ValidationException {
        if (!entities.containsKey(replacement.getId())) return null;
        else {
            validator.validate(replacement);
            return entities.put(replacement.getId(), replacement);

        }

    }
}
