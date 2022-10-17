window.onload = function () {
    // toggle variable
    let toggle = false;

    // body Tags
    const body = document.getElementsByTagName('body');

    // main grid helper node
    const config = getConfig();
    const node = document.createElement("div");
    node.className = "grid-overview";

    node.style.display = "none";
    node.style.opacity = config.opacity || "0.2";
    node.style.gap = config.gap || "40px";

    // add columns to node
    const columnLength = config.columns || 12;
    for (let i = 0; i < columnLength; i++) {
        const childNode = document.createElement("div");
        childNode.className = "grid-column";
        childNode.style["background-color"] = config["background-color"] || "gray";
        node.appendChild(childNode);
    }

    // button to toggle grid helper
    const button = document.createElement('button');
    button.innerText = "(Show / Hide) Grid";
    button.className = "gird-helper-button";

    // add grid toggle button and grid-helper to body
    if (body && body.length) {
        body[0].appendChild(button);
        body[0].appendChild(node);
    }

    button.addEventListener('click', toggleNode);

    // function to get Config
    function getConfig() {
        let config = {};
        try {
            const scriptTags = document.getElementsByTagName('script');
            for (let i = 0; i < scriptTags.length; i++) {
                const overlayConfig = scriptTags[i].innerText.replace(/\n|\r|[/]| /g, "");
                if (overlayConfig.startsWith('gridOverlay.config')) {
                    const formattedConfig = overlayConfig.replace(/'/g, '"').split('=')[1].replace(/,}/, '}')
                    config = JSON.parse(formattedConfig);
                }
            }
        } catch (e) {
            console.error(e);
        }
        return config;
    }
    // function to toggle grid helper
    function toggleNode() {
        if (toggle) {
            node.style.display = "none";
        } else {
            node.style.display = "";
        }
        toggle = !toggle;
    }
    function applyDefaultStyles() {
        node.style.position = "fixed";
        node.style.top = "0";
        node.style.left = "0";
        node.style.width = "100vw";
        node.style.height = "100vh";
        node.style.display = "grid";
        node.style["grid-auto-columns"] = "1fr";
        node.style["grid-auto-flow"] = "column";
        node.style["pointer-events"] = "none";
        button.style.position = "fixed";
        button.style.bottom = "0";
        button.style.left = "0";
    }
    applyDefaultStyles()
}