import { Header } from "./components/Header";
import { Sidebar } from "./components/Sidebar";
import { Post, PostType } from "./components/Post";

import styles from "./App.module.css";

import "./global.css";

const posts: PostType[] = [
    {
        id: 1,
        author: {
            avatarUrl: "https://github.com/VitorGuilhermo.png",
            name: "Vitor Guilhermo",
            role: "Desenvolvedor Web Junior"
        },
        content: [
            { type: "paragraph", content: "Fala galeraa 👋" },
            { type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀" },
            { type: "paragraph", content: "Fala galeraa 👋" },
            { type: "link", content: "👉 jane.design/doctorcare" },
            { type: "link", content: "#novoprojeto" },
            { type: "link", content: "#nlw" },
            { type: "link", content: "#rocketseat" },
        ],
        publishedAt: new Date("2022-07-28 19:49:00"),
    },
    {
        id: 2,
        author: {
            avatarUrl: "https://github.com/VitorGuilhermo.png",
            name: "Alphonse",
            role: "Desenvolvedor Web Junior"
        },
        content: [
            { type: "paragraph", content: "Fala galeraa 👋👋" },
            { type: "paragraph", content: "Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀" },
            { type: "link", content: "👉 jane.design/doctorcare" },
            { type: "link", content: "#novoprojeto" },
            { type: "link", content: "#nlw" },
            { type: "link", content: "#rocketseat" },
        ],
        publishedAt: new Date("2022-07-27 19:49:00"),
    },
];

function App() {
    
    return (
        <div>
            <Header />

            <div className={styles.wrapper}>
                <aside>
                    <Sidebar />
                </aside>
                
                <main>
                    {
                        posts.map(post => {
                            return (
                                <Post 
                                    key={post.id}
                                    post={post}
                                />
                            )
                        })
                    }
                </main>
            </div>
        </div>
    );
}

export default App;