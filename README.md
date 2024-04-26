# Overall Goals/Flow
1. Snow falls
2. Hits ground at various points
3. Snow collects on points on the ground
4. Eventually collects and covers the ground
5. Eventually starts piling up
6. Sun comes out and melts the snow
7. There's a speed slider that allows a sort of time lapse
8. Snow doesn't automatically collect
9. It hits the ground
10. Depending on the temperature the snow either stays or begins to melt when it hits the ground
11. It melts at different rates depending on the temperature
# Snowflakes
1. Function to push new items to the snowflakes array
   1. snowflakes[]
   2. constructor for new flake
   3. function to create snowflakes
   4. Time for function
   5. function to generate a random number. Activated for x, y and size.
2. Object for the ground
   1. Essentially a big green square
   2. Gets covered in snow slowly and accumulates, but the green square itself isn't affected
# Temperature
1. Goes up and down over time
2. Whether it goes up and down at what speed it goes up and down, and the variability at which these two change are all part of the object
3. Effects numerous elements
   1. Number of flakes
   2. Speed at which flakes melt
   3. Speed at which ground snow melts
# Timer
1. Effects everything
2. As a constant effects the time of day, weather changes over time, temperature changes over time
3. Can be sped up to allow the user to see all the effects happen at a rapid pace
# Build Phases