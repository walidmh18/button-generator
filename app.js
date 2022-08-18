/* eslint-disable */
hljs.highlightAll();

let firstPage = document.querySelector(".firstPage");
let secondPage = document.querySelector(".secondPage");
function moveToSecondPage() {
  firstPage.style.display = "none";
  secondPage.style.display = "block";
}
const htmlCodePreview = document.querySelector(".htmlCodePreview");
const cssCodePreview = document.querySelector(".cssCodePreview");

const btn = document.getElementById("MyBtn");

const htmlAttributes = {
  disabled: "",
  name: "",
  type: "",
  innerText: "",
};
const cssStyles = {
  opening: ".MyBtn{",
  color: "color: #ffffff;",
  fontSize: "",
  fontWeight: "",
  textShadow: "",
  background: "background: #72a1cb;",
  padding: "padding: 10px;",
  paddingTop: "",
  paddingRight: "",
  paddingBottom: "",
  paddingLeft: "",
  borderRadius: "border-radius: 5px;",
  borderTopRightRadius: "",
  borderBottomRightRadius: "",
  borderBottomLeftRadius: "",
  borderTopLeftRadius: "",
  border: "",
  borderTop: "",
  borderRight: "",
  borderBottom: "",
  borderLeft: "",
  boxShadow: "",
  closing: "}",
};
htmlCodePreview.innerHTML = `&lt;button class=&quot;MyBtn&quot; ${htmlAttributes.type} ${htmlAttributes.name}&gt; ${htmlAttributes.innerText}&lt;/button&gt;`;
const disabled = document.querySelector("#disabled");
disabled.addEventListener("input", () => {
  if (disabled.checked) {
    btn.setAttribute("disabled", "");
    htmlAttributes.disabled = "disabled";
    htmlCodePreview.innerHTML = `&lt;button class=&quot;MyBtn&quot; disabled ${htmlAttributes.type} ${htmlAttributes.name}&gt; ${htmlAttributes.innerText}&lt;/button&gt;`;
    hljs.highlightAll();
  } else {
    btn.removeAttribute("disabled");
    htmlAttributes.disabled = "";
    htmlCodePreview.innerHTML = `&lt;button class=&quot;MyBtn&quot; ${htmlAttributes.type} ${htmlAttributes.name}&gt; ${htmlAttributes.innerText}&lt;/button&gt;`;
    hljs.highlightAll();
  }
});

const name = document.querySelector("#name");
name.addEventListener("input", () => {
  btn.setAttribute("name", name.value);
  if (name.value != "") {
    htmlAttributes.name = `name="${name.value}"`;
  } else {
    htmlAttributes.name = "";
  }
  htmlCodePreview.innerHTML = `&lt;button class=&quot;MyBtn&quot; ${htmlAttributes.type} ${htmlAttributes.name} &gt; ${htmlAttributes.innerText}&lt;/button&gt;`;
  hljs.highlightAll();
});

const type = document.querySelector("#type");
type.addEventListener("input", () => {
  btn.setAttribute("type", type.value);
  htmlAttributes.type = `type="${type.value}"`;
  htmlCodePreview.innerHTML = `&lt;button class=&quot;MyBtn&quot; ${htmlAttributes.type} ${htmlAttributes.name} &gt; ${htmlAttributes.innerText}&lt;/button&gt;`;
  hljs.highlightAll();
});

const text = document.querySelector("#innerText");
btn.innerHTML = text.value;
htmlAttributes.innerText = text.value;
htmlCodePreview.innerHTML = `&lt;button class=&quot;MyBtn&quot; ${htmlAttributes.type} ${htmlAttributes.name} &gt; ${htmlAttributes.innerText}&lt;/button&gt;`;

text.addEventListener("input", () => {
  btn.innerHTML = text.value;
  htmlAttributes.innerText = text.value;
  htmlCodePreview.innerHTML = `&lt;button class=&quot;MyBtn&quot; ${htmlAttributes.type} ${htmlAttributes.name} &gt; ${htmlAttributes.innerText}&lt;/button&gt;`;
  hljs.highlightAll();
});

const colorPicker = document.querySelector("#colorPicker");
document.querySelector(".colorInput").style.background = colorPicker.value;
btn.style.color = colorPicker.value;
colorPicker.addEventListener("input", () => {
  btn.style.color = colorPicker.value;
  document.querySelector(".colorInput").style.background = colorPicker.value;
  cssStyles.color = `color: ${colorPicker.value};`;
});

