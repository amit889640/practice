/*
Microservice
-it is an architectural approach to devlp app, which consist of multiple independent component
-loosely coupled services which can be developed, deployed, and maintained independently.
-scale up the development
-deployed independently
-Fast deployment pipeline

. Key Microservices Principles (High-Level Code Decisions)
Single Responsibility: Each service handles one business domain only.

Independent Databases: Every microservice manages its data store.

Service Communication: Synchronous (HTTP/REST) or asynchronous (RabbitMQ, Kafka) depending on use-case.

API Gateway: For routing requests, security, and aggregation.

Scalable & Replaceable: Services can be developed, deployed, and scaled independently.

Consistent Patterns: Each service uses Controllers, Services, Repositories with class-based architecture.

Issue
- distributed transaction
- logging and visualization request
- complex services 
- security 
- cost of infrastructure deployment is expensive


when to chose microservices
-When you need to deliver the changes rapidly
-owned by the team (or teams) that owns the subdomains.

-Api-gateway 
    -use to hide the urls of the ms 
    -routing 
    -authentication
    -authorization
    -policy management

Patterns in microservices
    -Two phase commit pattern (1st-send the request to all ms and 2nd ms acknowledge if it bolong to that request)
    -Three phase commit pattern
    -Circuit breaker pattern close->(failed->try for 10 time )->open->half open
    -Observability pattern:-Logging, monitoring, and tracing to gain insights into system behavior and performance.
    -Composition patter,
    -Api Gateway patter,
    -Service discovery pattern
    -Saga design pattern (Sequential approach to general availability)
        -Choreography pattern:- 1ms -> 2ms-> 3ms
        -Orchestrated pattern:- Gateway -> ms1  
                                        -> ms2    
                                        -> ms3    
    - Service discovery pattern (dynamic discovery of services in a distributed system):- client -> service discovery->check in service registry(redirect ) -> ms1, ms2, ms3 ; Like in Netflix Eureka.
    - Event Sourcing Pattern stores all changes to application state as a sequence of events rather than only saving the current state. This enables reconstruction of past states and provides a reliable audit trail.
        Supports full history tracking and auditing, useful for compliance and debugging.
        Ideal for financial systems where transactions and account histories must be reconstructed accurately.
    -CQRS (Command Query Responsibility Segregation) Pattern separates read and write operations into different models. This allows for optimized performance and scalability, as read and write workloads can be handled independently.
        Improves performance by optimizing read and write operations separately.
        Useful in scenarios with high read-to-write ratios, such as social media platforms or e-commerce sites.

Communication between ms
    - (req-reply pattern) (synchronous comm.) Direct http call broker call
    - (Fire and forget) (a-synchronous comm.) rabbit mq

-How to handle failure. (circuit breaker)
- always use timeout if the service do not respond
- Re-try after timeout but the reqeust should be non-idempotent
-how to communicate between ms and how to handle the failure

*/
