import FeedbackItem from "./FeedbackItem";

const feedbackItems = [
  {
    upvoteCount: 593,
    badgeLetter: "A",
    companyName: "Adidas",
    text: "lorem test test",
    daysAgo: 4,
  },
  {
    upvoteCount: 553,
    badgeLetter: "N",
    companyName: "Nike",
    text: "lorem test test",
    daysAgo: 6,
  },
];

export default function FeedbackList() {
  return (
    <ol className="feedback-list">
      {feedbackItems.map((item) => (
        <FeedbackItem feedbackItem={item} />
      ))}
    </ol>
  );
}
