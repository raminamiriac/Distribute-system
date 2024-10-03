class Light {
 approaching {
 Red { 
 entry / {gotoRed();}
 after(redTimer)[!emergency] -> green;
 emergencyNotice -> AllRed; 
 }
 leaving
 Donttrain {
 gotoRed [!emergency] -> down;
 emergencyNotice -> Donttrain; 
} }

Statemachine coreController {
 Red {
 After(redTimer) -> Green;
 After(yellowTimer) -> Red;
} }

class Controller {
 simpleController as coreController; 
}

Class LightController {
 LL as coreController {
 Red {
 + midnightHour -> FlashingRed; }
 
 FlashingRed {
 morningHour -> Red;
} }

class Controller {
 away as coreController {
 - After(greenTimer) -> Red;
} }
