package UI;


import Domain.Nota;
import Domain.Student;
import Domain.Tema;
import Service.ServiceNota;
import Service.ServiceStudent;
import Service.ServiceTema;
import Validare.ValidationException;



import java.util.InputMismatchException;
import java.util.List;
import java.util.Scanner;


public class Consola {
    private ServiceStudent serviceStudent;
    private ServiceTema serviceTema;
    private ServiceNota serviceNota;

    public Consola(ServiceStudent serviceStudent, ServiceTema serviceTema, ServiceNota serviceNota) {
        this.serviceStudent = serviceStudent;
        this.serviceTema = serviceTema;
        this.serviceNota = serviceNota;
    }

    private void printMenu() {
        System.out.println("    1. Adauga student");
        System.out.println("    2. Afiseaza studentii");
        System.out.println("    3. Sterge student");
        System.out.println("    4. Cauta student");
        System.out.println("    5. Adauga tema laborator");
        System.out.println("    6. Modifica termen predare");
        System.out.println("    7. Afiseaza temele");
        System.out.println("    8. Adauga nota");
        System.out.println("    9. Modifica nota");
        System.out.println("    10. Afiseaza notele");
        System.out.println("    11. Filtarea studentilor a caror nume incepe cu V");
        System.out.println("    12. Filtarea studentilor care il au ca profesor pe Berinde");
        System.out.println("    13. Filtarea studentilor a caror nume incepe cu V si il au ca profesor pe Berinde");
        System.out.println("    14. Filtrarea temelor care au deadline-ul >4");
        System.out.println("    15. Filtrarea temelor care au cerinte despre interfata");
        System.out.println("    16. Filtrarea temelor care au cerinte despre interfata si au deadline-ul >4");
        System.out.println("    17. Filtrarea notelor care au valoarea>5");
        System.out.println("    18. Filtrarea notelor care au valoarea>8");
        System.out.println("    19. Filtrarea notelor care au valoarea=10");
    }



    private void printStudenti() {
        System.out.println("............Studentii..................");
        System.out.println("ID      NUME       GRUPA     EMAIL   CADRU DIDACTIC");
        System.out.println();
        Iterable<Student> studenti = serviceStudent.getAll();
        for (Student st : studenti) {
            System.out.println(st);
        }

    }

    private void printTeme() {
        System.out.println("............Teme..................");
        System.out.println("NUMAR      DESCRIERE       DEADLINE");
        System.out.println();
        Iterable<Tema> teme = serviceTema.getAll();
        for (Tema tm : teme) {
            System.out.println(tm);
        }

    }

    private void printNote() {
        System.out.println("............Note..................");
        System.out.println("ID NOTA      ID STUDENT     ID TEMA       VALOARE");
        System.out.println();
        Iterable<Nota> note = serviceNota.getAll();
        for (Nota nt : note) {
            System.out.println(nt);
        }

    }

    private Student readStudent() {
        Scanner scanner = new Scanner(System.in);
        System.out.print("    Dati id: ");
        int id = scanner.nextInt();
        System.out.print("   Dati nume: ");
        scanner.nextLine();
        String nume = scanner.nextLine();
        System.out.print("   Dati grup: ");
        String grupa = scanner.nextLine();
        System.out.print("   Dati email: ");
        String email = scanner.nextLine();
        System.out.print("   Dati cadruDidactic: ");
        String cadruDidactic = scanner.nextLine();
        return new Student(id, nume, grupa, email, cadruDidactic);
    }

    private void addStudent() {
        Student st = readStudent();
        try {
            serviceStudent.add(
                    st.getId(),
                    st.getNume(),
                    st.getGrupa(),
                    st.getEmail(),
                    st.getCadruDidactic()
            );
            System.out.println("    Student " + st.toString() + " adaugat!");

        } catch (ValidationException e1) {
            e1.getMessage();

        }
    }

    private void deleteStudent() throws ValidationException {
        Scanner scanner = new Scanner(System.in);
        System.out.print("    Dati id pentru stergere: ");
        int id = scanner.nextInt();
        serviceStudent.delete(id);
        System.out.println("    Student  sters!");


    }

    private void searchStudent() {
        Scanner scanner = new Scanner(System.in);
        System.out.print("    dati id pentru cautare: ");

        int id = scanner.nextInt();
        Student std = serviceStudent.findById(id);
        System.out.println("    Student este " + std.toString());

    }

