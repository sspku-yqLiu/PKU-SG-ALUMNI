import Card from "../../../components/Card";
import Timeline from "@mui/lab/Timeline";
import TimelineItem, { timelineItemClasses } from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";

import { useQuery } from "@tanstack/react-query";
import { getActivities } from "../../../api";

export default function TimelineComp() {
  const { data: { data: { activities = [] } = {} } = {} } = useQuery({
    queryKey: ["activities"],
    queryFn: getActivities,
  });
  return (
    <Card>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <b>最近活动</b>
        <Timeline
          sx={{
            [`& .${timelineItemClasses.root}:before`]: {
              flex: 0,
              padding: 0,
            },
          }}
        >
          {activities.map((activity, index) => (
            <TimelineItem key={index}>
              <TimelineSeparator>
                <TimelineDot color="primary" />
                {index !== activities.length - 1 && <TimelineConnector />}
              </TimelineSeparator>
              <TimelineContent>{activity.title}</TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </div>
    </Card>
  );
}
