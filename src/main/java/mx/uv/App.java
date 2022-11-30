package mx.uv;
import static spark.Spark.*;

import java.util.Map;
import com.google.gson.Gson;

public class App 
{

    public static Gson gson = new Gson();
    //Base de datos en memoria
    // public static Map<String, usuario> usuarios = new HashMap<>();
    
    public static void main( String[] args )
    {
        // AXIOS
        options("/*", (request, response) -> {
            String accessControlRequestHeaders = request.headers("Access-Control-Request-Headers");
            if (accessControlRequestHeaders != null) {
                response.header("Access-Control-Allow-Headers", accessControlRequestHeaders);
            }
            String accessControlRequestMethod = request.headers("Access-Control-Request-Method");
            if (accessControlRequestMethod != null) {
                response.header("Access-Control-Allow-Methods", accessControlRequestMethod);
            }
            return "OK";
        });
        before((request, response) -> response.header("Access-Control-Allow-Origin", "*"));
        // 

        port(80);
        System.out.println( "Hello World!" );
        before((req,res)-> res.type("application/json"));
        // get("/usuarios", (req,res)-> );
        // post("/", (req,res)->{    
        // });
    }
}
