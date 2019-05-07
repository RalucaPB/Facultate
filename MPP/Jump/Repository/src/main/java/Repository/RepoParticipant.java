package Repository;

import Domain.Participant;
import org.springframework.stereotype.Component;
import org.springframework.stereotype.Repository;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

@Component
@Repository
public class RepoParticipant  implements IRepoParticipant {

    @Override
    public void save(Participant entity) throws Exception {
    }

    @Override
    public Participant findOne(Integer integer) throws Exception {
        Participant p = null;
        //Connection connection=dbUtils.getConnection();

        try(Connection connection = MYSQLConnect.getConnection()) {
            try(PreparedStatement statement = connection.prepareStatement("SELECT * FROM participant WHERE idParticipant=?")) {
                statement.setInt(1, integer);
                ResultSet result = statement.executeQuery();
                if (result.next()) {
                    int id = result.getInt("idParticipant");
                    String nume = result.getString("nume");
                    String categ = result.getString("status");
                    int nota1 = result.getInt("NotaLungime");
                    int nota2 = result.getInt("NotaAterizare");
                    int nota3 = result.getInt("NotaStil");
                    p = new Participant(id, nume,categ,nota1,nota2,nota3);
                }
            }
        }
        catch (Exception e)
        {
            e.getMessage();
        }
        return p; }




    @Override
    public Iterable<Participant> findAll() throws Exception {
        List<Participant> items=new ArrayList<>();

        try(Connection con = MYSQLConnect.getConnection())
        {
            PreparedStatement preStmt=con.prepareStatement("select * from participant");
            try(ResultSet result=preStmt.executeQuery()) {
                while (result.next()) {
                    int id = result.getInt("idParticipant");
                    String nume = result.getString("nume");
                    String categ = result.getString("status");
                    int nota1 = result.getInt("NotaLungime");
                    int nota2 = result.getInt("NotaAterizare");
                    int nota3 = result.getInt("NotaStil");
                    Participant item = new Participant(id, nume,categ,nota1,nota2,nota3);
                    items.add(item);
                }
            }
        } catch (Exception e) {
            // logger.error(e);
            System.out.println("Error DB " + e);
        }
        // logger.traceExit(items);
        return items;
    }

    @Override
    public void update(Participant entity) throws Exception {

        try(Connection con = MYSQLConnect.getConnection()) {
            try (PreparedStatement statement = con.prepareStatement("UPDATE participant SET nume=?,status=?,notaLungime=?,notaAterizare=?,notaStil=? WHERE idParticipant=?")) {
                statement.setString(1, entity.getNume());
                statement.setString(2, entity.getStatus());
                statement.setInt(3, entity.getNotaLungime());
                statement.setInt(4, entity.getNotaAterizare());
                statement.setInt(5, entity.getNotaStil());
                statement.setInt(6, entity.getIdParticipant());
                statement.execute();
            }
        }
        catch (Exception e)
        {
            e.getMessage();
        }

    }


}