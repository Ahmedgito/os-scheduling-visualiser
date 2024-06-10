import { SchedulingStrategy } from "./SchedulingStrategy";

// first come first serve
export class FCFS implements SchedulingStrategy {
  run(): void {
    console.log("Running FCFS");
  }
}
