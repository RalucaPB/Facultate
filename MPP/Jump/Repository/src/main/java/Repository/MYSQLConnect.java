package Repository;

import java.io.FileReader;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;
import java.util.Properties;

public  class MYSQLConnect {

    private Properties jdbcProps;
    // private static final Logger logger= LogManager.getLogger();

    private static Connection instance=null;


    private static Connection getNewConnection() throws Exception {
        Properties jdbcProps=new Properties();

        jdbcProps.load(new FileReader("db.config"));
        String driver=jdbcProps.getProperty("jump.mysql.driver");
        String url=jdbcProps.getProperty("jump.mysql.url");
        String user=jdbcProps.getProperty("jump.mysql.user");
        String pass=jdbcProps.getProperty("jump.mysql.pass");

        Connection con=null;
        try {
            Class.forName(driver);
            // logger.info("Loaded driver ...{}",driver);
            con= DriverManager.getConnection(url,user,pass);

        } catch (ClassNotFoundException e) {
            // logger.error(e);
            System.out.println("Error loading driver "+e);
        } catch (SQLException e) {
            // logger.error(e);
            System.out.println("Error getting connection "+e);
        }
        return con;
    }

    public static Connection getConnection() throws Exception{
        // logger.traceEntry();
        try {
            if (instance==null || instance.isClosed())
                instance=getNewConnection();

        } catch (SQLException e) {
            //logger.error(e);
            System.out.println("Error DB "+e);
        }
        // logger.traceExit(instance);
        return instance;
    }
}
