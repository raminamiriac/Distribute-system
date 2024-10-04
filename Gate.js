 class Gate 
{ 
 status { 
 Open { 
 leaving -> Closing; } 
 
 Closing { 
 approaching -> Opening; 
 reach -> Closed; 
 } 
 
 Closed { 
 approaching-> Opening; } 
 
 Opening { 
 detect -> HalfOpen; 
 approaching -> Open; 
 } 
 
 HalfOpen { buttonOrObstacle -> Opening; } 
 } 
}