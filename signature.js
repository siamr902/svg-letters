const $signature = $("#signature").jSignature({
  width: 100,
  height: 100,
  lineWidth: 1,
  UndoButton: false,
});

$(document).on("keydown", (e) => {
  if (e.key === "z") {
    $signature.jSignature("reset");
  }
});

let variant = 1;
variantElement = $("#variant");

const updateVariantElement = () => {
  variantElement.text(`Variant: ${variant}`);
};

let char = 'A'

$(".char-button").on("click", function() {
  char = $(this).text();
  variant = 1;
  updateVariantElement();
});

$(document).on("keydown", (e) => {
  if (e.key == "d") {
    variant -= 1;
    if (variant < 1) {
      variant = 1;
    }
    updateVariantElement();
  }
});

$(document).on("keydown", (e) => {
  if (e.key == "i") {
    variant += 1;
    updateVariantElement();
  }
});

$(document).on("keydown", (e) => {
  if (e.key === "s") {
    console.log("eadf");
    const data = $signature.jSignature("getData", "svgbase64");
    const mimeType = data[0];
    const base64Data = data[1];
    const dataURL = `data:${mimeType},${base64Data}`;

    const link = document.createElement("a");
    link.href = dataURL;
    link.download = `${char}${variant}.svg`;
    variant += 1;
    updateVariantElement();
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }
});