const fontSize = document.querySelector("#fontSize");
const fontSizeIndicator = document.querySelector("#fontSizeIndicator");
fontSizeIndicator.innerHTML = fontSize.value + "px";
fontSize.addEventListener("input", () => {
  btn.style.fontSize = fontSize.value + "px";
  fontSizeIndicator.innerHTML = fontSize.value + "px";
  cssStyles.fontSize = `font-size: ${fontSize.value}px;`;
});

const fontWeight = document.querySelector("#fontweight");
fontWeight.addEventListener("input", () => {
  btn.style.fontWeight = fontWeight.value;
  cssStyles.fontWeight = `font-weight: ${fontWeight.value}`;
});

const textShadow = document.querySelector("#textShadow");
const textShadowSec = document.querySelector(".textShadow");
textShadow.addEventListener("input", () => {
  if (textShadow.checked) {
    const textshX = document.querySelector("#textshX");
    const textshY = document.querySelector("#textshY");
    const textshBlur = document.querySelector("#textshBlur");
    const textshColor = document.querySelector("#textshColor");

    let textShadowValues = {
      X: textshX.value + "px",
      Y: textshY.value + "px",
      Blur: textshBlur.value + "px",
      Color: textshColor.value,
    };

    btn.style.textShadow = `${textShadowValues.X} ${textShadowValues.Y} ${textShadowValues.Blur} ${textShadowValues.Color}`;
    textShadowSec.classList.remove("disabled");

    const textshX_ = document.querySelector("#textshX_");
    textshX_.innerHTML = textShadowValues.X;
    textshX.addEventListener("input", () => {
      textShadowValues.X = textshX.value + "px";
      textshX_.innerHTML = textShadowValues.X;
      btn.style.textShadow = `${textShadowValues.X} ${textShadowValues.Y} ${textShadowValues.Blur} ${textShadowValues.Color}`;
      cssStyles.textShadow = `text-shadow: ${textShadowValues.X} ${textShadowValues.Y} ${textShadowValues.Blur} ${textShadowValues.Color};`;
    });

    const textshY_ = document.querySelector("#textshY_");
    textshY_.innerHTML = textShadowValues.Y;
    textshY.addEventListener("input", () => {
      textShadowValues.Y = textshY.value + "px";
      textshY_.innerHTML = textShadowValues.Y;
      btn.style.textShadow = `${textShadowValues.X} ${textShadowValues.Y} ${textShadowValues.Blur} ${textShadowValues.Color}`;
      cssStyles.textShadow = `text-shadow: ${textShadowValues.X} ${textShadowValues.Y} ${textShadowValues.Blur} ${textShadowValues.Color};`;
    });

    const textshXBlurInd = document.querySelector("#textshBlur_");
    textshXBlurInd.innerHTML = textShadowValues.Blur;
    textshBlur.addEventListener("input", () => {
      textShadowValues.Blur = textshBlur.value + "px";
      textshXBlurInd.innerHTML = textShadowValues.Blur;
      btn.style.textShadow = `${textShadowValues.X} ${textShadowValues.Y} ${textShadowValues.Blur} ${textShadowValues.Color}`;
      cssStyles.textShadow = `text-shadow: ${textShadowValues.X} ${textShadowValues.Y} ${textShadowValues.Blur} ${textShadowValues.Color};`;
    });

    const textshColorPreview = document.querySelector("#textshColorPreview");
    textshColorPreview.style.background = textShadowValues.Color;
    textshColor.addEventListener("input", () => {
      textShadowValues.Color = textshColor.value;
      btn.style.textShadow = `${textShadowValues.X} ${textShadowValues.Y} ${textShadowValues.Blur} ${textShadowValues.Color}`;
      textshColorPreview.style.background = textShadowValues.Color;
      cssStyles.textShadow = `text-shadow: ${textShadowValues.X} ${textShadowValues.Y} ${textShadowValues.Blur} ${textShadowValues.Color};`;
    });
  } else {
    textShadowSec.classList.add("disabled");
    btn.style.textShadow = "none";
  }
});

const bgcolor = document.querySelector("#bgcolor");
const bgcolorPreview = document
  .querySelector('.colorPickerPreview[for="bgcolor"]')
  .querySelector("div");
bgcolorPreview.style.background = bgcolor.value;
btn.style.background = bgcolor.value;
bgcolor.addEventListener("input", () => {
  if (!bgGradient.checked) {
    bgcolorPreview.style.background = bgcolor.value;
    btn.style.background = bgcolor.value;
    cssStyles.background = `background: ${bgcolor.value};`;
  }
});

