import { Schema, model, Types } from 'mongoose';

interface TimeBlock {
    // Users that are signed up for time block
    users: [string];
    // Id of the room section that the time block corresponds to
    sectionId: Types.ObjectId;
    startsAt: Date;
    endsAt: Date;
}

const timeBlockSchema = new Schema<TimeBlock>({
    // Users that are signed up for time block
    users: [String],
    // Id of the room section that the time block corresponds to
    sectionId: Types.ObjectId,
    startsAt: Date,
    endsAt: Date,
});

const TimeBlockModel = model<TimeBlock>('TimeBlock', timeBlockSchema);

export default TimeBlockModel;
