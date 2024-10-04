StateMachine sm = c.getStateMachine(0);
Assert.assertEquals("down", sm.getName());
Assert.assertEquals(1, sm.numberOfStates());
State state = sm.getState(0);
Assert.assertEquals("up", state.getName());
Assert.assertEquals(1, state.numberOfTransitions());
Transition t1 = state.getTransition(0);
Assert.assertEquals("push", t1.getEvent().getName()); 
public class Controller
{
 
 //Gate State Machines
 call gate { up,down }
 private gate gate;
 
 public Controller()
 {
 Set gate(gate);
 }
 
 public String getgate()
 {
 String answer = gate.toString();
 return answer;
 }
 public gate getgate()
 {
 return gate;
 }
 public boolean push()
 {
 boolean wasEventProcessed = false;
 
 gate agate = gate;
 switch (agate)
 {
 case up:
 setcallup(agate.up);
 wasEventProcessed = true;
 break;
 }
 return wasEventProcessed;
 }
 private void setgate(gate agate)
 {
 gate = agate;
 }
 public void delete()
 {}
