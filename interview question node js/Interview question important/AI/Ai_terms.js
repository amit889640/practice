Basic :- Supervised/unsupervised learning, datasets, training/evaluation (accuracy, loss)
TensorFlow.js & Brain.js :- For model training
Githup co-pilot:- AI Coding Assistants
LangChain.js, RAG:- LLM integraion, personal agent
NumPy.js :- for data modeling

Agentic AI:- It can plan → decide → act → learn → repeat which leads to autonomous work,  tools to use it 
    LangChain Agents
    AutoGen (Microsoft)
    CrewAI
    OpenAI Agents SDK
    Semantic Kernel

LLM:- Intelligence 

RAG (Retrieval-Augmented Generation): Combines LLMs with external data retrieval for accurate, hallucination-free responses; use LangChain.js in NestJS for app-specific knowledge bases.

Vector DB: Embedding model   ChromaDB

Embeddings: Vector representations of text/data for similarity search; power recommendations in Node.js 

MCP (Model context protocol):- To interact with external data source

MOE(Mixture of Experts) :- Specialize sub LLM It is an modern architecture of LLM,  Big AI models are expensive monsters. Only a small fraction of the model runs per request. Huge brain size , small compute cost.

    sparse routing:- router on the basis of expert which is best for this question 
    1) Massive scaling without massive cost
    Dense model:
    All neurons active → $$$

    MoE model:
    Few neurons active → $

    2) Better specialization
    Different experts become really good at specific domains.
    Result:
    Better coding
    Better reasoning
    Better multilingual ability

    Many top models use MoE architecture:
        GPT-4 family (partially)
        Google Switch Transformer
        DeepSeek models
        Claude models (likely hybrid)

Fine-Tuning: Custom training LLMs on your data; lighter alternatives like LoRA for JS via Hugging Face Transformers.js


AI levels ladder

Think of AI progress like a video game skill tree:

1️⃣ ANI – Artificial Narrow Intelligence
AI that does one thing well
Examples: Siri, Google Maps, ChatGPT, image generators.

2️⃣ AGI – Artificial General Intelligence
AI that can do any intellectual task a human can.
Not achieved yet (as of 2026).

3️⃣ ASI – Artificial Superintelligence
AI far smarter than the best humans at everything.

We are currently in the ANI era, moving toward AGI.

ASI is the next level after that.