Cog2
	
Core
=======================

* app
	- owns scene
	- owns world
	- owns systems
* language
* utils

Simulation (hosts)
========================

* world
	- updates
	- owns state
	- owns controllers
	- custom logic
* state
	- owns entities
	- transferable
	- custom state
* entity
	- owns components
	- updates
	- transferable
	- custom state
	- custom logic
* components
	- updates
	- transferable
	- custom state
	- custom logic
* system
	- updates
	- custom logic
* controller
	- owns view
	- refs entities
	- updates
	- custom logic
* view 
	- position / projection
	- renderer
	
Renderer
=======================

* scene
	- collection of meshes
* meshes
	- geometry
	- material
	- rendering logic 
* renderer
	- post processing
	- element
	- rendering logic
* camera
	- position data
	- projection data

Data
=======================

* transferable
	- serialized data
* level
	- serialized entity data

Decorators
====================

* @entityPool
* @entityFactory
* @replicated


worker / node:

- bootstrap
- simulation
- networking
	
main:

- bootstrap
- rendering (one direction)

authority
client prediction
client rendering

authority:

start server
start world
accept connections

events:

* join / disconnect 
* spawn / despawn
* update

