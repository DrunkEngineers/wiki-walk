# WikiWalk

WikiWalk was created for the #SortableData Hackathon '13. It's a game that everyone knows. The Wikipedia Game. Start at one page and get to another. Well, we took this childhood game and turned it into something new. We call it WikiWalk.

#### Running WikiWalk

The application generates a tree of connected Wikipedia articles. Before building the tree, the application prompts you to choose a tree depth and maximum links per page. The maximum links per page parameter controls the maximum number of child nodes attached to any parent node. 

It is advised that you limit the number of nodes in the tree, since each node is a distinct call to Wikipedia's API. The number of nodes can be calculated via the following equation:

`max_node_count = max_links_per_page**depth`

After generating the tree, you can expand child nodes by clicking them. These expanded nodes can be collapsed again by clicking them.

#### Design

WikiWalk uses a depth-first traversal to build the tree. The nodes are displayed with D3. Wikipedia's API only provides the first 500 page links. A random number of links are selected from this collection and displayed in the tree. The quantity of displayed nodes is a parameter in the setup form filled out by the user.

