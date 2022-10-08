
import { Question } from "./question";
import { Agent } from "./agent";

export class Form {
  id?:string;
  agent_id?:string;
  Agent?:Agent;
  title?:string;
  description?:string;
  questions?:Question[];




}
