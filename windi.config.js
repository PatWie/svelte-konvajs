import colors from "windicss/colors";

export default {
  plugins: [
    require("windicss/plugin/forms"),
    require("windicss/plugin/typography"),
    require("windicss/plugin/aspect-ratio"),
  ],
  shortcuts: {
    hstack: "flex items-center",
    vstack: "flex flex-col",
    btn: "justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500",
    "text-link": "text-indigo-700 hover:text-indigo-900",
  },
};
