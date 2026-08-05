const releaseItConfig = {
    git: {
        addUntrackedFiles: true,
        commitArgs: '--no-verify',
        commitMessage: 'chore(release): v${version}',
        getLatestTagFromAllRefs: true,
        pushArgs: ['--follow-tags'],
        requireBranch: false,
        requireCleanWorkingDir: false,
        requireCommits: false
    },
    verbose: true
};

export default releaseItConfig;
