# Bing Chat in Firefox Add-on

<p align="center">
<img src="./image.jpg" alt="Bing Chat in Firefox" height="250" width="250" />
</p>

This repository contains a Firefox add-on that modifies the user-agent string sent with requests to [bing.com](http://bing.com), [msn.com](http://msn.com), [live.com](http://live.com). It modifies the user-agent string to appear as if the request is coming from the Microsoft Edge browser. Bing Chat feature is only available on Microsoft Edge.

## Installation

You can install the add-on by following these steps:

1. Clone or download this repository to your local machine.

2. Open Firefox and enter `about:debugging` in the address bar.

3. Click on "This Firefox" on the left sidebar.

4. Click on "Load Temporary Add-on".

5. In the file selection dialog, navigate to the repository directory and select the `manifest.json` file.

6. The add-on will be loaded temporarily into Firefox.

## Usage

To use the add-on:

1. Make sure the add-on is installed and enabled in Firefox.

2. Navigate to [Bing Chat](https://www.bing.com/search?q=Bing+AI&showconv=1&FORM=hpcodx).

3. The add-on will automatically modify the user-agent string to enable Bing Chat in Firefox.

## Contributing

Contributions to this add-on are welcome! If you encounter any issues or have suggestions for improvements, please feel free to open an issue or submit a pull request.

## License

This add-on is licensed under the [MIT License](LICENSE).
