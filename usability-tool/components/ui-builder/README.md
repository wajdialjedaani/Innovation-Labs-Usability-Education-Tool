# Research Paper Explanation

## Scenario

A scenario is the collection of instructions, solutions, usable bone components,
and grading weights for each UI Builder activities.

### Instructions

Each Scenario has instructions/scenarios for the user to follow to create a UI for 
the assigned scenario. One was created for each of the heuristic scenarios.

### Grading

Grading for UI Builder activities is based on two aspects: the bone components 
used and the positioning of these bone components. These two aspects can be
configured to have different weight depending on the activity. The weighted
score is built into a composite score out of 100, and then this score is rounded,
(more favorably to the user if they have a score about 95) to a score out of ten
to match the heuristic page.

During the grading process, penalties are used in order to make sure outrageously
incorrect submissions are not allowed to count as a passing grade. This occurs
when a sufficient amount of bones expected are missing, and when positions 
expected are vastly out of bounds. Collision detection penalties are also taken 
into account during the bone position grading routine.

After grading is complete, feedback is given to the user in the form of 
bones that were found to be missing and the "worst positioned component", as well
as the general numeric scores that were calculated.


### Grading Method

#### Bone Components used

The first score component calculated is the Bone components used score. This
score is calculated by checking for the existence of each of the expected
bones in the scenario solution. If the bone is not found in the user's, a penalty
of 20 points subtracted per bone missing is added to the user's score until it
is nil.

#### Bone Positioning

For each scenario, there is multiple solutions that are programmed in for the 
user to potentially submit. To account for this, each solution is considered
and the solution that is closest to the user input is counted as the one
that the user was aiming for.

For grading each solution, the relative position of one element to each other
element is considered, so as to allow for flexible positioning of UI components
within the graph. 




# Code Explanation for any coders working on this

This is an explanation of both the design of the UI Builder as well as the 
current process of how to create the heuristic activities.

# The Basics

The basic architecture for the UI Builder involves dragging components from
the drawer on the right to the grid on the left, grading them, and then
giving the user a score.

The UI Builder mostly utilizes one major library, DNDKit, a react drag and
drop library. It is responsible for the movement of all components in the 
library.

# What is good?

The best thing about the UI Builder as it currently stands at the time of writing
this, is that it has a fully functional user interactiion path from 

# What is bad?

# So, how do you make a scenario?

# The elephant in the room (the BoneComponent React component)

# Ideas for improvement