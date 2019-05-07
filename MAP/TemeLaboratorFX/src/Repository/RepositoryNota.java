package Repository;

import Domain.Nota;
import Validare.ValidationException;
import Validare.Validator;

import java.util.Optional;

public class RepositoryNota extends AbstractRepository<Nota,Integer> {
    public RepositoryNota(Validator<Nota> validator) {
        super(validator);
    }

    /**
     * modificare nota
     * @param entity
     * @return nota modificata
     * @throws ValidationException
     */
    public Nota update(Nota entity)throws ValidationException
    {
        validator.validate(entity);
        if(entities.containsKey(entity.getId())) {
            return entities.put(entity.getId(), entity);

        }
        return null;
    }
    public Nota findByStudent(int idStudent)
    {
        return entities.get(idStudent);
    }
}
