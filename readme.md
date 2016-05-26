# Fanbox

## Installation

```sudo npm install electron-prebuilt -g
cd app
npm install```


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


```cpu-usage```
Shows current cpu-usage

```disk-usage```
Shows amount of disk space remaining

```process-list```
Shows an amount of processes specified by data-count

```battery-level```
Shows the current battery level if possible

```memory```
Shows current memory usage. Can show multiple processes if data-count is supplied

```volume```
Shows current volume

```time```
Shows current time

```date```
Shows current date in data-format format

```datetime```
Shows date and time

```username```
Shows your username

```hostname```
Shows your hostname

```ip```
Shows your ip

```raw-command```
Executes a command in the shell and returns the result of the shell command


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
- 'yy/mm/dd' etc... - Used to specify a date format
- '24-hour' - Used on time and datetime to specify a 24 hour time format
- '12-hour' - Used on time and datetime to specify a 12 hour time format

## Data display

There are multiple ways your data can be displayed :

- 'bar-x' - Shows as a horizontal bar
- 'bar-y' - Shows as a vertical bar
- 'pie'   - Shows as a circle

