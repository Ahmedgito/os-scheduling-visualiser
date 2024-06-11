import { Scheduler } from "../scheduler/Scheduler";
import { SchedulingStrategy } from "./SchedulingStrategy";
import { Status } from "../process/Status";
import { Process } from "../process/Process";

// round robin
export class RR implements SchedulingStrategy {
  run(scheduler: Scheduler): Process | null {
    console.log("Running RR");
  }
}
