import { useState } from "react";

const MeetingButton = () => {
  const [copied, setCopied] = useState(false);

  const handleCreateMeeting = () => {
    // Generate random meeting link using Jitsi (or any other)
    const randomId = Math.random().toString(36).substring(2, 10);
    const meetingLink = `https://meet.jit.si/${randomId}`;

    // Copy to clipboard
    navigator.clipboard.writeText(meetingLink).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });

    // Optional: send the link in your chat here
    console.log("Meeting link:", meetingLink);
  };

  return (
    <div>
      <button onClick={handleCreateMeeting} className="btn btn-primary">
        Start Meeting
      </button>
      {copied && <p className="text-green-500">Link copied to clipboard!</p>}
    </div>
  );
};

export default MeetingButton;
