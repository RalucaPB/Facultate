package Validare;

import Domain.Student;
import Validare.ValidationException;
public class ValidatorStudent implements Validator<Student>{
    @Override
    public void validate(Student st) throws ValidationException {
        if (st.getId() < 0) {
            throw  new ValidationException("idStudent trebuie sa fie pozitiv");
        }

        if (st.getEmail().isEmpty()) {
            throw new ValidationException("email nu poate fi vid");
        }

        if (st.getGrupa().isEmpty() ) {
            throw new ValidationException("grupa nu poate fi vida");
        }

        if (st.getNume().isEmpty()) {
            throw new ValidationException("numele nu poate fi vid");
        }

        if (st.getCadruDidactic().isEmpty()) {
            throw new ValidationException("cadru didactic nu poate fi vid");
        }
    }
}
