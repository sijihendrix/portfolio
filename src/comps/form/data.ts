export const formDataDefault = { from_name: "", reply_to: "", message: "" };

export const data = [
  {
    placeholder: "Your Name",
    message: false,
    type: "text",
    name: "from_name",
    errorMsg: "Name must be at least 2 characters",
  },
  {
    placeholder: "Your Email",
    message: false,
    type: "email",
    name: "reply_to",
    errorMsg: "Please input a valid email",
  },
];