const bgGradient = document.querySelector("#bgGradient");
const bgGradientForm = document.querySelector("#bgGradientForm");
bgGradient.addEventListener("input", () => {
  if (bgGradient.checked) {
    bgGradientForm.classList.remove("disabled");
    bgcolor.parentElement.style.textDecoration =
      "line-through #72a1cb solid 3px";
    const color1 = document.getElementById("bgColor1");
    const color2 = document.getElementById("bgColor2");
    const direction = document.getElementById("graidentDir");
    let bgGradientValues = {
      color1: color1.value,
      color2: color2.value,
      direction: direction.value + "deg",
    };
    const color1Preview = document.querySelector("#color1Preview");
    const color2Preview = document.querySelector("#color2Preview");
    const gradientDir_ = document.querySelector("#gradientDir_");
    gradientDir_.innerHTML = bgGradientValues.direction;
    color1Preview.style.background = bgGradientValues.color1;
    color2Preview.style.background = bgGradientValues.color2;
    color1.addEventListener("input", () => {
      bgGradientValues.color1 = color1.value;
      btn.style.background = `linear-gradient(${bgGradientValues.direction}, ${bgGradientValues.color1} , ${bgGradientValues.color2})`;
      cssStyles.background = `background: linear-gradient(${bgGradientValues.direction}, ${bgGradientValues.color1} , ${bgGradientValues.color2});`;
      color1Preview.style.background = bgGradientValues.color1;
    });
    color2.addEventListener("input", () => {
      bgGradientValues.color2 = color2.value;
      btn.style.background = `linear-gradient(${bgGradientValues.direction}, ${bgGradientValues.color1} , ${bgGradientValues.color2})`;
      color2Preview.style.background = bgGradientValues.color2;
      cssStyles.background = `background: linear-gradient(${bgGradientValues.direction}, ${bgGradientValues.color1} , ${bgGradientValues.color2});`;
    });
    direction.addEventListener("input", () => {
      bgGradientValues.direction = direction.value + "deg";
      btn.style.background = `linear-gradient(${bgGradientValues.direction}, ${bgGradientValues.color1} , ${bgGradientValues.color2})`;
      cssStyles.background = `background: linear-gradient(${bgGradientValues.direction}, ${bgGradientValues.color1} , ${bgGradientValues.color2});`;
      gradientDir_.innerHTML = bgGradientValues.direction;
    });
    btn.style.background = `linear-gradient(${bgGradientValues.direction}, ${bgGradientValues.color1} , ${bgGradientValues.color2})`;
    cssStyles.background = `background: linear-gradient(${bgGradientValues.direction}, ${bgGradientValues.color1} , ${bgGradientValues.color2});`;
  } else {
    bgGradientForm.classList.add("disabled");
    bgcolor.parentElement.style.textDecoration = "none";
    btn.style.background = bgcolor.value;
    cssStyles.background = `background: ${bgcolor.value};`;
  }
});

const padding = document.getElementById("padding");
document.querySelector("#padding_").innerHTML = padding.value + "px";
btn.style.padding = padding.value + "px";
padding.addEventListener("input", () => {
  if (!detailedPaddings.checked) {
    document.querySelector("#padding_").innerHTML = padding.value + "px";
    btn.style.padding = padding.value + "px";
    cssStyles.padding = `padding: ${padding.value}px;`;
  }
});

const secondaryPaddingSec = document.querySelector(".secondaryPadding");
const detailedPaddings = document.getElementById("detailedPaddings");
const paddingTop = document.getElementById("paddingTop");
const paddingRight = document.getElementById("paddingRight");
const paddingBottom = document.getElementById("paddingBottom");
const paddingLeft = document.getElementById("paddingLeft");

document.getElementById("paddingTop_").innerHTML = paddingTop.value + "px";
document.getElementById("paddingLeft_").innerHTML = paddingLeft.value + "px";
document.getElementById("paddingRight_").innerHTML = paddingRight.value + "px";
document.getElementById("paddingBottom_").innerHTML =
  paddingBottom.value + "px";

