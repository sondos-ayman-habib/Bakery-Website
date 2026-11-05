# Technical Notes

## Biggest Docker problem I faced and how I solved it

The biggest problem was the size of the project. When I built the image, Docker
reported a build context of about 142 MB, which was much larger than expected.
I found that the `src/about/` folder contained two videos: the compressed
`baking-process.mp4` (36 MB) and the original `videoplayback.mp4` (106 MB).
The original file made the build slow and GitHub rejects files larger than 100 MB,
so it would have blocked my push.

I solved it by compressing the video, keeping only `baking-process.mp4` inside
`src/`, and moving the original file outside the repository. After that the build
context became smaller and the push to GitHub worked.

A smaller issue was the terminal output getting scrambled during `docker build`.
I used `docker build --progress=plain` to get clean, readable output for screenshots.

## Most important Git/GitHub lesson

Git works in two steps: `git commit` only saves my work on my own computer, and
`git push` is what publishes it to GitHub. I also learned that GitHub blocks files
over 100 MB, so large files must be checked before the first commit. Finally,
I learned to make small commits with clear messages (feat, docker, chore, docs)
so the history shows real progress. 