# API

Api made with ExpressJS

## endpoints
'http://localhost/v1'
    User endpoints
    - users : 
        - put : Create user
        - post : Authentificate user
    - users/{id} :
        - get : Get user {id}
        - patch : Update user {id}
        - delete : Delete user {id}
    - users/{id}/main :
        - post : Set the main character of user {id}
    - users/{id}/tasks :
        - get : Get user {id} tasks list
    - users/{id}/tasks/{task} :
        - get : Get the task {task} for user {id}
        - put : Add the task {task} to the user {id} task list
        - delete : Delete the task {task} to the user {id} task list
    - users/{id}/tasks/{task}/check :
        - get : Check the task {task} for user {id}
    - users/{id}/characters :
        - get : Get all characters of user {id}
        - put : Create character for user {id}
    - users/{id}/characters/{character} :
        - get : Get character {character} of user {id}
        - patch : Update character {character} of user {id}
        - delete : Delete character {character} of user {id}

    Task endpoints
    - tasks :
        - get : Get all tasks
        - put : Create a task
    - tasks/id/{id} :
        - get : Get task {id}
        - patch : Update task {id}
        - delete : Delete task {id}
    - tasks/types :
        - get : Get all task types
        - put : Create a task type
    - tasks/types/{id} :
        - get : Get task type {id}
        - patch : Update task type {id}
        - delete : Delete task type {id}

    Shop endpoints
    - shop :
        - get : Get all shop items in the shop
    - shop/items :
        - get : Get all shop items
        - put : Create a shop item
    - shop/items/{id} :
        - get : Get shop item {id}
        - patch : Update shop item {id}
        - delete : Delete shop item {id}
    - shop/items/{id}/shop :
        - get : Add or Remove the shop item from the shop

    Island endpoint
    - islands :
        - get : Get all items
        - put : Add an item
    - islands/{id} :

    Items endpoint
    - items :
        - get : Get all items
        - put : Add an item
    - items/{id} :
        - get : Get item {id}
        - patch : Update item {id}
        - delete : Delete item {id}

    Classes endpoint
    - classes :
        - get : Get all classes
        - put : Add a classe
    - classes/{id} :
        - get : Get classe {id}
        - patch : Update classe {id}
        - put : Add server on classe {id}

    Regions endpoint
    - regions :
        - get : Get all regions
        - put : Add a region
    - regions/{abbr} :
        - get : Get region {abbr}
        - patch : Update region {abbr}
        - put : Add server on region {abbr}
    - regions/{abbr}/state :
        - put : Change server state of all the servers on region {abbr}
    - regions/{abbr}/server/{server} :
        - get : Get server {server} of region {abbr}
        - patch : Update server {server} of region {abbr}
        - delete : Delete server {server} of region {abbr}
    - regions/{abbr}/server/{server}/state :
        - get : Get server state of server {server} of region {abbr}
        - put : Change server state of server {server} of region {abbr}

    Server States endpoint :
    - server-states :
        - get : Get all server states
        - put : Add server state
    - server-states/{id} : 
        - get : Get server state {id}
        - patch : Update server state {id}
        - delete : Delete server state {id}

## Roadmap
- guilde :
- achievements
- title
- merchant
- reputation
- rapport
- build
- island : 
    - type
    - soul
- skill points
- collectibles : 
    - mokoko
    - giant hearts
    - masterpieces
    - omnium stars
    - sea bouties