detailedPaddings.addEventListener("input", () => {
  if (detailedPaddings.checked) {
    secondaryPaddingSec.classList.remove("disabled");
    padding.parentElement.style.textDecoration =
      "line-through #72a1cb solid 3px";
    cssStyles.padding = "";

    paddingTop.addEventListener("input", () => {
      btn.style.paddingTop = paddingTop.value + "px";
      document.getElementById("paddingTop_").innerHTML =
        paddingTop.value + "px";
      cssStyles.paddingTop = `padding-top: ${paddingTop.value}px;`;
    });
    paddingRight.addEventListener("input", () => {
      btn.style.paddingRight = paddingRight.value + "px";
      document.getElementById("paddingRight_").innerHTML =
        paddingRight.value + "px";
      cssStyles.paddingRight = `padding-right: ${paddingRight.value}px;`;
    });
    paddingBottom.addEventListener("input", () => {
      btn.style.paddingBottom = paddingBottom.value + "px";
      document.getElementById("paddingBottom_").innerHTML =
        paddingBottom.value + "px";
      cssStyles.paddingBottom = `padding-bottom: ${paddingBottom.value}px;`;
    });
    paddingLeft.addEventListener("input", () => {
      btn.style.paddingLeft = paddingLeft.value + "px";
      document.getElementById("paddingLeft_").innerHTML =
        paddingLeft.value + "px";
      cssStyles.paddingLeft = `padding-left: ${paddingLeft.value}px;`;
    });
  } else {
    secondaryPaddingSec.classList.add("disabled");
    padding.parentElement.style.textDecoration = "none";
    btn.style.padding = padding.value + "px";
    cssStyles.padding = `padding: ${padding.value}px;`;
    cssStyles.paddingTop = "";
    cssStyles.paddingRight = "";
    cssStyles.paddingBottom = "";
    cssStyles.paddingLeft = "";
  }
});

const detailedBorderRadius = document.getElementById("detailedBorderRadius");
const borderRadius = document.querySelector("#borderRadius");
const borderRadiusPreview = document.querySelector("#borderRadius_");
btn.style.borderRadius = borderRadius.value + "px";
borderRadiusPreview.innerHTML = borderRadius.value + "px";
borderRadius.addEventListener("input", () => {
  if (!detailedBorderRadius.checked) {
    btn.style.borderRadius = borderRadius.value + "px";
    borderRadiusPreview.innerHTML = borderRadius.value + "px";
    cssStyles.borderRadius = `border-radius: ${borderRadius.value}px;`;
  }
});
const secondaryBR = document.querySelector(".secondaryBR");
detailedBorderRadius.addEventListener("input", () => {
  if (detailedBorderRadius.checked) {
    secondaryBR.classList.remove("disabled");
    borderRadius.parentElement.style.textDecoration =
      "line-through #72a1cb solid 3px";
    cssStyles.borderRadius = "";

    // btn.style.borderRadius = 'unset'

    const borderRadiusTopRight = document.getElementById(
      "borderRadiusTopRight"
    );
    const borderRadiusBottomRight = document.getElementById(
      "borderRadiusBottomRight"
    );
    const borderRadiusBottomLeft = document.getElementById(
      "borderRadiusBottomLeft"
    );
    const borderRadiusTopLeft = document.getElementById("borderRadiusTopLeft");

    let borderRadiusValues = {
      tr: borderRadiusTopRight.value + "px",
      br: borderRadiusBottomRight.value + "px",
      bl: borderRadiusBottomLeft.value + "px",
      tl: borderRadiusTopLeft.value + "px",
    };
    document.getElementById("borderRadiusTopRight_").innerHTML =
      borderRadiusValues.tr;
    borderRadiusTopRight.addEventListener("input", () => {
      borderRadiusValues.tr = borderRadiusTopRight.value + "px";
      btn.style.borderTopRightRadius = borderRadiusValues.tr;
      document.getElementById("borderRadiusTopRight_").innerHTML =
        borderRadiusValues.tr;
      cssStyles.borderTopRightRadius = `border-top-right-radius: ${borderRadiusValues.tr};`;
    });
    document.getElementById("borderRadiusBottomRight_").innerHTML =
      borderRadiusValues.br;
    borderRadiusBottomRight.addEventListener("input", () => {
      borderRadiusValues.br = borderRadiusBottomRight.value + "px";
      btn.style.borderBottomRightRadius = borderRadiusValues.br;
      document.getElementById("borderRadiusBottomRight_").innerHTML =
        borderRadiusValues.br;
      cssStyles.borderBottomRightRadius = `border-bottom-right-radius: ${borderRadiusValues.br};`;
    });
    document.getElementById("borderRadiusBottomLeft_").innerHTML =
      borderRadiusValues.bl;
    borderRadiusBottomLeft.addEventListener("input", () => {
      borderRadiusValues.bl = borderRadiusBottomLeft.value + "px";
      btn.style.borderBottomLeftRadius = borderRadiusValues.bl;
      document.getElementById("borderRadiusBottomLeft_").innerHTML =
        borderRadiusValues.bl;
      cssStyles.borderBottomLeftRadius = `border-bottom-left-radius: ${borderRadiusValues.bl};`;
    });
    document.getElementById("borderRadiusTopLeft_").innerHTML =
      borderRadiusValues.tl;
    borderRadiusTopLeft.addEventListener("input", () => {
      borderRadiusValues.tl = borderRadiusTopLeft.value + "px";
      btn.style.borderTopLeftRadius = borderRadiusValues.tl;
      document.getElementById("borderRadiusTopLeft_").innerHTML =
        borderRadiusValues.tl;
      cssStyles.borderTopLeftRadius = `border-top-left-radius: ${borderRadiusValues.tl};`;
    });
  } else {
    secondaryBR.classList.add("disabled");
    borderRadius.parentElement.style.textDecoration = "none";
    btn.style.borderRadius = borderRadius.value + "px";
    cssStyles.borderRadius = `border-radius: ${borderRadius.value}px;`;
    cssStyles.borderTopRightRadius = "";
    cssStyles.borderBottomRightRadius = "";
    cssStyles.borderBottomLeftRadius = "";
    cssStyles.borderTopLeftRadius = "";
  }
});

