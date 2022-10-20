# grid-overlay

An overlay for frontend UI developers. It allows you to see alignment of elements on a screen.
![Example](example.png)

#### How to use

```
<script src="https://cdn.jsdelivr.net/npm/@srijan-katuwal/grid-overlay@1.0.1/index.js"></script>
```

#### Manual Configuration

```
<script src="https://cdn.jsdelivr.net/npm/@srijan-katuwal/grid-overlay@1.0.1/index.js">
    gridOverlay.config = {
      "max-width": "1245px",
      "background-color": "red",
      "opacity": "0.1",
    }`
</script>
```

#### Available configuration

| Option             | Value                                                        | Default Value |
| ------------------ | ------------------------------------------------------------ | ------------- |
| "columns"          | Number of columns (Ex: "4" or "12")                          | "12"          |
| "background-color" | Any CSS color value (Ex: "#FFFFF" or "red" or rgb(0,0,0)     | "gray"        |
| "opacity"          | Any CSS opacity value range from 0 to 1 (Ex: "0.1" or "0.7") | "0.2"         |
| "gap"              | CSS gap value (Ex: "40px" or "2rem")                         | "40px"        |
| "max-width"        | Any CSS max-width value (Ex:"1200px")                        | "100%"        |
