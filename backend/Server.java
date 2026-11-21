import com.sun.net.httpserver.HttpExchange;
import com.sun.net.httpserver.HttpHandler;
import com.sun.net.httpserver.HttpServer;

import java.io.*;
import java.net.InetSocketAddress;
import java.nio.charset.StandardCharsets;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

/**
 * Server.java - Backend Java Web Server for C++ Master AI Platform
 * 
 * Capabilities:
 * 1. Serves all Frontend static files (HTML, CSS, JS, Fonts, Images) from the frontend/ folder.
 * 2. Implements REST API endpoints (/api/status, /api/health).
 * 3. Requires only standard Java (JDK 8+ / JDK 17 / JDK 21 / JDK 23) with ZERO external JAR dependencies.
 *
 * How to run:
 *   java Server.java
 * or from project root:
 *   java backend/Server.java
 */
public class Server {
    private static final int PORT = 8080;
    private static Path FRONTEND_DIR;

    public static void main(String[] args) throws IOException {
        // Detect frontend directory location
        Path current = Paths.get(".").toAbsolutePath().normalize();
        if (Files.exists(current.resolve("frontend").resolve("index.html"))) {
            FRONTEND_DIR = current.resolve("frontend").normalize();
        } else if (Files.exists(current.resolve("..").resolve("frontend").resolve("index.html"))) {
            FRONTEND_DIR = current.resolve("..").resolve("frontend").normalize();
        } else {
            FRONTEND_DIR = current;
        }

        HttpServer server = HttpServer.create(new InetSocketAddress(PORT), 0);

        // API Handler
        server.createContext("/api/status", new ApiStatusHandler());

        // Frontend Static Files Handler
        server.createContext("/", new StaticFileHandler());

        server.setExecutor(null);

        System.out.println("==========================================================");
        System.out.println("  C++ MASTER AI - BACKEND JAVA WEB SERVER");
        System.out.println("==========================================================");
        System.out.println("  Server Status: ONLINE");
        System.out.println("  Port:          " + PORT);
        System.out.println("  URL:           http://localhost:" + PORT);
        System.out.println("  Frontend Dir:  " + FRONTEND_DIR);
        System.out.println("  Architecture:  Multi-tier (Frontend, Backend, Database)");
        System.out.println("  Press Ctrl+C to stop the server.");
        System.out.println("==========================================================");

        server.start();
    }

    static class ApiStatusHandler implements HttpHandler {
        @Override
        public void handle(HttpExchange exchange) throws IOException {
            String json = "{\n" +
                    "  \"status\": \"online\",\n" +
                    "  \"service\": \"C++ Master AI Backend Server\",\n" +
                    "  \"runtime\": \"Java " + System.getProperty("java.version") + "\",\n" +
                    "  \"timestamp\": \"" + java.time.Instant.now().toString() + "\"\n" +
                    "}";

            byte[] bytes = json.getBytes(StandardCharsets.UTF_8);
            exchange.getResponseHeaders().set("Content-Type", "application/json; charset=utf-8");
            exchange.getResponseHeaders().set("Access-Control-Allow-Origin", "*");
            exchange.sendResponseHeaders(200, bytes.length);
            OutputStream os = exchange.getResponseBody();
            os.write(bytes);
            os.close();
        }
    }

    static class StaticFileHandler implements HttpHandler {
        @Override
        public void handle(HttpExchange exchange) throws IOException {
            String pathStr = exchange.getRequestURI().getPath();
            if (pathStr == null || pathStr.equals("/") || pathStr.isEmpty()) {
                pathStr = "/index.html";
            }

            // Sanitize path to prevent directory traversal
            pathStr = pathStr.replace("../", "").replace("..\\", "");
            if (pathStr.startsWith("/")) {
                pathStr = pathStr.substring(1);
            }

            Path requestedFile = FRONTEND_DIR.resolve(pathStr).normalize();

            // Fallback to index.html if file doesn't exist
            if (!requestedFile.startsWith(FRONTEND_DIR) || !Files.exists(requestedFile) || Files.isDirectory(requestedFile)) {
                requestedFile = FRONTEND_DIR.resolve("index.html");
            }

            if (!Files.exists(requestedFile)) {
                String notFound = "404 Not Found - File does not exist: " + pathStr;
                exchange.sendResponseHeaders(404, notFound.length());
                OutputStream os = exchange.getResponseBody();
                os.write(notFound.getBytes(StandardCharsets.UTF_8));
                os.close();
                return;
            }

            String mimeType = getMimeType(requestedFile.toString());
            exchange.getResponseHeaders().set("Content-Type", mimeType + "; charset=utf-8");
            exchange.getResponseHeaders().set("Access-Control-Allow-Origin", "*");

            byte[] bytes = Files.readAllBytes(requestedFile);
            exchange.sendResponseHeaders(200, bytes.length);
            OutputStream os = exchange.getResponseBody();
            os.write(bytes);
            os.close();
        }

        private String getMimeType(String path) {
            String lower = path.toLowerCase();
            if (lower.endsWith(".html") || lower.endsWith(".htm")) return "text/html";
            if (lower.endsWith(".css")) return "text/css";
            if (lower.endsWith(".js")) return "application/javascript";
            if (lower.endsWith(".json")) return "application/json";
            if (lower.endsWith(".svg")) return "image/svg+xml";
            if (lower.endsWith(".png")) return "image/png";
            if (lower.endsWith(".jpg") || lower.endsWith(".jpeg")) return "image/jpeg";
            if (lower.endsWith(".ico")) return "image/x-icon";
            return "text/plain";
        }
    }
}