const borderColor = document.getElementById("borderColor");
const borderWidth = document.getElementById("borderWidth");
const borderStyle = document.getElementById("borderStyle");

const borderColorPreview = document.getElementById("borderColor_");
const borderWidthPreview = document.getElementById("borderWidth_");
let borderValues = {
  color: borderColor.value,
  width: borderWidth.value + "px",
  style: borderStyle.value,
};
borderColorPreview.style.background = borderValues.color;
borderWidthPreview.innerHTML = borderValues.width;

borderColor.addEventListener("input", () => {
  borderValues.color = borderColor.value;
  borderColorPreview.style.background = borderValues.color;
  btn.style.border = `${borderValues.color} ${borderValues.width} ${borderValues.style}`;
  cssStyles.border = `border: ${borderValues.color} ${borderValues.width} ${borderValues.style};`;
});
borderWidth.addEventListener("input", () => {
  borderValues.width = borderWidth.value + "px";
  borderWidthPreview.innerHTML = borderValues.width;
  btn.style.border = `${borderValues.color} ${borderValues.width} ${borderValues.style}`;
  cssStyles.border = `border: ${borderValues.color} ${borderValues.width} ${borderValues.style};`;
});
borderStyle.addEventListener("input", () => {
  borderValues.style = borderStyle.value;
  btn.style.border = `${borderValues.color} ${borderValues.width} ${borderValues.style}`;
  cssStyles.border = `border: ${borderValues.color} ${borderValues.width} ${borderValues.style};`;
});

