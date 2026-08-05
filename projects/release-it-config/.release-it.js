module.exports = {
  git: {
    addUntrackedFiles: true,
    commitArgs: "--no-verify",
    commitMessage: "chore(release): v${version}",
    getLatestTagFromAllRefs: true,
    requireBranch: false,
    requireCleanWorkingDir: false,
    requireCommits: false
  },
  verbose: true,
};
