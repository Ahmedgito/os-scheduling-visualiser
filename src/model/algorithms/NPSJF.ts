import { SchedulingStrategy } from "./SchedulingStrategy";

// non-preemptive shortest job first
export class NPSJF implements SchedulingStrategy {
  run(): void {
    console.log("Running NPSJF");
  }
}