const detailedBorder = document.getElementById("detailedBorder");
const secondaryBorder = document.querySelector(".secondaryBorder");
detailedBorder.addEventListener("input", () => {
  if (detailedBorder.checked) {
    cssStyles.border = "";
    secondaryBorder.classList.remove("disabled");
    detailedBorder.parentElement.previousElementSibling.style.textDecoration =
      "line-through #72a1cb solid 3px";
    // variables
    const borderTopColor = document.getElementById("borderTopColor");
    const borderTopColorPreview = document.getElementById(
      "borderTopColorPreview"
    );
    const borderTopWidth = document.getElementById("borderTopWidth");
    const borderTopWidthPreview = document.getElementById("borderTopWidth_");
    const borderTopStyle = document.getElementById("borderTopStyle");

    // values object
    let borderTopValues = {
      color: borderTopColor.value,
      width: borderTopWidth.value + "px",
      style: borderTopStyle.value,
    };

    // defaults
    borderTopColorPreview.style.background = borderTopValues.color;
    btn.style.borderTop = `${borderTopValues.color} ${borderTopValues.width} ${borderTopValues.style}`;
    borderTopWidthPreview.innerHTML = borderTopValues.width;

    // dynamic
    borderTopColor.addEventListener("input", () => {
      borderTopValues.color = borderTopColor.value;
      borderTopColorPreview.style.background = borderTopValues.color;
      btn.style.borderTop = `${borderTopValues.color} ${borderTopValues.width} ${borderTopValues.style}`;
      cssStyles.borderTop = `border-top: ${borderTopValues.color} ${borderTopValues.width} ${borderTopValues.style};`;
    });
    borderTopWidth.addEventListener("input", () => {
      borderTopValues.width = borderTopWidth.value + "px";
      borderTopWidthPreview.innerHTML = borderTopValues.width;
      btn.style.borderTop = `${borderTopValues.color} ${borderTopValues.width} ${borderTopValues.style}`;
      cssStyles.borderTop = `border-top: ${borderTopValues.color} ${borderTopValues.width} ${borderTopValues.style};`;
    });
    borderTopStyle.addEventListener("input", () => {
      borderTopValues.style = borderTopStyle.value;
      btn.style.borderTop = `${borderTopValues.color} ${borderTopValues.width} ${borderTopValues.style}`;
      cssStyles.borderTop = `border-top: ${borderTopValues.color} ${borderTopValues.width} ${borderTopValues.style};`;
    });

    // variables
    const borderRightColor = document.getElementById("borderRightColor");
    const borderRightWidth = document.getElementById("borderRightWidth");
    const borderRightStyle = document.getElementById("borderRightStyle");
    const borderRightColorPreview = document.getElementById(
      "borderRightColorPreview"
    );
    const borderRightWidthPreview =
      document.getElementById("borderRightWidth_");

    // values object
    let borderRightValues = {
      color: borderRightColor.value,
      width: borderRightWidth.value + "px",
      style: borderRightStyle.value,
    };

    // defaults
    borderRightColorPreview.style.background = borderRightValues.color;
    btn.style.borderRight = `${borderRightValues.color} ${borderRightValues.width} ${borderRightValues.style}`;
    borderRightWidthPreview.innerHTML = borderRightValues.width;

    // dynamic
    borderRightColor.addEventListener("input", () => {
      borderRightValues.color = borderRightColor.value;
      borderRightColorPreview.style.background = borderRightValues.color;
      btn.style.borderRight = `${borderRightValues.color} ${borderRightValues.width} ${borderRightValues.style}`;
      cssStyles.borderRight = `border-right: ${borderRightValues.color} ${borderRightValues.width} ${borderRightValues.style};`;
    });
    borderRightWidth.addEventListener("input", () => {
      borderRightValues.width = borderRightWidth.value + "px";
      borderRightWidthPreview.innerHTML = borderRightValues.width;
      btn.style.borderRight = `${borderRightValues.color} ${borderRightValues.width} ${borderRightValues.style}`;
      cssStyles.borderRight = `border-right: ${borderRightValues.color} ${borderRightValues.width} ${borderRightValues.style};`;
    });
    borderRightStyle.addEventListener("input", () => {
      borderRightValues.style = borderRightStyle.value;
      btn.style.borderRight = `${borderRightValues.color} ${borderRightValues.width} ${borderRightValues.style}`;
      cssStyles.borderRight = `border-right: ${borderRightValues.color} ${borderRightValues.width} ${borderRightValues.style};`;
    });

    // variables
    const borderBottomColor = document.getElementById("borderBottomColor");
    const borderBottomWidth = document.getElementById("borderBottomWidth");
    const borderBottomStyle = document.getElementById("borderBottomStyle");
    const borderBottomColorPreview = document.getElementById(
      "borderBottomColorPreview"
    );
    const borderBottomWidthPreview =
      document.getElementById("borderBottomWidth_");

    // values object
    let borderBottomValues = {
      color: borderBottomColor.value,
      width: borderBottomWidth.value + "px",
      style: borderBottomStyle.value,
    };

    // defaults
    borderBottomColorPreview.style.background = borderBottomValues.color;
    btn.style.borderBottom = `${borderBottomValues.color} ${borderBottomValues.width} ${borderBottomValues.style}`;
    borderBottomWidthPreview.innerHTML = borderBottomValues.width;
    // dynamic

    borderBottomColor.addEventListener("input", () => {
      borderBottomValues.color = borderBottomColor.value;
      borderBottomColorPreview.style.background = borderBottomValues.color;
      btn.style.borderBottom = `${borderBottomValues.color} ${borderBottomValues.width} ${borderBottomValues.style}`;
      cssStyles.borderBottom = `border-bottom: ${borderBottomValues.color} ${borderBottomValues.width} ${borderBottomValues.style};`;
    });
    borderBottomWidth.addEventListener("input", () => {
      borderBottomValues.width = borderBottomWidth.value + "px";
      borderBottomWidthPreview.innerHTML = borderBottomValues.width;
      btn.style.borderBottom = `${borderBottomValues.color} ${borderBottomValues.width} ${borderBottomValues.style}`;
      cssStyles.borderBottom = `border-bottom: ${borderBottomValues.color} ${borderBottomValues.width} ${borderBottomValues.style};`;
    });
    borderBottomStyle.addEventListener("input", () => {
      borderBottomValues.style = borderBottomStyle.value;
      btn.style.borderBottom = `${borderBottomValues.color} ${borderBottomValues.width} ${borderBottomValues.style}`;
      cssStyles.borderBottom = `border-bottom: ${borderBottomValues.color} ${borderBottomValues.width} ${borderBottomValues.style};`;
    });

    // variables
    const borderLeftColor = document.getElementById("borderLeftColor");
    const borderLeftWidth = document.getElementById("borderLeftWidth");
    const borderLeftStyle = document.getElementById("borderLeftStyle");
    const borderLeftColorPreview = document.getElementById(
      "borderLeftColorPreview"
    );
    const borderLeftWidthPreview = document.getElementById("borderLeftWidth_");
    // values object
    let borderLeftValues = {
      color: borderLeftColor.value,
      width: borderLeftWidth.value + "px",
      style: borderLeftStyle.value,
    };

    // defaults
    borderLeftColorPreview.style.background = borderLeftValues.color;
    btn.style.borderLeft = `${borderLeftValues.color} ${borderLeftValues.width} ${borderLeftValues.style}`;
    borderLeftWidthPreview.innerHTML = borderLeftValues.width;
    // dynamic

    borderLeftColor.addEventListener("input", () => {
      borderLeftValues.color = borderLeftColor.value;
      borderLeftColorPreview.style.background = borderLeftValues.color;
      btn.style.borderLeft = `${borderLeftValues.color} ${borderLeftValues.width} ${borderLeftValues.style}`;
      cssStyles.borderLeft = `border-left: ${borderLeftValues.color} ${borderLeftValues.width} ${borderLeftValues.style};`;
    });
    borderLeftWidth.addEventListener("input", () => {
      borderLeftValues.width = borderLeftWidth.value + "px";
      borderLeftWidthPreview.innerHTML = borderLeftValues.width;
      btn.style.borderLeft = `${borderLeftValues.color} ${borderLeftValues.width} ${borderLeftValues.style}`;
      cssStyles.borderLeft = `border-left: ${borderLeftValues.color} ${borderLeftValues.width} ${borderLeftValues.style};`;
    });
    borderLeftStyle.addEventListener("input", () => {
      borderLeftValues.style = borderLeftStyle.value;
      btn.style.borderLeft = `${borderLeftValues.color} ${borderLeftValues.width} ${borderLeftValues.style}`;
      cssStyles.borderLeft = `border-left: ${borderLeftValues.color} ${borderLeftValues.width} ${borderLeftValues.style};`;
    });
  } else {
    secondaryBorder.classList.add("disabled");
    btn.style.border = `${borderValues.color} ${borderValues.width} ${borderValues.style}`;
    detailedBorder.parentElement.previousElementSibling.style.textDecoration =
      "none";
    cssStyles.border = `border: ${borderValues.color} ${borderValues.width} ${borderValues.style};`;
    cssStyles.borderTop = "";
    cssStyles.borderRight = "";
    cssStyles.borderBottom = "";
    cssStyles.borderLeft = "";
  }
});

