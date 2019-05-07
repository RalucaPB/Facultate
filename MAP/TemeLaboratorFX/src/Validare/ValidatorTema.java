package Validare;

import Domain.Tema;
import Validare.ValidationException;
public class ValidatorTema implements Validator<Tema> {
    public void validate(Tema t) throws ValidationException {
        if (t.getId() < 0) {
            throw new ValidationException("id tema trebuie sa fie pozitiv");
        }

        if (t.getDeadline() < 2 || t.getDeadline() > 14) {
            throw new ValidationException("deadline trebuie sa fie >=2 si <=14");
        }

        if (t.getDescriere().isEmpty()) {
            throw new ValidationException("descrierea nu poate fi vida");
        }
    }
}
