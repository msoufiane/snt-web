#!/bin/sh
# Check if we actually have commits to push
echo "Running SENTAD Web pre-push checks. Run git push with --no-verify flag to bypass."


# branch=`git rev-parse --abbrev-ref HEAD`
# isRemote=`git config "branch.$branch.remote"`
# if [ -n "$isRemote" ]; then
#   commits=`git log @{u}..`
# else
#   commits=`git log origin..`
# fi
#
# if [ -z "$commits" ]; then
#   exit 0
# fi
#
# echo "Running Rocket Web pre-flight checks. Run git push with --no-verify flag to bypass."
yarn run test
