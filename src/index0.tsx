import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";
library.add(fas);

export { default as Button } from "./components/Button";
export { default as Menu } from "./components/Menu";
export { default as AutoComplete } from "./components/AutoComplete";
export { default as Icon } from "./components/Icon";
export { default as Input } from "./components/Input";
export { default as Progress } from "./components/Progress";
export { default as Transition } from "./components/Transition";
export { default as Upload } from "./components/Upload";
export { default as Dialog } from "./components/Dialog";
export { confirm, alert, modal } from "./components/Dialog";

export { default as Layout } from "./components/Layout";
export { default as Header } from "./components/Layout";
export { default as Footer } from "./components/Layout";
export { default as Content } from "./components/Layout";
export { default as Aside } from "./components/Layout";

export { default as citySelect } from "./components/citySelect";
