public boolean timeoutS1ToS2()
 {
 boolean wasEventProcessed = false;
 
 Status aStatus = status;
 switch (aStatus)
 {
 case S1:
 exitStatus();
 setStatus(Status.S2);
 wasEventProcessed = true;
 break;
 }

private void exitStatus()
 {
 switch(status)
 {
 case S1:
 stopTimeoutS1ToS2Handler();
 break;
 case S2:
 stopTimeoutS2ToS1Handler();
 break;
 }
 } 

private void setStatus(Status aStatus)
 {
 status = aStatus;
 // entry actions and do activities
 switch(status)
 {
 case S1:
 startTimeoutS1ToS2Handler();
 break;
 case S2:
 startTimeoutS2ToS1Handler();
 break;
 }
 } 
