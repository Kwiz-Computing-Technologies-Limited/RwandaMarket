library(shinylive)
library(here)
# system("quarto add quarto-ext/shinylive")
# in the qmd yml add:
# filters: 
# - shinylive

# use chunks {shinylive-r} to embed shiny app

update_github = function(message) {
  system("git add -A")
  system(paste0('git commit -m "', message, '"'))
  system("git push origin master:main")
}

update_github(message = "update 1st section on market analysis")