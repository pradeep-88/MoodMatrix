export default function MusicPlayer({ mood }) {
  const moodPlaylists = {
    happy: "https://open.spotify.com/embed/playlist/37i9dQZF1DXd8cOUiye1o2",   // Happy Hindi Hits
    sad: "https://open.spotify.com/embed/playlist/37i9dQZF1DWXbLOeoi7Q0E",     // Sad Hindi Songs
    angry: "https://open.spotify.com/embed/playlist/37i9dQZF1DWTkxQvqMy4WW",   // Power Bollywood (angry/energetic vibe)
    neutral: "https://open.spotify.com/embed/playlist/37i9dQZF1DX5q67ZpWyRrZ", // Chill Hindi Vibes
  };

  return (
    <div className="card mt-6 flex flex-col items-center w-full">
      <h2 className="text-lg font-semibold mb-2">🎵 Hindi Songs for your Mood</h2>
      <iframe
        src={moodPlaylists[mood] || moodPlaylists["neutral"]}
        width="100%"
        height="380"
        frameBorder="0"
        allow="encrypted-media"
        className="rounded-xl shadow-lg"
      ></iframe>
    </div>
  );
}
