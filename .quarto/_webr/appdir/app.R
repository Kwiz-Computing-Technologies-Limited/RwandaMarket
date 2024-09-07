library(shiny)

ui_tariff <- fluidPage(
  (
    textInput("product_name", "Product Name"),
    textInput("hs_code", "HS Code"),
    selectInput("origin_country", "Origin Country", 
                choices = c("Rwanda", "Kenya", "Uganda", "Tanzania", "Burundi", "South Sudan")),
    selectInput("destination_country", "Destination Country", 
                choices = c("Rwanda", "Kenya", "Uganda", "Tanzania", "Burundi", "South Sudan")),
    numericInput("shipment_value", "Shipment Value (USD)", value = 0),
    numericInput("standard_tariff_rate", "Standard Tariff Rate (%)", value = 0),
    numericInput("preferential_tariff_rate", "Preferential Tariff Rate under EAC (%)", value = 0),
    textInput("certificate_of_origin_number", "Certificate of Origin Number"),
    actionButton("calculate", "Calculate Savings"),
    verbatimTextOutput("savings_output")
  )
)

server_tariff <- function(input, output, session) {
  observeEvent(input$calculate, {
    standard_duty = input$shipment_value * (input$standard_tariff_rate / 100)
    preferential_duty = input$shipment_value * (input$preferential_tariff_rate / 100)
    savings = standard_duty - preferential_duty
    
    output$savings_output <- renderText({
      paste("Estimated Tariff Savings: $", format(savings, big.mark = ",", digits = 2))
    })
  })
}

shinyApp(ui_tariff, server_tariff)
