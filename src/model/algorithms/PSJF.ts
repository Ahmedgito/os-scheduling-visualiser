import { SchedulingStrategy } from "./SchedulingStrategy";

// preemptive shortest job first
export class PSJF implements SchedulingStrategy {
  run(): void {
    console.log("Running PSJF");
  }
}
