/*
Microservice
-it is an architectural approach to devlp app, which consist of multiple independent component
-loosely coupled services which can be developed, deployed, and maintained independently.
-scale up the development
-deployed independently
-Fast deployment pipeline


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
    -Two phase commit pattern
    -Three phase commit pattern
    -Circuit breaker pattern close->(failed->try for 10 time )->open->half open
    -Observability pattern,
    -Composition patter,
    -Api Gateway patter,
    -Service discovery pattern
    -Saga design pattern
        -Choreography pattern:- 1ms -> 2ms-> 3ms
        -Orchestrated pattern:- Gateway -> ms1  
                                        -> ms2    
                                        -> ms3    

Communication between ms
    - (req-reply pattern) (synchronous comm.) Direct http call broker call
    - (Fire and forget) (a-synchronous comm.) rabbit mq

-How to handle failure. (circuit breaker)
-how to communicate between ms and how to handle the failure

*/ 