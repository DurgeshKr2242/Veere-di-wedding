import axios from 'axios';

interface RSVPData {
  name: string;
  attending: boolean;
  guests: number;
  timestamp: string;
}

// Change this to your proxy server URL (e.g., when deployed)
const PROXY_URL = 'https://veere-di-wedding.vercel.app/rsvp';

export const submitRSVP = async (
  data: Omit<RSVPData, 'timestamp'>
): Promise<void> => {
  try {
    const rsvpData: RSVPData = {
      ...data,
      timestamp: new Date().toISOString(),
    };

    // Convert the data to URL-encoded format
    const params = new URLSearchParams();
    Object.entries(rsvpData).forEach(([key, value]) => {
      params.append(key, String(value));
    });

    await axios.post(PROXY_URL, params.toString(), {
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    });
  } catch (error) {
    console.error('Error submitting RSVP:', error);
    throw new Error('Failed to submit RSVP. Please try again.');
  }
};
