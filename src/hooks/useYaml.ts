import fs from "fs";
import path from "path";
import yaml from "js-yaml";

export default function useYaml<T>(pathStructure: string[]): T {
  const filepath = path.join(process.cwd(), ...pathStructure);
  const fileContents = fs.readFileSync(filepath, "utf8");
  return yaml.load(fileContents) as T;
}