    private void addTema() {
        Scanner scanner = new Scanner(System.in);
        System.out.print("    Dati id: ");
        int id = scanner.nextInt();
        scanner.nextLine();
        System.out.print("    Dati descriere: ");
        String descriere = scanner.nextLine();
        System.out.print("    Dati deadline: ");
        int deadline = scanner.nextInt();
        try {
            serviceTema.add(id, descriere, deadline);
        } catch (ValidationException e) {
            e.printStackTrace();
        }

    }
    private void modificaTermen()throws ValidationException{
        Scanner scanner = new Scanner(System.in);
        System.out.print("    Dati id: ");
        int id = scanner.nextInt();
        System.out.print("    Dati un nou deadline: ");
        int newDeadline = scanner.nextInt();
        serviceTema.updateDeadline(id, newDeadline);
    }

    private void addNota() throws ValidationException{
        Scanner scanner = new Scanner(System.in);
        System.out.print("    Dati id: ");
        int id = scanner.nextInt();
        System.out.print("    Dati id student: ");
        int idStudent = scanner.nextInt();
        System.out.print("    Dati id tema: ");
        int idTema = scanner.nextInt();
        System.out.print("    Dati nota: ");
        int nota = scanner.nextInt();
        System.out.print("    Dati week: ");
        int week = scanner.nextInt();
        scanner.nextLine();
        System.out.print("    Dati observatii: ");
        String obs = scanner.nextLine();
        serviceNota.add(id, idStudent, idTema, nota, week, obs);
    }

    private void updateNota()throws ValidationException {
        Scanner scanner = new Scanner(System.in);
        System.out.print("    Dati id: ");
        int id = scanner.nextInt();
        System.out.print("    Dati valoarea noua: ");
        int value = scanner.nextInt();
        System.out.print("    Dati week: ");
        int week = scanner.nextInt();
        System.out.print("    Dati observatii: ");
        String obs = scanner.nextLine();
        serviceNota.update(id, value, week, obs);


    }

    public void run() {
        System.out.println("................");
        Scanner scanner = new Scanner(System.in);
        while (true) {
            System.out.println("20.Meniu");
            System.out.println("0. exit");
            //inputs and outputs
            System.out.print("dati comanda: ");
            try {
                int cmd = scanner.nextInt();
                switch (cmd) {
                    case (1):
                        addStudent();
                        break;
                    case (2):
                        printStudenti();
                        break;
                    case (3):
                        deleteStudent();
                        break;
                    case (4):
                        searchStudent();
                        break;
                    case (5):
                        addTema();
                        break;
                    case (6):
                        modificaTermen();
                        break;
                    case (7):
                        printTeme();
                        break;
                    case (8):
                        addNota();
                        break;
                    case (9):
                        updateNota();
                        break;
                    case (10):
                        printNote();
                        break;
                    case(11):
                        Scanner scanner1 = new Scanner(System.in);
                        String nume = scanner1.nextLine();
                        String nume1=nume.toLowerCase();
                       serviceStudent.filter( serviceStudent.getList(),(x)->x.getNume().toLowerCase().contains(nume1),serviceStudent.comparator1).forEach(x-> System.out.println(x));
                        break;
                    case(12):
                        serviceStudent.filter(serviceStudent.getList(),serviceStudent.p2,serviceStudent.comparator2).forEach(x-> System.out.println(x));
                        break;
                    case(13):
                        serviceStudent.filter(serviceStudent.getList(),serviceStudent.p3,serviceStudent.comparator1).forEach(x-> System.out.println(x));
                        break;
                    case(14):
                        serviceTema.filter(serviceTema.getList(),serviceTema.p1,serviceTema.comparator2).forEach(x-> System.out.println(x));
                        break;
                    case(15):
                        serviceTema.filter(serviceTema.getList(),serviceTema.p2,serviceTema.comparator1).forEach(x-> System.out.println(x));
                        break;
                    case(16):
                        serviceTema.filter(serviceTema.getList(),serviceTema.p3,serviceTema.comparator1).forEach(x-> System.out.println(x));
                        break;
                    case(17):
                        serviceNota.filter(serviceNota.getList(),serviceNota.p1,serviceNota.comparator1).forEach(x-> System.out.println(x));
                        break;
                    case(18):
                        serviceNota.filter(serviceNota.getList(),serviceNota.p2,serviceNota.comparator1).forEach(x-> System.out.println(x));
                        break;
                    case(19):
                        serviceNota.filter(serviceNota.getList(),serviceNota.p3,serviceNota.comparator1).forEach(x-> System.out.println(x));
                        break;
                    case (20):
                        printMenu();
                        break;
                    case (0):
                        System.out.println(".........................");
                        return;
                    default:
                        System.out.println("Comanda invalida");
                }

            } catch (InputMismatchException ex) {
                System.err.println(ex);
                scanner.nextLine();
            } catch (ValidationException e) {
                System.err.println(e);
                scanner.nextLine();
            }


        }
    }

}

