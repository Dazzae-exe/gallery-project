const styles = {
  pin_container: {
    classNameTailwind:
      "m-0 p-0 w-[90vw] relative left-[50%] transform translate-x-[-50%] grid justify-center",
    styling: {
      gridTemplateColumns: "repeat(auto-fill, 215px)",
      gridAutoRows: "10px",
    },
  },
  pin: {
    classNameTailwind:
      "relative my-[15px] mx-[10px] p-0 rounded-2xl overflow-hidden",
    sizes: {
      small: { gridRowEnd: "span 26" },
      medium: { gridRowEnd: "span 33" },
      large: { gridRowEnd: "span 45" },
    },
  },
};

const galleryParams = {
  params: {
    per_page: 40,
    order_by: "latest",
  },
};

export { styles, galleryParams };
