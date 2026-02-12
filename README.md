## Fabric Network & SDK Note

This prototype focuses on the application integration layer of Hyperledger Fabric rather than running a full local Fabric network.

A complete Hyperledger Fabric setup requires:

Linux-based environments

Docker container orchestration

Channel configuration

While an attempt was made to run a full local Fabric network, my standard Windows + Docker + WSL setup is not reliably representative of production deployments. Hyperledger Fabric is designed primarily for Linux-based server environments.

To keep the focus on system design and integration architecture, the Fabric SDK interaction is modeled through a simulation layer. This allows:

Accurate transaction flow representation

Clear separation of API and blockchain logic

Production-aligned architecture

Replaceable Fabric integration layer

In a real deployment, the fabricService module would connect to:

Fabric peers

Ordering service

Real chaincode

CouchDB / LevelDB world state

The surrounding architecture would remain unchanged.