const boxShadow = document.querySelector("#boxShadow");
const boxShadowSec = document.querySelector(".boxShadow");

const boxShadowX = document.getElementById("boxshX");
const boxShadowY = document.getElementById("boxshY");
const boxShadowBlur = document.getElementById("boxshBlur");
const boxShadowColor = document.getElementById("boxshColor");
const boxShadowAlpha = document.getElementById("boxshAlpha");
const transparency = { trans: "" };

let boxShadowValues = {
  x: boxShadowX.value + "px",
  y: boxShadowY.value + "px",
  blur: boxShadowBlur.value + "px",
  color: boxShadowColor.value,
  transparency: Math.round(boxShadowAlpha.value * 2.55).toString(16),
};
boxShadow.addEventListener("input", () => {
  if (boxShadow.checked) {
    boxShadowSec.classList.remove("disabled");
    boxShadowX.addEventListener("input", () => {
      boxShadowValues.x = boxShadowX.value + "px";
      btn.style.boxShadow = `${boxShadowValues.x} ${boxShadowValues.y} ${
        boxShadowValues.blur
      } ${boxShadowValues.color + boxShadowValues.transparency}`;
      cssStyles.boxShadow = `box-shadow: ${boxShadowValues.x} ${
        boxShadowValues.y
      } ${boxShadowValues.blur} ${
        boxShadowValues.color + boxShadowValues.transparency
      };`;
    });
    boxShadowY.addEventListener("input", () => {
      boxShadowValues.y = boxShadowY.value + "px";
      btn.style.boxShadow = `${boxShadowValues.x} ${boxShadowValues.y} ${
        boxShadowValues.blur
      } ${boxShadowValues.color + boxShadowValues.transparency}`;
      cssStyles.boxShadow = `box-shadow: ${boxShadowValues.x} ${
        boxShadowValues.y
      } ${boxShadowValues.blur} ${
        boxShadowValues.color + boxShadowValues.transparency
      };`;
    });
    boxShadowBlur.addEventListener("input", () => {
      boxShadowValues.blur = boxShadowBlur.value + "px";
      btn.style.boxShadow = `${boxShadowValues.x} ${boxShadowValues.y} ${
        boxShadowValues.blur
      } ${boxShadowValues.color + boxShadowValues.transparency}`;
      cssStyles.boxShadow = `box-shadow: ${boxShadowValues.x} ${
        boxShadowValues.y
      } ${boxShadowValues.blur} ${
        boxShadowValues.color + boxShadowValues.transparency
      };`;
    });
    boxShadowColor.addEventListener("input", () => {
      boxShadowValues.color = boxShadowColor.value;
      btn.style.boxShadow = `${boxShadowValues.x} ${boxShadowValues.y} ${
        boxShadowValues.blur
      } ${boxShadowValues.color + boxShadowValues.transparency}`;
      cssStyles.boxShadow = `box-shadow: ${boxShadowValues.x} ${
        boxShadowValues.y
      } ${boxShadowValues.blur} ${
        boxShadowValues.color + boxShadowValues.transparency
      };`;
    });
    boxShadowAlpha.addEventListener("input", () => {
      let boxshNum = Math.round(boxShadowAlpha.value * 2.55);
      let boxshHex = boxshNum.toString(16);
      boxShadowValues.transparency =
        boxshHex.length == 1 ? 0 + boxshHex : boxshHex;
      btn.style.boxShadow = `${boxShadowValues.x} ${boxShadowValues.y} ${
        boxShadowValues.blur
      } ${boxShadowValues.color + boxShadowValues.transparency}`;
      cssStyles.boxShadow = `box-shadow: ${boxShadowValues.x} ${
        boxShadowValues.y
      } ${boxShadowValues.blur} ${
        boxShadowValues.color + boxShadowValues.transparency
      };`;
    });
  } else {
    boxShadowSec.classList.add("disabled");
    btn.style.boxShadow = "none";
    cssStyles.boxShadow = "";
  }
});

