const $signature = $("#signature").jSignature({
  width: 70,
  height: 70,
  lineWidth: 1,
  UndoButton: false,
});

$(document).on("keydown", (e) => {
  if (e.key === "z") {
    $signature.jSignature("reset");
  }
});

let variant = 1

$(document).on("keydown", (e) => {
  if (e.key === "s") {
    const data = $signature.jSignature("getData", "svgbase64");
    const mimeType = data[0];
    const base64Data = data[1];
    const dataURL = `data:${mimeType},${base64Data}`;
    
    const link = document.createElement('a');
    link.href = dataURL;
    link.download = `A${variant}.svg`;
    variant += 1;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
});