# GitHub Actions Workflows

This repository includes automated GitHub Actions that check for new versions of fullPage.js and automatically updates the wrapper when a newer version is available.

## How it works

The workflows run daily at 2 AM UTC and:

1. **Checks for updates**: Compares the current fullPage.js version in `package.json` with the latest version available on npm
2. **Updates dependencies**: If a newer version is found, it updates the fullPage.js dependency
3. **Builds the project**: Runs the build process to ensure everything works correctly
4. **Creates Pull Request**: Automatically creates a PR for review and approval
5. **Updates package version**: Increments the patch version of the vue-fullpage.js package

## Available Workflows

### 1. Automatic Update Workflow
- **Name**: `fullPage.js Update Check`
- **File**: `.github/workflows/fullpage-update-check.yml`
- **Trigger**: Daily at 2 AM UTC + manual trigger
- **Action**: Automatically creates Pull Requests when new versions are found
- **Options**: Force update (even if versions match)
- **Output**: Pull Request with changes ready for review

### 2. Manual Check Workflow
- **Name**: `Manual fullPage.js Version Check`
- **File**: `.github/workflows/manual-fullpage-check.yml`
- **Trigger**: Manual only
- **Action**: Checks for updates without applying them
- **Features**:
  - Dry run mode (tests build with latest version)
  - Creates GitHub issues for manual review
  - Reverts changes after testing
  - Safe preview of updates

## Manual trigger

You can manually trigger either workflow:

1. Go to the **Actions** tab in this repository
2. Select the desired workflow:
   - **fullPage.js Update Check** - for automatic PR creation
   - **Manual fullPage.js Version Check** - for safe checking
3. Click **Run workflow**
4. Configure options as needed

## What gets updated

- `package.json`: fullPage.js dependency version and package version
- `package-lock.json`: Updated lock file
- `dist/`: Rebuilt distribution files
- **Pull Request**: Created with all changes for review

## Release Process

After the Pull Request is created:
1. **Review**: Check the changes and test if needed
2. **Merge**: Approve and merge the PR when ready
3. **Release**: Manually create a GitHub release after merging (optional)

## Branch Strategy

The automatic workflow creates new feature branches for each update:
- **Branch naming**: `update/fullpage-{version}` (e.g., `update/fullpage-4.0.33`)
- **Source**: Current main/master branch
- **Cleanup**: Branches are automatically deleted after PR merge

## Workflow Output Examples

### Successful Update
```
## ✅ Update Completed Successfully
Updated fullPage.js from ^4.0.32 to 4.0.33
New package version: 0.2.22
Pull Request created for review
```

### No Update Needed
```
## ℹ️ No Update Needed
Current fullPage.js version (^4.0.32) is up to date
Latest available version: 4.0.32
```

## Pull Request Content

The automatic workflow creates PRs with:
- **Title**: `chore: update fullPage.js to {version}`
- **Labels**: `dependencies`, `fullpage-update`, `automated`
- **Description**: Detailed changelog and instructions
- **Files**: Updated package.json, package-lock.json, and built dist files

## Benefits

The workflows ensure that vue-fullpage.js stays up-to-date with the latest fullPage.js features and bug fixes while maintaining quality control through the PR review process.

- **Automation**: Daily checks and automatic PR creation
- **Safety**: No direct pushes to main branch
- **Quality Control**: Review process for all changes
- **Transparency**: Clear documentation and labels
- **Flexibility**: Manual override options available 