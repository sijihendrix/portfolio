import * as emailjs from "emailjs-com";
import { toast } from "react-toastify";
import { formDataProps } from "../types";

const SERVICE_ID = "service_91iskxk";
const TEMPLATE_ID = "template_qbbmeha";
const USER_ID = "user_rUDjcygOPlpS5espn9ZLE";

export function handleEmailSend(formData: formDataProps) {
  const data = formData;

  emailjs.send(SERVICE_ID, TEMPLATE_ID, data, USER_ID).then(
    function (response) {
      console.log(response.status, response.text);
      toast("Your Email has been sent to me, thanks");
    },
    function (err) {
      console.log(err);
      toast(err);
    }
  );
}
