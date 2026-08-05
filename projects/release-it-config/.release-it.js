module.exports = {
  git: {
    addUntrackedFiles: true,
    commitArgs: "--no-verify",
    commitMessage: "chore(release): v${version}",
    requireBranch: false,
    requireCleanWorkingDir: false,
    requireCommits: false,
    tag: false,
  },
  verbose: true,
};
