import { useState } from "react";
import { TriangleUpIcon } from "@radix-ui/react-icons";
import { TFeedbackItem } from "../../lib/types";

type FeedbackItemProps = { feedbackItem: TFeedbackItem };

export default function FeedbackItem({ feedbackItem }: FeedbackItemProps) {
  const [open, setOpen] = useState(false);
  const [upvoteCount, setUpvoteCount] = useState(feedbackItem.upvoteCount);

  const handleToggleFeedback = () => setOpen((prev) => !prev);
  const handleUpvoteCount = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    setUpvoteCount((prev) => ++prev);
    event.currentTarget.disabled = true;
    event.stopPropagation();
  };

  return (
    <li
      className={`feedback ${open ? "feedback--expand" : null}`}
      onClick={handleToggleFeedback}
    >
      <button onClick={handleUpvoteCount}>
        <TriangleUpIcon />
        <span>{upvoteCount}</span>
      </button>

      <div>
        <p>{feedbackItem.badgeLetter}</p>
      </div>

      <div>
        <p>{feedbackItem.company}</p>
        <p>{feedbackItem.text}</p>
      </div>

      {/* <p>{feedbackItem.daysAgo}d</p> */}
      <p>{feedbackItem.daysAgo === 0 ? "NEW" : `${feedbackItem.daysAgo}d`}</p>
    </li>
  );
}
