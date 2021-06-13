import { lorem } from "../../helpers/lorem";
import Tea from "../../assets/tea.jpg";
import Ships from "../../assets/ships.jpg";
import Motorcycle from "../../assets/motorcycle.jpg";

export const data = [
  {
    title: "Lorem",
    description: lorem.generateSentences(4),
    source: Tea,
    link: "https://johnkavanagh.co.uk/projects/",
  },
  {
    title: "Lorem",
    description: lorem.generateSentences(4),
    source: Ships,
    link: "http://members.dominioncooperative.org/",
  },
  {
    title: "SummersBloom",
    description: lorem.generateSentences(4),
    source: Motorcycle,
    link: "https://summersbloomlagos.netlify.app/",
  },
  {
    title: "Wazobia-tech",
    description: lorem.generateSentences(4),
    source: Tea,
    link: "https://wazobia.tech/",
  },
];
