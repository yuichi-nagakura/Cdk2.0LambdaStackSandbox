import { EventBridgeEvent } from 'aws-lambda';

type Detail = {
  state: 'pending' | 'running' | 'stopping' | 'stopped';
};

export const handler = async (
  event: EventBridgeEvent<'EC2 Instance State-change Notification', Detail>
): Promise<void> => {
  console.log('Batch start ----');
  console.log(event);
  console.log(new Date().toISOString());
  console.log('Batch end ----');
};
