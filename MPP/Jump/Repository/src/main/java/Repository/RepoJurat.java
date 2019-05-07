package Repository;

import Domain.Jurat;

import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;

public class RepoJurat implements IRepoJurat {

    @Override
    public void save(Jurat entity) throws Exception {
    }

    @Override
    public Jurat findOne(String u) throws Exception {
        Connection con= MYSQLConnect.getConnection();

        try(PreparedStatement preStmt=con.prepareStatement("select * from jurat where username=?")){
            preStmt.setString(1,u);
            try(ResultSet result=preStmt.executeQuery()) {
                if (result.next()) {
                    Integer id=result.getInt("idJurat");
                    String username = result.getString("username");
                    String password = result.getString("parola");
                    String categorie=result.getString("categorie");


                    Jurat jurat=new Jurat(id,username,password,categorie);
                    //  logger.traceExit(users);
                    return jurat;
                }
            }
        }catch (SQLException ex){
            //  logger.error(ex);
            System.out.println("Error DB "+ex);
        }
        // logger.traceExit("No user found with user {}", u);

        try {
            con.close();
        } catch (SQLException e) {
            e.printStackTrace();
        }

        return null;    }

    @Override
    public Iterable<Jurat> findAll() throws Exception {
        return null;
    }

    @Override
    public void update(Jurat entity) throws Exception {

    }
    public boolean isValid(String username, String password)throws Exception {
        Jurat user = this.findOne(username);
        if (user != null)
        {
            if (user.getParola().equals(password))
            {
                return true;
            }
        }
        return false;
    }
}