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
    -Two phase commit pattern (1st: send can commit msg and request for block the necessary resource,2nd: do commit )
    -Three phase commit pattern (1st: send can commit 2nd:- Pre-commit for block the resource 3rd:- do commit)
    -Circuit breaker pattern close->(failed->try for 10 time )->open(It open the circuit to stop the execution)->half open(check for sometime if it is working)
    -Observability pattern,
    -Composition patter,
    -Api Gateway patter,
    -Service discovery pattern
    -Saga design pattern (Sequential approach to general availability)
        -Choreography pattern:- 1ms -> 2ms-> 3ms
        -Orchestrated pattern:- Gateway -> ms1  
                                        -> ms2    
                                        -> ms3    

Communication between ms
    - (req-reply pattern) (synchronous comm.) Direct http call broker call
    - (Fire and forget) (a-synchronous comm.) rabbit mq

-How to handle failure. (circuit breaker)
- always use timeout if the service do not respond
- Re-try after timeout but the reqeust should be non-idempotent
-how to communicate between ms and how to handle the failure

*/
