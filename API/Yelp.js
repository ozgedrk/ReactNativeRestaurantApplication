import axios from "axios";

export default axios.create({
    baseURL:'https://api.yelp.com/v3/businesses',
    headers:{
       Authorization:
       'Bearer F1_WhRIGMZcE4QWuO26wl9dUd9JUr3M6u4a0OWWhpwZbrafBpqWkdQ73gUXzAGbAsAW1GnW3jwkNUps12aWhTlG9oC8Nz5fLzu3MxBUQAU5O66Bmz95g3XUP-5A8ZnYx',
    },
})