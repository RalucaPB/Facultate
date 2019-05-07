package Repository;

import Domain.Student;
import Validare.ValidationException;
import Validare.Validator;

import java.util.Optional;

public class RepositoryStudent extends AbstractRepository<Student,Integer> {
    //constructor
    public RepositoryStudent(Validator<Student> validator) {
        super(validator);
    }

    /**
     *
     * @param entity,obiectul de tip Student
     * @return entitatea modificata
     * @throws ValidationException
     */
   /* public Optional<Student> update(Student entity) throws ValidationException{
        validator.validate(entity);
        if(entities.containsKey(entity.getId())) {
            entities.put(entity.getId(), entity);
            return Optional.empty();
        }
        return Optional.of(entity);
    }*/
    public Student update(Student entity) throws ValidationException{
        validator.validate(entity);
        if(entities.containsKey(entity.getId())) {
            return entities.put(entity.getId(), entity);

        }
        return null;
    }


}