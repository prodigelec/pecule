import { createInterface } from "node:readline/promises";
import { stdin, stdout } from "node:process";

/** Pose une question en clair dans le terminal. */
export async function ask(question: string) {
  const rl = createInterface({ input: stdin, output: stdout });
  const answer = await rl.question(question);
  rl.close();
  return answer;
}

/** Pose une question sans afficher ce qui est tapé (mots de passe). */
export async function askHidden(question: string) {
  stdout.write(question);
  const rl = createInterface({ input: stdin, terminal: true });
  (rl as unknown as { _writeToOutput: () => void })._writeToOutput = () => {};
  const answer = await rl.question("");
  rl.close();
  stdout.write("\n");
  return answer;
}
