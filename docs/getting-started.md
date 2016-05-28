# Getting Started

Before we get started on making themes, styling and the structure of the HTML, we need to understand the config.json file.

## Configuration

Configuration of meta-aspects of Fanbox are done through a config.json file located in the 'app' directory.

There are (at present) two configurable options

```
layout
```
The name of the html file to use for its layout.
```
Refresh
```
How often Fanbox should refresh and show you the newest information.


## Making your own theme

### HTML
The first thing to do is to make a copy of the html file that comes with Fanbox. This is called light.htm, make a copy and rename it to my-theme.html (or whatever else you want).

The most important thing to remember with the html is that every Fanbox class (raw-command, cpu, memory etc...) always has a child element with a class of ```value```. This is where the content gets injected into. 

If something's not display or working correctly, it's likely the structure is wrong.

### Configuration

For Fanbox to know to use your theme you'll need to head to the ```config.json``` file and change the layout value to the name of your html file.
A complete example might look like this
```
{
  "layout":"my-theme.html",
  "refresh": 2
}
```
The only thing we've changed here is what ```.html``` file to use.

Now that Fanbox is pointing to your theme, experiment to your hearts content!
See the [reference](reference.md) for more information and if something's not clear, that's a bug in the docs and you should submit an issue or make a PR!

### CSS

If you want to style your theme, make sure to point the ```<link>``` attribute in your layout file to your stylesheet.

You can style it however you want.



