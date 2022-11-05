import * as core from '@actions/core';
import { createBranch } from './create-branch';

async function run() {
  try {
    await createBranch();
  } catch (error: any) {
    core.setFailed(error.message);
  }
}
run();
