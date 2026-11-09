 # Technical Notes

## 1. Biggest Docker Problem and How I Solved It

**Biggest problem: large video files (build context and GitHub push).**
When I first ran `docker build`, the build context was around 142 MB because the `src/about/` folder had two videos: the original `videoplayback.mp4` (106 MB) and `baking-process.mp4` (36 MB). This made the build slow, and GitHub rejects any file over 100 MB, so it would have blocked my push.

**Solution:** I compressed the video, kept only `baking-process.mp4` in the project, and moved the heavy original file outside the repository before pushing.

### Other issues

* **Serving the website with Nginx:** I used a multi-stage build (a Node Alpine build stage and an Nginx 1.27 Alpine runtime stage) so that the Node tools are not included in the final image, and added a `HEALTHCHECK` so the container shows as `Up (healthy)` in `docker ps` (commit `docker: add multi-stage Dockerfile with nginx and healthcheck`).
* **Image size:** The final image is about 388 MB on disk (177 MB compressed). Roughly 53 MB is the Nginx Alpine base, and most of the rest (about 158 MB) is the website's own images and video copied from `src/`.
* **Terminal output cleanup:** The output of `docker build` was cluttered, so I used `docker build --progress=plain` to get clean text for my screenshots.

## 2. Most Important Git/GitHub Lesson

**Most important lesson: `git commit` and `git push` are two different steps.**
`git commit` only saves a snapshot on my own computer, while `git push` is what publishes it to GitHub. Related to this, I learned to check file sizes before committing, because GitHub blocks files over 100 MB.

### Other lessons

* **Small, logical commits:** I split the work into commits with clear prefixes (`feat:`, `docker:`, `chore:`, `docs:`) so the history shows real progress.
* **Clean repository:** I set up `.gitignore` from the first commit to keep unnecessary files out.
* **CI feedback:** The GitHub Actions workflow shows a green checkmark on the latest commits, which confirms the Docker image builds in a clean environment.