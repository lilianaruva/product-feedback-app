import { v4 as uuidv4 } from "uuid";

function feedbackData() {
  return ([
    {
      id: uuidv4(),
      title: "Q&A within the challenge hubs",
      detail: "Challenge-specific Q&A would make for easy reference.",
      category: "Feature",
      status: "Planned",
      vote: "65",
      comment: [
        {
          user:"Emma",
          username:"@ema-stuff",
          comment:"it's fine"
        }
      ]
    },
    {
      id: uuidv4(),
      title: "Add tags for solutions",
      detail: "Easier to search for solutions based on a specific stack.",
      category: "Enhancement",
      status: "Planned",
      vote: "112",
    },
    {
      id: uuidv4(),
      title: "Allow image/video upload to feedback",
      detail: "Images and screencasts can enhance comments on solutions.",
      category: "UI",
      status: "Live",
      vote: "51",
    },
    {
      id: uuidv4(),
      title: "Preview images not loading",
      detail: "Challenge preview images are missing when you apply a filter.",
      category: "Bug",
      status: "Live",
      vote: "3",
    },
    {
      id: uuidv4(),
      title: "Add a dark theme option",
      detail:
        "It would help people with light sensitivities and who prefer dark mode.",
      category: "Feature",
      status: "In-Progress",
      vote: "99",
    },
    {
      id: uuidv4(),
      title: "Ability to follow others",
      detail: "Stay updated on comments and solutions other people post.",
      category: "UX",
      status: "Planned",
      vote: "42",
    }
  ]
  );
}


export default feedbackData();
