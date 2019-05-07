package Repository;

import Domain.HasId;
import Validare.ValidationException;
import Validare.Validator;

import java.util.Map;
import java.util.TreeMap;

public abstract class AbstractRepository<E extends HasId<ID>,ID> implements Repository<E,ID> {
    protected Map<ID,E> entities= new TreeMap<>();
    protected Validator<E> validator;
    //constructor
    public AbstractRepository(Validator<E> validator ){
        this.validator=validator;
    }

    /**
     *
     * @return dimensiunea map-ului entities
     */
    @Override
    public long size() {
        return entities.size();
    }

    /**
     *
     * @param entity,un obiect
     * @return entitatea
     * @throws ValidationException
     */
    @Override
    public E save(E entity) throws ValidationException {
        validator.validate(entity);
        if(entities.containsKey(entity.getId()))
            return entities.get(entity.getId());

        entities.put(entity.getId(),entity);
        return null;
    }

    /**
     *
     * @param id,id entitate
     * @return entitatea stearsa
     */

    @Override
    /*public Optional<E> delete(ID id) throws ValidationException {
         return Optional.ofNullable(entities.remove(id));
    }*/
    public E delete(ID id) throws ValidationException {
        return entities.remove(id);
    }
    /**
     *
     * @param id,id entitate
     * @return entitatea cautata dupa id
     */
    @Override
    public E findOne(ID id) {
        return entities.get(id);
    }

    /**
     *
     * @return toate obiectele
     */
    @Override
    public Iterable<E> findAll() { return entities.values(); }
}
