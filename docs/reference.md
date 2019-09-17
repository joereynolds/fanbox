
# Reference classes

#### Show current CPU usage
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

#### Show current RAM usage
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

#### Show Free system space
```
disk
```

#### Show date, time, date and time.
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

#### Show your hostname
```
hostname
```

#### Show system uptime
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

The data-format attribute specifies the general display for an element. If one is not
specified, it should fall back to the raw output.

### Example
the ```datetime``` class uses [momentjs](http://momentjs.com) under the hood, so any momentjs format will work!

All tags can be formatted in certain ways. For instance, the ```datetime``` tag is a very flexible tag which can take a numerous amount of format types.

```
<!-- Displays '2016' -->
<div class="datetime">
  <div class="value" data-format="YYYY"></div>
</div>
```

```
<!-- Displays 'May 28th 2016' -->
<div class="datetime"
  <div class="value" data-format="MMM Do YYYY"></div>
</div>
```

### Reference

#### Charts
- chart-bar    - Displays the result as a vertical bar chart
- chart-gauge  - Displays the result as a gauge chart
- chart-bullet - Displays the result as a horizontal bar chart (bullet chart)


#### Dates
Dates are formattable with anything that is accepted by moment.js

- 'MMMM Do YYYY, h:mm:ss a' - Shows May 26th 2016, 4:21:48 pm
- 'dddd'                    - Shows Thursday
- "MMM Do YY"               - Shows May 26th 16
- 'YYYY [escaped] YYYY'     - Shows 2016 escaped 2016

#### Time
- 'seconds' - Shows the value in seconds
- 'minutes' - Shows the value in minutes
- 'hours' - Shows the value in hours

#### Filesize
- 'bytes'     - Shows the value in bytes
- 'kilobyes'  - Shows the value in kilobytes
- 'megabytes' - Shows the value in megabytes
- 'gigabytes' - Shows the value in gigabytes

#### General
- 'percent' - Shows the value as a percentage
