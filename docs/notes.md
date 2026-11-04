# Technical Notes

## Biggest Docker problem I faced and how I solved it

TODO: write this in your own words, from what actually happened to you.
Ideas that are likely true for this project (keep only what you really experienced):
- Image paths used Windows backslashes (`images\logo.png`) and spaces. They work on
  Windows but break on Nginx/Linux, so I replaced them with `/` and renamed files.
- A page linked to `home.html`, which did not exist.
- Writing a multi-stage Dockerfile and a health endpoint.

## Most important Git/GitHub lesson

TODO: write 3 to 4 sentences about what you learned (for example, small meaningful
commits, .gitignore, writing a README others can follow).
