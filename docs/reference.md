# Reference classes

```cpu```
Shows current CPU usage

```memory```
Shows current RAM usage

```datetime```
Shows date, time, date and time.

```username```
Shows your hostname

```uptime```
Shows system uptime
Can also optionall take a ```data-format``` attribute of either ```seconds```, ```minutes```, or ```hours```.
e.g.
```
<div class="uptime" data-format="seconds"></div>
```
Shows uptime in seconds

```raw-command```
Executes a command in the shell and returns the result of the shell command

```disk-usage```
DOCUMENT THIS. I have no idea what it does...

## Planned tags

```process-list```
Shows running processes

## Data format

All tags can be formatted in certain ways. For instance, the ```datetime``` tag is a very flexible tag which can take a numerous amount of format types.

```
<!-- Displays '2016' -->
<div class="datetime" data-format="YYYY"></div>
```

```
<!-- Displays 'May 28th 2016' -->
<div class="datetime" data-format="MMM Do YYYY"></div>
```

the ```datetime``` class uses [momentjs](http://momentjs.com) under the hood, so any momentjs format will work!

### Reference

Here's a complete list of all the ```data-format```s we've built into Fanbox.

```data-format```

Specifies the format that the value could be in. There are several values that this can be though they are
not all applicable to every element. formats can be :

- 'bytes'     - Shows the value in bytes
- 'kilobyes'  - Shows the value in kilobytes
- 'megabytes' - Shows the value in megabytes
- 'gigabytes' - Shows the value in gigabytes
- 'percent' - Shows the value as a percentage
- 'seconds' - Shows the value in seconds
- 'minutes' - Shows the value in minutes
- 'hours' - Shows the value in hours

Dates are formattable with anything that is accepted by moment.js

- 'MMMM Do YYYY, h:mm:ss a' - Shows May 26th 2016, 4:21:48 pm
- 'dddd'                    - Shows Thursday
- "MMM Do YY"               - Shows May 26th 16
- 'YYYY [escaped] YYYY'     - Shows 2016 escaped 2016
