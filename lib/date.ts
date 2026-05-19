
export function getRelativeTime(dateString: string): string {
    const now = new Date();
    const past = new Date(dateString);
    const diffInMs = now.getTime() - past.getTime();

    const diffInSeconds = Math.floor(diffInMs / 1000);
    const diffInMinutes = Math.floor(diffInSeconds / 60);
    const diffInHours = Math.floor(diffInMinutes / 60);
    const diffInDays = Math.floor(diffInHours / 24);

    if (diffInSeconds < 60) return 'JUST NOW';
    if (diffInMinutes < 60) return `${diffInMinutes}M AGO`;
    if (diffInHours < 24) return `${diffInHours}H AGO`;
    if (diffInDays < 7) return `${diffInDays}D AGO`;

    return past.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}