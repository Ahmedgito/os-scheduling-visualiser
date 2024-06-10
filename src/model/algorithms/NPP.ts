import { SchedulingStrategy } from "./SchedulingStrategy";

// non-preemptive priority
export class NPP implements SchedulingStrategy {
  run(): void {
    console.log("Running FCFS");
  }
}
