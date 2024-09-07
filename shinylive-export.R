

library(shinylive)
library(here)

# system("wget https://github.com/quarto-dev/quarto-cli/releases/download/v1.5.57/quarto-1.5.57-linux-amd64.deb")
# system("sudo dpkg -i quarto-1.5.57-linux-amd64.deb")
# system("quarto add coatless/quarto-webr")
# system("quarto add quarto-ext/shinylive")
# file.remove("quarto-1.5.57-linux-amd64.deb")

# in the qmd yml add:
# filters:
# - shinylive

# use chunks {shinylive-r} to embed shiny app

quarto::quarto_render(as_job = FALSE)
update_github = function(message) {
  system("git status")
  system("git add -A")
  system(paste0('git commit -m "', message, '"'))
  system("git push origin dev:dev")
}

update_github(message = "webr and shinyliver update")


