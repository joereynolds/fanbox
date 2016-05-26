# Fanbox

## Installation

```
sudo npm install electron-prebuilt -g
cd app
npm install
```

## Examples
```
<!-- Shows a horizontal bar of CPU usage formatted in percent -->
<main>
  <div class="cpu-usage">
    <div class="value" data-format="percent" data-display="bar-x"></div>
  </div>
</main>
```

## Available Tags

```disk-usage```
Shows amount of disk space remaining

```memory```
Shows current memory usage. Can show multiple processes if data-count is supplied

```datetime```
Shows date, time, date and time

```username```
Shows your username

```uptime```
Shows system uptime

```raw-command```
Executes a command in the shell and returns the result of the shell command

## Planned tags

```volume```
Shows current volume

```battery-level```
Shows the current battery level if possible

```cpu-usage```
Shows current cpu-usage

```ip```
Shows your ip

```process-list```
Shows running processes

## Data format


```data-format```

Specifies the format that the value could be in. There are several values that this can be though they are
not all applicable to every element. formats can be :

- 'bytes'     - Shows the value in bytes
- 'kilobyes'  - Shows the value in kilobytes
- 'megabytes' - Shows the value in megabytes
- 'gigabytes' - Shows the value in gigabytes
- 'percent' - Shows the value as a percentage
- 'numeric' - Used as a 'raw' way of representing the data. This is default if no data-format is specified

Dates are formattable with anything that is accepted by moment.js

- 'MMMM Do YYYY, h:mm:ss a' - Shows May 26th 2016, 4:21:48 pm
- 'dddd'                    - Shows Thursday
- "MMM Do YY"               - Shows May 26th 16
- 'YYYY [escaped] YYYY'     - Shows 2016 escaped 2016


## Data display

There are multiple ways your data can be displayed :

- 'bar-x' - Shows as a horizontal bar
- 'bar-y' - Shows as a vertical bar
- 'pie'   - Shows as a circle
