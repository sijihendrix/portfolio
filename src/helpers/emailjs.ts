import * as emailjs from "emailjs-com";

const SERVICE_ID = "service_91iskxk";
const TEMPLATE_ID = "template_qbbmeha";
const USER_ID = "user_rUDjcygOPlpS5espn9ZLE";

export function handleClick(e: React.SyntheticEvent, formData: any) {
  e.preventDefault();

  const data = formData;

  emailjs.send(SERVICE_ID, TEMPLATE_ID, data, USER_ID).then(
    function (response) {
      console.log(response.status, response.text);
    },
    function (err) {
      console.log(err);
    }
  );
}
