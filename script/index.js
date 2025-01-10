const modelIframe = document.getElementById("model-iframe");
modelIframe.onload = iframeclick;

function iframeclick() {
    modelIframe.contentWindow.document.body.onmousedown = () => {
        let isMouseDown = true;
        const mouseDownTime = new Date().getTime();

        modelIframe.contentWindow.document.body.onmouseup = () => {
            if (isMouseDown) {
                const mouseUpTime = new Date().getTime();
                if (mouseUpTime - mouseDownTime <= 200) {
                    goToAbout();
                }
                isMouseDown = false;
            }
        };
    };
}

function goToAbout() {
    console.log("Go to About.html");
}