let approvedStyles = [];
function applyCss() {
  for (const key in cssStyles) {
    if (cssStyles[key] != "" && cssStyles[key] != null) {
      approvedStyles.push(key);
    }
  }
}

function getStyle(el, styleProp) {
  var value,
    defaultView = (el.ownerDocument || document).defaultView;
  if (defaultView && defaultView.getComputedStyle) {
    styleProp = styleProp.replace(/([A-Z])/g, "-$1").toLowerCase();
    return defaultView.getComputedStyle(el, null).getPropertyValue(styleProp);
  } else if (el.currentStyle) {
    styleProp = styleProp.replace(/-(\w)/g, function (str, letter) {
      return letter.toUpperCase();
    });
    value = el.currentStyle[styleProp];
    if (/^\d+(em|pt|%|ex)?$/i.test(value)) {
      return (function (value) {
        var oldLeft = el.style.left,
          oldRsLeft = el.runtimeStyle.left;
        el.runtimeStyle.left = el.currentStyle.left;
        el.style.left = value || 0;
        value = el.style.pixelLeft + "px";
        el.style.left = oldLeft;
        el.runtimeStyle.left = oldRsLeft;
        return value;
      })(value);
    }
    return value;
  }
}
document.querySelector(".generatedCode").style.display = "none";
function generateCode() {
  document.querySelector(".generate").style.display = "none";
  document.querySelector(".generatedCode").style.display = "block";

  for (const key in cssStyles) {
    if (cssStyles[key] != "" && cssStyles[key] != null) {
      approvedStyles.push(key);
      if (key != "opening" && key != "closing") {
        cssStyles[key] = `   ${cssStyles[key]}`;
      }
      cssCodePreview.innerHTML += `${cssStyles[key]}
`;
      hljs.highlightAll();
    }
  }
}

const inputs = document.querySelectorAll("input");
inputs.forEach((input) => {
  input.addEventListener("input", () => {
    document.querySelector(".generate").style.display = "block";
    document.querySelector(".generatedCode").style.display = "none";
    cssCodePreview.innerHTML = "";
  });
});

hljs.highlightAll();
var hljs;
