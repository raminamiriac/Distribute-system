public boolean timeoutC1ToC2()
 {
 boolean wasEventProcessed = false;
 
 Status aStatus = status;
 switch (aStatus)
 {
 case C1:
 exitStatus();
 setStatus(Status.C2);
 wasEventProcessed = true;
 break;
 }

private void exitStatus()
 {
 switch(status)
 {
 case C1:
 stopTimeoutC1ToC2Handler();
 break;
 case C2:
 stopTimeoutC2ToC1Handler();
 break;
 }
 } 

private void setStatus(Status aStatus)
 {
 status = aStatus;
 // entry actions and do activities
 switch(status)
 {
 case C1:
 startTimeoutC1ToC2Handler();
 break;
 case C2:
 startTimeoutC2ToC1Handler();
 break;
 }
 } 
