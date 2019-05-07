package Repository;

import Validare.ValidationException;

/**
 *
 * @param <E>,un obiect
 * @param <ID>,id
 */
public interface Repository<E,ID> {
    long size();
    E save(E entity)throws ValidationException;
    E delete(ID id) throws ValidationException;
    E findOne(ID id);
    Iterable<E>findAll();
}
