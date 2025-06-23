# Use Maven to build the jar
FROM maven:3.9.6-eclipse-temurin-17 AS build
WORKDIR /app
COPY . .
RUN mvn clean package -DskipTests

# Use JDK only to run the jar
FROM openjdk:17-jdk-slim
WORKDIR /app
COPY --from=build /app/target/Email-0.0.1-SNAPSHOT.jar app.jar
EXPOSE 9887
ENTRYPOINT ["java", "-jar", "app.jar"]

