# Ticket Generator

A React and TypeScript app that lets users register for a conference and generate a styled confirmation ticket.

## What it does

- Shows a registration form
- Collects:
  - full name
  - email address
  - username
- Validates the form before submission
- Displays error messages for invalid input
- Stores submitted user data in app state
- Navigates to a confirmation ticket screen after successful submission
- Renders a ticket with attendee details and conference branding

## Main flow

1. User fills out the form.
2. The app validates the input.
3. If validation passes, the data is saved.
4. The app redirects to the confirmation page.
5. The ticket is displayed with the user’s information.

## Components

- **Form**: handles input, validation, and submission
- **Input**: reusable input field with error display
- **Conference Details**: shows event branding and date/location
- **User Details**: shows attendee information
- **Confirmation Ticket**: combines the ticket layout and content

## Purpose

This project simulates a conference ticket registration experience with a polished confirmation screen.