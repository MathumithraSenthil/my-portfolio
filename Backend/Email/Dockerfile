# Use Java 17 base image (or change to Java 21 if needed)
FROM openjdk:17-jdk-slim

# Set working directory
WORKDIR /app

# Copy the jar file (adjust name as needed)
COPY target/Email-0.0.1-SNAPSHOT.jar app.jar

# Expose port
EXPOSE 9887

# Run the JAR
ENTRYPOINT ["java", "-jar", "app.jar"]
