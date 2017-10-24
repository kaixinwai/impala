/**
 *
 */
export function getScript(url: string) {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.src = url;
    document.body.appendChild(script);
}
