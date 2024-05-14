# Reviewer Assignment Tool

## Description

This project, the Reviewer Assignment Tool, is designed to automate the selection of reviewers for projects named Monika and Symon. It uses cryptographic randomness to ensure fair selection from a predefined list of reviewers, and notifies the selected reviewers via a Microsoft Teams webhook.

## Features

- Random selection of reviewers from a fixed list.
- Notification of selection results through Microsoft Teams.
- Environment variables for secure webhook integration.

## Installation

Install the necessary dependencies by running the following command:

```bash
npm install
```

## Usage

To run the tool, simply execute:

```bash
node index.js
```

This will select reviewers randomly and post the assignment details to a configured Microsoft Teams channel via a webhook.

## Configuration

Ensure that the TEAMS_WEBHOOK_URL environment variable is set to your Microsoft Teams webhook URL before running the script.

## Contributing

We welcome contributions from the community. Before you contribute, please read through the project documentation. If you wish to contribute, please fork the repository and submit a pull request.

- Fork the Project
- Create your Feature Branch (git checkout -b feature/AmazingFeature)
- Commit your Changes (git commit -m 'Add some AmazingFeature')
- Push to the Branch (git push origin feature/AmazingFeature)
- Open a Pull Request

# License

This project is licensed under the ISC License. See the LICENSE file in the repository for more information.
