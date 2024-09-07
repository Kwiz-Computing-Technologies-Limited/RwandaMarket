library(shiny)

# Sample data (replace with your actual data)
species_data <- data.frame(
  species = c("Species A", "Species B", "Species C"),
  count = c(50, 30, 40)
)

textOutput("dynamic_text")

server <- function(input, output, session) {
  output$dynamic_text <- renderText({
    paste("You selected the year", input$year, ". In this year, we observed",
          sum(species_data$count), "occurrences across all species.")
  })
}
