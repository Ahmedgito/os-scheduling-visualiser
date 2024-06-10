import { SchedulingStrategy } from "./SchedulingStrategy";

// round robin
export class RR implements SchedulingStrategy {
  run(): void {
    console.log("Running RR");
  }
}
