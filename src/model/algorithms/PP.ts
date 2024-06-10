import { SchedulingStrategy } from "./SchedulingStrategy";

// preemptive priority
export class PP implements SchedulingStrategy {
  run(): void {
    console.log("Running PP");
  }
}
