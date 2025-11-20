# Scalability & Architecture Note

## 1. Horizontal Scaling
To handle increased traffic, I would deploy this Node.js application across multiple instances using a **Load Balancer** (like Nginx or AWS ALB).
- The backend is stateless (JWT is used for auth), allowing us to spin up new instances dynamically without worrying about session stickiness.
- **PM2** process manager would be used to utilize all CPU cores on a single instance.

## 2. Database Optimization
- **Indexing:** I would add indexes to frequently queried fields (e.g., `email` in Users, `user_id` in Tasks) to speed up lookups.
- **Caching:** I would implement **Redis** to cache frequent read operations (like fetching user profile or common tasks) to reduce load on MongoDB.
- **Sharding:** For massive data growth, I would enable MongoDB sharding to distribute data across multiple servers.

## 3. Security Hardening
- **Rate Limiting:** Implement `express-rate-limit` to prevent DDoS attacks.
- **Input Validation:** Expanded use of Joi/Zod to strictly validate all incoming data.
- **HTTPS:** Force SSL/TLS encryption for all data in transit.

## 4. Microservices (Future)
If the application grows complexity (e.g., adding Notifications, Payment Processing), I would decouple these into separate microservices communicating via a message queue (RabbitMQ or Kafka) to ensure the main API remains responsive.