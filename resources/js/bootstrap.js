import axios from "axios";
import jQuery from "jquery";

// Set axios and jQuery to be globally accessible
window.axios = axios;
window.$ = window.jQuery = jQuery;

// Set default headers for axios
window.axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
