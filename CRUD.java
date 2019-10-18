/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package crud;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.SQLException;

/**
 *
 * @author Sebastian
 */
public class CRUD {

  
    public static void main(String[] args) throws SQLException {
       String jdbcURL="jdbc:mysql://remotemysql.com:3306/npLXVrsBen";
       String username="npLXVrsBen";
       String password="QEjvZcstri";
       
       try{
           Connection conexion= DriverManager.getConnection(jdbcURL,username,password);
           if(conexion!=null){
               System.out.println("Conectado a base de datos");
           }
       }catch(SQLException ex){
           ex.printStackTrace();
       }
    }
    
}
