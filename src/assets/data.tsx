import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";


export const projects = [
  {
    id: "1",
    title: "CRYPTO PRICE TRACKING",
    image: "./img/crypto.jpg",
    des: "Displays the latest prices for popular Cryptocurrencies like Bitcoin, Ethereum, etc., updated frequently. Users can select a specific Cryptocurrency to view detailed price trends and historical data. Converts Cryptocurrency prices to various fiat currencies, such as USD, EUR, etc., ensuring broader accessibility.",
    deplyo_url: "https://crypto-place-ten-xi.vercel.app/",
    technologies: ["React", "HTML", "CSS"]
  },

  {
    id: "2",
    title: "MUSIC-PLAYER",
    image: "./img/spotify.jpg",
    des: "Created a music streaming platform with features like user playlists, song playback, and album browsing functionality. Implemented controls for play, pause, next, and previous, ensuring a seamless user experience. Utilized Context API for managing global state, including current song, playback status, and user playlists, maintaining a smooth and responsive UI.",
    deplyo_url: "https://music-player-weld-alpha.vercel.app/",
    technologies: ["React", "HTML", "CSS"]
  },

  {
    id: "3",
    title: "STREAMLINE",
    image: "./img/netflix.jpg",
    des: "Integrated user authentication enabling secure login and registration functionalities.Utilized Firebase Authentication to manage user accounts, ensuring secure and efficient user access and personalization Implemented on-click thumbnail video playback, providing seamless content viewing experiences",
    deplyo_url: "https://stremline.vercel.app/",
    technologies: ["React", "Firebase", "HTML", "CSS"]
  },
];

export const contacts = [
  {
    name: "linkdin",
    icon: <FaLinkedin />,
    url: "https://www.linkedin.com/in/shivanibmane/",
  },
  {
    name: "github", icon: <FaGithubSquare />
    , url: "https://github.com/shivanibmane"
  },
];
