# Creating a .deb package

You need `electron-packager` and `electron-installer-debian` installed.

```
npm install -g electron-package electron-install-debian
```

Now run the following from the root of fanbox:

```
electron-package . --out dist/
mkdir dist/packages/
electron-installer-debian --src dist/fanbox-linux-x64/ --arch amd64 --dest dist/packages
```

That will create a `.deb` file in the `dist/packages` directory.
