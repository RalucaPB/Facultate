package Validare;

import Domain.Nota;
import Validare.ValidationException;
public class ValidatorNota implements Validator<Nota> {
    @Override
    public void validate(Nota nota) throws ValidationException {
        if (nota.getId() < 0) {
            throw new ValidationException("nota itrebuie sa fie > 0");
        }

        if (nota.getIdStudent() < 0) {
            throw new ValidationException(" id student trebuie sa fie > 0");
        }

        if (nota.getIdTema() < 0) {
            throw new ValidationException("id tema trebuie sa fie  > 0");
        }

        if (nota.getValoare() < 1 || nota.getValoare() > 10) {
            throw new ValidationException("nota trebuie sa fie >=1 si <=10");
        }
    }
}
