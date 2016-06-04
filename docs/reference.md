
# Reference classes

####Show current CPU usage
```
cpu
```
Can also optionally take a ```data-format``` attribute of either ```bullet```, ```gauge```, or ```chart```.
e.g.
```
<div class="cpu">
  <div class="value" data-format="bullet"></div>
</div>
```

####Show current RAM usage
```
ram
```
Can also optionally take a ```data-format``` attribute of either ```bullet```, ```gauge```, or ```chart```.
e.g.
```
<div class="ram">
  <div class="value" data-format="gauge"></div>
</div>
```

####Show Free system space
```
disk
```

####Show date, time, date and time.
```
datetime
```
Can also optionally take a ```data-format``` attribute of any valid momentjs date format.
e.g.
```
<div class="datetime">
  <div class="value" data-format="MMM Do YY"></div>
</div>
```
See below.

####Show your hostname
```
hostname
```

####Show system uptime
```
uptime
```
Can also optionally take a ```data-format``` attribute of either ```seconds```, ```minutes```, or ```hours```.
e.g.
```
<div class="uptime">
    <div class="value" data-format="seconds"></div>
</div>
```
Shows uptime in seconds

#### Shell commands
```
raw-command
```

For the raw-command to work, you need to supply a ```data-command``` attribute like so:

```
<div class="raw-command">
  <span class="value" data-command="ls -l"></span>
</div>
```
Can also optionally take a ```data-format``` attribute of  ```bullet``` to style
the output of the shell command as a bullet-chart. Note that in order for this
to work, the command must return either an integer, or a string containing an integer.

## Planned tags

```
process-list
```
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

```
data-format
```

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
