import { spawnSync } from 'node:child_process';
import { cpSync, existsSync, mkdirSync, rmSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const demoProjectDir = path.join(rootDir, 'src', 'wedding demo');
const demoDistDir = path.join(demoProjectDir, 'dist');
const publicDemoDir = path.join(rootDir, 'public', 'demo');

if (!existsSync(demoProjectDir)) {
  throw new Error(`Wedding demo project not found at ${demoProjectDir}`);
}

const npmCommand = process.platform === 'win32' ? 'npm.cmd' : 'npm';
const buildResult = spawnSync(npmCommand, ['run', 'build'], {
  cwd: demoProjectDir,
  stdio: 'inherit',
});

if (buildResult.status !== 0) {
  process.exit(buildResult.status ?? 1);
}

if (existsSync(publicDemoDir)) {
  rmSync(publicDemoDir, { recursive: true, force: true });
}

mkdirSync(publicDemoDir, { recursive: true });
cpSync(demoDistDir, publicDemoDir, { recursive: true });

console.log(`Wedding demo assets copied to ${publicDemoDir}`);
